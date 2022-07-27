import React from 'react'
import { useDispatch } from 'react-redux';
import { updateDate_Psyc } from '../redux/reducers/citasReducers';

export const Date_Psy = () => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let data
    data = [e.target.name, e.target.value]
    dispatch(updateDate_Psyc(data));

  }

  return (
      <form  className=' flex flex-col lg:flex-row lg:justify-between w-2/3 m-auto text-black mb-8'>
        <select className='lg:w-2/5 mb-4 lg:mb-0'  name='psychologist' onChange={handleChange}>
          <option >Psicólogo</option>
          <option value="edwin">Edwin</option>
          <option value="diana">Diana</option>
          <option value="pipe">Pipe</option>
        </select>
          <input className='lg:w-2/5' type='date' name='date' placeholder='Fecha' onChange={handleChange} />
      </form>
  )
}
