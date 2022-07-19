import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { paintCitasAsync } from '../firebase/dataInDB';
import { addCitasFireBase } from '../redux/reducers/citasReducers';
import { CardFireBase } from './CardFireBase';
import { ModalClients } from './ModalClients';

export const ListCitasDataBase = () => {

    const [citasDB, setCitasDB] = useState([]);
    const dispatch = useDispatch();


    const getDataCitas = async () => {
        setCitasDB(await (paintCitasAsync()));
        setTimeout(() => {
            console.log(citasDB);
            citasDB.map((cita) => (
                dispatch(addCitasFireBase(cita))
            ));
        }, 5000)
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

    useEffect(() => {
        getDataCitas()
    }, []);
    return (
        <div className='text-white'>
            <button className='bg-yellow-500' onClick={() => console.log(citasDB)}>ver citas</button>
            <div className='w-7/8 lg:w-3/4  p-1 sm:p-8 mx-auto my-12 bg-green-200  text-black rounded-lg shadow-xl'>
                <h1 className="text-xl mb-5 text-center">Citas Disponibles</h1>
                {
                    citasDB.map((cita) => (
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
                                            <CardFireBase key={cit.id} data={cit} mod={modalAction} modalDat={modalData} idCit={cita.idCitas} />
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
                    <ModalClients mod={modalAction} data={dataModal} idCit={idCollec} />
            }
        </div>
    )
}
