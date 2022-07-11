import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'
export const Navb = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/272190843_4584059901716198_1718979668192906295_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFiKvOJQtstzZ8-v4ktbMjhsREZyD5tGlGxERnIPm0aUR-Ieo5IPmuhu8TwtPowvIgcdE1dbxIhNB6WTrN4W2Dj&_nc_ohc=AFyoD6lSJkIAX9hKOlf&tn=3C0RCJjyOlAdtizK&_nc_ht=scontent.fbog14-1.fna&oh=00_AT-2ckREIR_ZB08oQo6wvCzITAZ2hABR2yka8yzgJigQGg&oe=62D0A23B" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Anowuta</span>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
                        <li>
                            <NavLink to="/" activeclass="active" className="block py-2 pr-4 pl-3  rounded md:p-1 ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/createCitas" activeclass="active" className="block py-2 pr-4 pl-3  rounded md:bg- md:p-1 ">Crear citas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/listCitas" activeclass="active" className="block py-2 pr-4 pl-3  rounded  md:p-1 ">Lista de citas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
