import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import '../css/form.css'
import { citasDefault } from '../data/citas';
import { addCitas, emptyCitas } from '../redux/reducers/citasReducers';

export const Menu = () => {


  const ed = {
    name: 'ed',
    id: 1
  }
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { citas, date } = useSelector((store) => store.citas)
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addCitas(data))
  }
  let dat = new Date()
  console.log(dat.getFullYear() + '/' + (dat.getMonth() + 1));
  const increment = () => {
    console.log(citas);
    console.log(date);
  }
  const citasDefa = () => {
    console.log(citasDefault);
    console.log(citasDefault);
    dispatch(addCitas(citasDefault))

  }

  return (
    <div>
      <h2 className='text-center'>Agregar Citas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-2/3 m-auto'>
        <input className='my-2' {...register("name", { required: "Digite su nombre", maxLength: 20 })} />
        <p className='text-red-500'>{errors.name?.message}</p>
        <input className='my-2' type='email' {...register("mail", { required: "Digite su correo" })} />
        <p className='text-red-500'>{errors.mail?.message}</p>
        <input autoComplete='on' className='my-2' type='date' {...register("date", { required: "Digite su correo" })} />
        <p className='text-red-500'>{errors.date?.message}</p>
        <input type="submit" />
      </form>
      <button onClick={increment}>count</button>
      <button onClick={citasDefa}>Citas</button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mail
              </th>
              <th scope="col" className="px-6 py-3">
                Hour
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className='bg-blue-300'>{citas[0].map((cita, index) => (
            // cita[0].cit.map(ci => (
            <tr key={cita.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {cita.name}
              </th>
              <td className="px-6 py-4">
                {cita.mail}
              </td>
              <td className="px-6 py-4">
                {cita.hour}
              </td>
              <td className="px-6 py-4 ">
                    <p href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                </td>
            </tr>
            // ))
          ))}</tbody>
        </table>
      </div>
    </div>
  )
}
