import React from 'react'
import { Logo } from '../img/LogoAnowuta'
import Lista from './Lista'

export const Home = () => {
  return (
    <div>
      <div className='h-screen flex items-center'>
      <img className='w-1/4 m-auto' src={Logo} alt='hongos'/>
      </div>
      <Lista/>
    </div>
  )
}
