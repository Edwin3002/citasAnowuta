import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { citasDefault } from '../data/citas'
import { addCitasAsync } from '../firebase/dataInDB'
import { addCitas, emptyCitas } from '../redux/reducers/citasReducers'
import { Citas } from './Citas'
import { ModalActions } from './ModalActions'

export const ListCitas = () => {
    const key = 'hour'
    const [dataModal, setDataModal] = useState()
    const [modalSta, setModalState] = useState(true)
    const { citas, date } = useSelector((store) => store.citas)
    const [list, setList] = useState([])
    const dispatch = useDispatch();


    const modalAction = () => {
        setModalState(!modalSta)
    }

    const modalData = (data) => {
        setDataModal(data)
    }

    const sort_lists = (key, inverse) =>
        inverse
            ? [...citas].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
            : [...citas].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    const citasDef = () => {
        citasDefault.map(cita => (
            dispatch(addCitas({ ...cita, id: uuid() }))
        ));
    }

    const uploadData = () => {
        addCitasAsync({ date, dataCitas: list, idCitas: uuid() })
        setTimeout(() => {
            dispatch(emptyCitas())
        }, 2000)
    }
    // const verCitas = () => {
    //     console.log(list);
    //     console.log(citas);
    // }

    useEffect(() => {
        setList(sort_lists(key))
    }, [citas])

    return (
        <div className='relative overflow-x-auto'>
            <div className=" flex justify-between w-full p-4 space-x-2 rounded-b border-t text-white">
                <button className='text-white bg-red-700 m-4 p-2' onClick={() => dispatch(emptyCitas())} >Eliminar todas las citas</button>
                <span className='flex justify-end'>
                    <button className='text-white bg-blue-700 m-4 p-2' onClick={citasDef} >Agregar formato de citas</button>
                    <button className='text-white bg-green-700 m-4 p-2' onClick={uploadData} >Cargar citas</button>
                </span>
            </div>
            <table className="mx-auto w-full sm:w-3/4 text-xs sm:text-sm text-left text-gray-400 ">
                <thead className=" text-white uppercase   bg-gray-700">
                    <tr className='text-sm sm:text-xl'>
                        <th scope="col" className="p-1">
                            Nombre
                        </th>
                        <th scope="col" className="p-1">
                            Correo
                        </th>
                        <th scope="col" className="p-1">
                            Hora
                        </th>
                        <th scope="col" className="p-1">
                            Disponible
                        </th>
                        <th scope="col" className="p-1">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-gray-800'>
                    {citas[0] === undefined ?
                        null :
                        list.map((cita) => (
                            <Citas key={cita.id} data={cita} mod={modalAction} modalDat={modalData} />
                        ))}
                </tbody>
            </table>
            {
                modalSta ?
                    null :
                    <ModalActions mod={modalAction} data={dataModal} />
            }
            {/* <button className='text-white bg-yellow-500 m-4 p-2' onClick={verCitas}>Ver citas</button> */}
        </div>
    )
}
