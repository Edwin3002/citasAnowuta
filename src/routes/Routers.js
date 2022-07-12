
import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { CreateCitas } from '../Components/CreateCitas'
import { Home } from '../Components/Home'
import { ListCitasDataBase } from '../Components/ListCitasDataBase'
import { Navb } from '../Components/Navb'
export const Routers = () => {
  return (
    <BrowserRouter>
    <Navb/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/createCitas' element={<CreateCitas/>}/>
        <Route path='/listCitas' element={<ListCitasDataBase/>}/>
    </Routes>
    </BrowserRouter>
  )
}
