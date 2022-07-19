import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateCitasAsync } from '../firebase/dataInDB';
import { deleteCitas, updateCitas } from '../redux/reducers/citasReducers';

export const ModalClients = ({ mod, data, idCit }) => {
    const [edit, setEdit] = useState({
        name: data.name,
        mail: data.mail,
        hour: data.hour,
        available: ''
    })
    const { register, formState: { errors },  handleSubmit } = useForm();
    const dispatch = useDispatch();
    
    const handleChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (dat) => {
        dispatch(updateCitas(dat))
        // updateCitasAsync(dat, idCit)
        // mod()
    }
    const deleteCita = (id) => {
        dispatch(deleteCitas(id))
        mod()
    }


    useEffect(() => {
        setEdit(data)
    }, [])

    return (
        <div aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed bottom-20 z-50 w-full  h-modal md:h-full justify-center items-center">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Id: {data.id}
                        </h3>
                        <button onClick={mod} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-6 text-gray-300">
                        <form className=' flex flex-col w-2/3 m-auto text-black'>
                            <input value={edit.name} name='name' className='my-2' {...register("name",{ required: "Digite su nombre" })} onChange={handleChange} placeholder='Nombre' />
                            <p className='text-red-500 mb-4'>{errors.name?.message}</p>
                            <input value={edit.mail} className='my-2' type='email' {...register("mail", { required: "Digite su correo" })} name='mail' onChange={handleChange} placeholder='Correo' />
                            <p className='text-red-500 mb-4'>{errors.mail?.message}</p>
                            <input value={edit.hour} name="hour" className='my-2' type='time' {...register("hour")}  />
                            <div className='flex justify-evenly'>
                                <input className='my-2' type='checkbox' {...register("available")} placeholder='Fecha' />
                                <span className='text-white'>Marca el check, si la Cita debe estar Disponible</span>
                            </div>
                        </form>
                    </div>
                    <div className=" flex justify-end w-full p-4 space-x-2 rounded-b border-t text-white">
                        {/* <button onClick={()=>deleteCita(data.id)} className="bg-red-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 ">Eliminar</button> */}
                        <span className='flex justify-end'>
                            <button onClick={handleSubmit(onSubmit)} className="flex bg-green-700  justify-self-end rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 mx-1">Actualizar</button>
                            <button className=" bg-blue-700  flex rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 mx-1" onClick={mod}>Cancel</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
