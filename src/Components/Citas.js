import React from 'react'

export const Citas = ({ data }) => {
    return (
        <tr className={data.name === ''? 'underline  even:bg-gray-700' : 'text-white border-b '}>
            <td  className="px-6 py-4">
                {data.name === ''? 'Nombre' : data.name}
            </td>
            <td className="px-6 py-4">
                {data.mail === ''? 'ejemplo@gmail.com' : data.mail}
            </td>
            <td className="px-6 py-4">
                {data.hour}
            </td>
            <td className="px-6 py-4">
                {data.available? 'Disponible': 'Ocupada'}
            </td>
            <td className="px-6 py-4 ">
                <p href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
            </td>
        </tr>
    )
}
