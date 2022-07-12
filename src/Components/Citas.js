import React from 'react'

export const Citas = ({ data, mod, modalDat }) => {

    const modalEdit = () => {
        mod()
        modalDat(data)
    }
    return (
        <tr className={!data.available ? 'underline  even:bg-gray-600 odd:bg-gray-800' : 'text-white border-b even:bg-gray-600 odd:bg-gray-800'}>
            <td className="p-2">
                {data.name === '' ? 'Nombre' : data.name}
            </td>
            <td className="p-2">
                {data.mail === '' ? 'ejemplo@gmail.com' : data.mail}
            </td>
            <td className="p-2">
                {data.hour}
            </td>
            <td className="p-2">
                {data.available ? 'Si' : 'No'}
            </td>
            <td className="p-2">
                <p className="text-center font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700" onClick={modalEdit}>Edit or Delete</p>
            </td>
        </tr>
    )
}
