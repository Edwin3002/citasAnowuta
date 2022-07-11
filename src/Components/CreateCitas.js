import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import '../css/form.css'
import { citasDefault } from '../data/citas';
import { addCitas, emptyCitas } from '../redux/reducers/citasReducers';
import { ListCitas } from './ListCitas';
import uuid from 'react-uuid'
import { addCitasAsync } from '../firebase/dataInDB';

export const CreateCitas = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { citas, date } = useSelector((store) => store.citas)
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addCitas({ ...data, id: uuid() }))
  }
  const citasDef = () => {
    // dispatch(addCitasDefault(citasDefault))
    citasDefault.map(cita => (
      dispatch(addCitas({ ...cita, id: uuid()}))
    ));
  }
  const uploadData = () => {
    addCitasAsync({ date, dataCitas: citas })
  }
  return (
    <div>
      <h2 className='text-center text-white text-4xl my-2'>Agregar Citas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-2/3 m-auto text-black'>
        <input className='my-2' {...register("name", { required: "Digite su nombre", maxLength: 20 })} placeholder='Nombre'/>
        <p className='text-red-500 mb-4'>{errors.name?.message}</p>
        <input className='my-2' type='email' {...register("mail")} placeholder='Correo'/>
        <p className='text-red-500 mb-4'>{errors.mail?.message}</p>
        <input className='my-2' type='time' {...register("hour", { required: "Digite la fecha" })}  placeholder='Fecha'/>
        <p className='text-red-500 mb-4'>{errors.hour?.message}</p>
        <div className='flex justify-evenly'>
        <input  className='my-2' type='checkbox' {...register("available")}  placeholder='Fecha'/>
        <span className='text-white'>Marca el check, si la Cita debe estar Disponible</span>
        </div>
        {/* <input className='text-white w-1/4 mx-auto bg-cyan-500 m-8' type="submit" value='Añadir cita' /> */}
        <button className='text-white w-1/5 mx-auto bg-cyan-500 m-8 p-0 md:p-2' type="submit" value='Añadir cita' >Cargar en tabla</button>
      </form>
      <button className='text-white bg-blue-700 m-4 p-2' onClick={citasDef} >Agregar formato de citas</button>
      <button className='text-white bg-red-700 m-4 p-2' onClick={() => dispatch(emptyCitas())} >Eliminar todas las citas</button>
      <button className='text-white bg-green-700 m-4 p-2' onClick={uploadData} >Cargar citas</button>
      {/* <button className='text-white bg-yellow-500 m-4 p-2' onClick={() => console.log(citas)}>Ver citas</button> */}

      <ListCitas />
    </div>
  )
}
