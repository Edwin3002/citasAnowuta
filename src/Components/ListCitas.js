import React from 'react'
import { useSelector } from 'react-redux'
import { Citas } from './Citas'

export const ListCitas = () => {

    const { citas } = useSelector((store) => store.citas)

    return (
        <table className="mx-auto w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-white uppercase   dark:bg-gray-700">
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
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody className='bg-gray-800'>
                
                {citas[0] === undefined?
                 null:
                citas.map((cita) => (
                    <Citas key={cita.id} data={cita} />
                ))}
            </tbody>
        </table>
    )
}
