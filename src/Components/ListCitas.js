import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Citas } from './Citas'
import { ModalActions } from './ModalActions'

export const ListCitas = () => {

    const [dataModal, setDataModal] = useState()
    const [modalSta, setModalState] = useState(true)
    const { citas } = useSelector((store) => store.citas)
    const modalAction = ()=>{
        setModalState(!modalSta)
    }

    const modalData = (data)=>{
        setDataModal(data)
    }

    return (
        <div className='relative overflow-x-auto'>

            <table className="mx-auto w-3/4  text-sm text-left text-gray-400 ">
                <thead className="text-lg text-white uppercase   bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hora
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Disponible
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-gray-800'>

                    {citas[0] === undefined ?
                        null :
                        citas.map((cita) => (
                            <Citas key={cita.id} data={cita} mod={modalAction} modalDat={modalData}/>
                        ))}
                </tbody>
            </table>
            {
                modalSta?
                null:
                 <ModalActions mod={modalAction} data={dataModal}/>
            }
        </div>
    )
}
