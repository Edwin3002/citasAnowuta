
import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from '../Components/Home'
import { Menu } from '../Components/Menu'
import { Navb } from '../Components/Navb'
export const Routers = () => {
  return (
    <BrowserRouter>
    <Navb/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  )
}
