import React from 'react'

export const Citas = ({ data }) => {
    return (
        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium   whitespace-nowrap">
                {data.name === ''? 'Nombre' : data.name}
            </th>
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
