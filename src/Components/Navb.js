import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import '../css/navbar.css'
import { logoutLocalStorage } from '../helpers/LocalStorageAuth/LocalS'
import { Logo } from '../img/LogoAnowuta'
import { authAdmin } from '../redux/reducers/citasReducers'
export const Navb = ({ ad }) => {

    const dispatch = useDispatch()
    const [navB, setNavB] = useState(false)

    const logout = (e) => {
        e.preventDefault();
        console.log('hi');
        dispatch(authAdmin());
        logoutLocalStorage()
        // <Navigate to='/home'/>
    }
    return (
        <nav className="bg-white border-gray-200 px-0 lg:px-4 py-1 lg:py-2.5 rounded dark:bg-gray-800">
            <div className=' flex-col w-full lg:hidden fixed z-20 bg-gray-80 '>
                <ul className='flex w-full mx-auto justify-around items-center py-2 bg-gray-800'>
                    <li>
                        <img  width='40px' className='mx-auto' alt='Shortly' src={Logo} />
                    </li>
                    <li>
                        <img onClick={() => setNavB(!navB)} className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1658885580/seedem/ham-2_rdyp3q.svg' />
                    </li>
                </ul>
                {navB ? <div className='flex justify-center w-full xl:flex mx-auto navbMobile mt-4 '>
                    <ul className='flex flex-col text-center absolute  mx-auto w-11/12 py-4  font-bold bg-gray-800 rounded-xl text-white'>
                        <li>
                            <NavLink to="/home" activeclass="active" className="block py-2 pr-4 pl-3  rounded md:p-1 ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" activeclass="active" className="block py-2 pr-4 pl-3  rounded md:bg- md:p-1 ">Iniciar sesión</NavLink>
                        </li>
                        <li>
                            <NavLink to="/listCitas" activeclass="active" className="block py-2 pr-4 pl-3  rounded  md:p-1 ">Lista de citas</NavLink>
                        </li>
                        {
                            ad ?
                                <li>
                                    <div onClick={logout} className="block py-2 pr-4 pl-3  rounded  md:p-1 ">Cerrar sesión</div>
                                </li> :
                                null
                        }
                    </ul>
                </div> :
                    null}
            </div>
            <div className="hidden w-full lg:flex md:w-auto justify-around" id="mobile-menu">
                    <div>
                        <img className='mx-auto' width='40px' alt='Shortly' src={Logo} />
                    </div>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
                    <li className='flex'>
                        <NavLink to="/home" activeclass="active" className="py-2 pr-4 pl-3  rounded md:p-1 my-auto">Home</NavLink>
                    </li>
                    <li className='flex'>
                        <NavLink to="/login" activeclass="active" className="block py-2 pr-4 pl-3  rounded md:bg- md:p-1 my-auto">Iniciar sesión</NavLink>
                    </li>
                    <li className='flex'>
                        <NavLink to="/listCitas" activeclass="active" className="block py-2 pr-4 pl-3  rounded  md:p-1 my-auto">Lista de citas</NavLink>
                    </li>
                    {
                        ad ?
                            <li className='flex'>
                                <div onClick={logout} className="block py-2 pr-4 pl-3  rounded  md:p-1 my-auto">Cerrar sesión</div>
                            </li> :
                            null
                    }
                </ul>
            </div>
        </nav>

    )
}
