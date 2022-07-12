import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { citasDefault } from '../data/citas'
import { Citas } from './Citas'
import { ModalActions } from './ModalActions'

export const ListCitas = () => {
    const key = 'hour'
    const [dataModal, setDataModal] = useState()
    const [modalSta, setModalState] = useState(true)
    const { citas } = useSelector((store) => store.citas)
    const [list, setList] = useState([])
    
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

    // ordenamos la lista con el useEffect
    useEffect(() => {
        console.log(list);
    }, [])
    
    const verCitas = () => {
        console.log(list);
        console.log(citas);
        setList(sort_lists(key))

    }
    return (
        <div className='relative overflow-x-auto'>

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
            <button className='text-white bg-yellow-500 m-4 p-2' onClick={verCitas}>Ver citas</button>

        </div>
    )
}
