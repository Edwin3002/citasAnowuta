import React, { useState, useEffect } from 'react'

// Este es mi custom hook
const useSortTable = (listToSort, originalKey) => {
    // definimos un estado
    const [list, setList] = useState(listToSort)

    // definimos la función anterior pero sin especificar la lista ya que será la principal
    const sort_lists = (key, inverse) =>
        inverse
            ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
            : [...list].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    // ordenamos la lista con el useEffect
    useEffect(() => {
        setList(sort_lists(originalKey))
    }, [])

    // devolvemos el estado que contiene la lista
    // ..el método para actualizar el estado
    // ..y el método para ordenarla
    return [list, setList, sort_lists]
}

// Ahora seguimos con el componente principal
const Lista = () => {
    // y aquí utilizamos el hook
    const [list, setList, sort] = useSortTable(
        [{
            name: 'Paco',
            mail: 'paco@gmail.com',
            hour: '15:00',
            available: true
        },
        {
            name: 'Sara',
            mail: 'lulu@gmail.com',
            hour: '10:00',
            available: false
        },
        {
            name: 'Luz',
            mail: 'luz@gmail.com',
            hour: '12:00',
            available: false
        }],
        'name'
    )

    return (
        <>
            <button
                onClick={() => {
                    let newSortedList = sort('hour')
                    if (newSortedList[0] === list[0]) newSortedList = sort('hour', true)
                    setList(newSortedList)
                }}
            >
                Ordenar
            </button>

            <ul>
                {list.map((el, i) => (
                    <li key={`lista${i}`}>
                        {el.nombre}: {el.hour}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Lista
