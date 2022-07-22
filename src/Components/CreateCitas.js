import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import '../css/form.css'
import { addCitas } from '../redux/reducers/citasReducers';
import { ListCitas } from './ListCitas';
import uuid from 'react-uuid'



export const CreateCitas = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addCitas({ ...data, id: uuid() }))
    reset()
  }


  return (
    <div>
      <h2 className='text-center text-white text-4xl my-2'>Agregar Citas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-2/3 m-auto text-black'>
        <input className='my-2' {...register("name", { required: "Digite su nombre", maxLength: 20 })} placeholder='Nombre' />
        <p className='text-red-500 mb-4'>{errors.name?.message}</p>
        <input className='my-2' type='email' {...register("mail", { required: "Digite la correo" })} placeholder='Correo' />
        <p className='text-red-500 mb-4'>{errors.mail?.message}</p>
        <input className='my-2' type='time' {...register("hour", { required: "Digite la fecha" })} placeholder='Fecha' />
        <p className='text-red-500 mb-4'>{errors.hour?.message}</p>
        <div className='flex justify-evenly'>
          <input className='my-2' type='checkbox' {...register("taken")} placeholder='Fecha' />
          <span className='text-white'>Marca el check, si la Cita debe estar Disponible</span>
        </div>
        <button className='text-white w-1/5 mx-auto bg-cyan-500 m-8 p-0 md:p-2' type="submit" value='Añadir cita' >Cargar en tabla</button>
      </form>
      
      {/* <button className='text-white bg-yellow-500 m-4 p-2' onClick={verCitas}>Ver citas</button> */}
      <ListCitas />
    </div>
  )
}
