import React from 'react'

export const CardFireBase = ({ data, mod, modalDat }) => {

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
            <td className="p-2 hidden sm:block">
                {data.available ? 'Si' : 'No'}
            </td>
            <td className="p-2">{data.available ?
                <p className=" font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700" onClick={modalEdit}>Agendar</p>:
                'Cita agendada'
            }
            </td>
        </tr>
    )
}
