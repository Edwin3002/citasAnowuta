import React from 'react'
import { useSelector } from 'react-redux'
import { Citas } from './Citas'

export const ListCitas = () => {

    const { citas } = useSelector((store) => store.citas)

    return (
        <table className="mx-auto w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
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
            <tbody className='bg-blue-300'>
                
                {citas[0] === undefined?
                 null:
                citas.map((cita) => (
                    <Citas key={cita.id} data={cita} />
                ))}
            </tbody>
        </table>
    )
}
