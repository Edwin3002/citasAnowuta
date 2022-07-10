import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import '../css/form.css'
import { citasDefault } from '../data/citas';
import { addCitas, addCitasDefault, emptyCitas } from '../redux/reducers/citasReducers';
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
  const [dataFire, setDataFire] = useState(
    {
      date: date,
    }
  );
  const {dataCitas} = dataFire;
  const uploadData = ()=>{
    // dataCitas.push({citas})
    console.log({date, dataCitas : citas});
    addCitasAsync({date, dataCitas : citas})
  }
  return (
    <div>
      <h2 className='text-center text-white text-4xl my-2'>Agregar Citas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-2/3 m-auto text-black'>
        <input className='my-2' {...register("name", { required: "Digite su nombre", maxLength: 20 })} />
        <p className='text-red-500'>{errors.name?.message}</p>
        <input className='my-2' type='email' {...register("mail", { required: "Digite su correo" })} />
        <p className='text-red-500'>{errors.mail?.message}</p>
        <input autoComplete='on' className='my-2' type='time' {...register("hour", { required: "Digite la fecha" })} />
        <p className='text-red-500'>{errors.hour?.message}</p>
        <input className='text-white bg-blue-700 m-8' type="submit"  value='Send'/>
      </form>
        <button className='text-white bg-blue-700 m-4 p-2' onClick={()=>dispatch(addCitasDefault(citasDefault))} >Agregar formato de citas</button>
        <button className='text-white bg-red-700 m-4 p-2' onClick={()=>dispatch(emptyCitas())} >Eliminar todas las citas</button>
        <button className='text-white bg-green-700 m-4 p-2' onClick={()=>console.log({citas})} >Citas</button>
        <button className='text-white bg-yellow-500 m-4 p-2' onClick={uploadData} >Cargar citas</button>
      <ListCitas/>
    </div>
  )
}
