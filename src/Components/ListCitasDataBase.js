import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { paintCitasAsync } from '../firebase/dataInDB';
import { addCitasFireBase } from '../redux/reducers/citasReducers';
import { CardFireBase } from './CardFireBase';
import { ModalClients } from './ModalClients';

export const ListCitasDataBase = () => {

    const { citasAgendadas } = useSelector((store) => store.citas)
    const [dataUp, setDataUp] = useState([])
    const dispatch = useDispatch();

    const getDataCitas = async () => {
        dispatch(addCitasFireBase(await (paintCitasAsync())))
    }

    const [dataModal, setDataModal] = useState()
    const [idCollec, setIdCollect] = useState()
    const [modalSta, setModalState] = useState(true)
    const modalAction = () => {
        setModalState(!modalSta)
    }

    const modalData = (data, idC) => {
        setDataModal(data)
        setIdCollect(idC)
    }

    const subirFire=()=>{
        console.log(dataUp);
    }

    useEffect(() => {
        setDataUp(citasAgendadas)
    }, [citasAgendadas])
    useEffect(() => {
        getDataCitas()
    }, []);
    return (
        <div className='text-white'>
            <div className='w-7/8 lg:w-3/4  p-1 sm:p-8 mx-auto bg-green-200 mt-20 text-black rounded-lg shadow-xl'>
                <h1 className="text-xl mb-5 text-center ">Citas Disponibles</h1>
                {
                    citasAgendadas.map((cita, index) => (
                        <details key={cita.idCitas} className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                            <summary className="w-full bg-white text-black flex justify-between px-4 py-3  after:content-['+']">{cita.date}</summary>
                            <table className="mx-auto w-full sm:w-3/4 text-xs sm:text-sm text-left text-gray-400 my-2">
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
                                        <th scope="col" className="p-1 hidden sm:block">
                                            Disponible
                                        </th>
                                        <th scope="col" className="p-1">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-800'>
                                    {cita === undefined ?
                                        null :
                                        cita.dataCitas.map((cit) => (
                                            <CardFireBase key={cit.id} data={cit} mod={modalAction} modalDat={modalData} idCit={[cita.idCitas, index]} />
                                        ))}
                                </tbody>
                            </table>
                        </details>
                    ))
                }
            </div>
            {
                modalSta ?
                    null :
                    <ModalClients mod={modalAction} data={dataModal} idCit={idCollec} up={subirFire} />
            }
        </div>
    )
}
