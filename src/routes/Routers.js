
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../Components/Admin/Login'
import { CreateCitas } from '../Components/CreateCitas'
import { Home } from '../Components/Home'
import { ListCitasDataBase } from '../Components/ListCitasDataBase'
import { Navb } from '../Components/Navb'
export const Routers = () => {
  const { admin } = useSelector((store) => store.citas)

  return (
    <BrowserRouter>
      <Navb ad={admin}/>
      <Routes>
          <Route path='/login' element={admin? <Navigate to='/createCitas'/> : (<Login/>)} />
          <Route path='/home' element={<Home />} />
          <Route path='/listCitas' element={<ListCitasDataBase />} />
          <Route exact path='/createCitas' element={ admin ? (<CreateCitas />) : (<Navigate to='/home'/>)} />
          <Route path='/*' element={admin? <Navigate to='/createCitas'/> : (<Home/>)}/>
      </Routes>
    </BrowserRouter>
  )
}
