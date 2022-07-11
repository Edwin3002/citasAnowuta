import React, { useEffect, useState } from 'react'
import { paintCitasAsync } from '../firebase/dataInDB';

export const ListCitasDataBase = () => {

    const [citasDB, setCitasDB] = useState([]);

    const getDataCitas = async () => {
        setCitasDB(await (paintCitasAsync()));
    }

    useEffect(() => {
        getDataCitas()
    }, []);
    return (
        <div className='text-white'>
            {/* <button className='bg-yellow-500' onClick={()=>console.log(citasDB)}>ver citas</button> */}
            <div className='w-full max-w-lg px-10 py-8 mx-auto my-12 bg-green-200  text-black rounded-lg shadow-xl'>
                <h1 className="text-xl mb-5 text-center">Citas Disponibles</h1>
                {
                    citasDB.map((cita, index) => (
                <details key={index} className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                    <summary className="w-full bg-white text-black flex justify-between px-4 py-3  after:content-['+']">{cita.date}</summary>
                    {cita.dataCitas.map((cit, index) =>(
                        // cit.available?
                    <p key={index} className={cit.available? 'text-green-500': 'text-purple-500'}>
                        {cit.name === ''? 'Nombre' : cit.name}
                    </p>
                    // :
                    // null
                    ))}
                </details>
                    ))
                }
            </div>
        </div>
    )
}
