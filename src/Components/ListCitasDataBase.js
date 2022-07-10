import React, { useEffect, useState } from 'react'
import { paintCitasAsync } from '../firebase/dataInDB';

export const ListCitasDataBase = () => {

    const [citasDB, setCitasDB] = useState([]);

    const getDataCitas = async () => {
        setCitasDB(await (paintCitasAsync()));
        console.log(citasDB);
    }

    useEffect(() => {
        getDataCitas()
    }, []);
    return (
        <div className='text-white'>
            <button className='bg-yellow-500' onClick={() => console.log(citasDB)}>citas data base</button>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-green-200  text-black rounded-lg shadow-xl'>
                <h1 className="text-xl mb-5 text-center">Citas Agendadas</h1>
                {
                    citasDB.map((cita, index) => (
                <details key={index} className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                    <summary className="w-full bg-white text-black flex justify-between px-4 py-3  after:content-['+']">{cita.date}</summary>
                    {cita.dataCitas.map((cit, index) =>(

                    <p key={index} className="px-4 py-3">
                        {cit.name}
                    </p>
                    ))}
                </details>
                    ))
                }
            </div>
        </div>
    )
}
