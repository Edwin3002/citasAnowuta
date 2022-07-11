import React from 'react'

export const Citas = ({ data }) => {
    return (
        <tr className={data.name === ''? 'border-b underline' : 'text-white border-b'}>
            {/* {data.name === ''? 'Nombre' : data.name}/ */}
            <td scope="row" className="px-6 py-4 font-medium   whitespace-nowrap">
                {data.name === ''? 'Nombre' : data.name}
            </td>
            <td className="px-6 py-4">
                {data.mail === ''? 'ejemplo@gmail.com' : data.mail}
            </td>
            <td className="px-6 py-4">
                {data.hour}
            </td>
            <td className="px-6 py-4 ">
                <p href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
            </td>
        </tr>
    )
}
