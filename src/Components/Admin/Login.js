import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginLocalStorage, verifyLocalStorage } from '../../helpers/LocalStorageAuth/LocalS'
import { Logo } from '../../img/LogoAnowuta'
import { authAdmin } from '../../redux/reducers/citasReducers'

export const Login = () => {

    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const login = (data) => {
        const { user, password } = data
        if (user === 'admin' && password === '1234') {
            dispatch(authAdmin());
            loginLocalStorage()
        } else {
            alert('datos invalidos')
        }
    }

    useEffect(() => {
        verifyLocalStorage()
    }, [])

    return (
        <div className="min-h-full flex items-center justify-center mt-12 lg:mt-0 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto" width='80px' src={Logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Inicio de sesión</h2>
                </div>
                <form onSubmit={handleSubmit(login)}>
                    <input className='px-2 my-2 w-full' type='text'{...register("user", { required: "Digite su usuario", maxLength: 20 })} placeholder='Nombre' />
                    <p className='text-red-500 mb-4'>{errors.user?.message}</p>
                    <input className='px-2 my-2 w-full' type='password' {...register("password", { required: "Digite su contraseña" })} placeholder='Contraseña' />
                    <p className='text-red-500 mb-4'>{errors.password?.message}</p>

                    <button className='text-white w-full  bg-cyan-500 mt-8 p-2' type="submit" >Iniciar</button>
                </form>
            </div>
        </div>
    )
}
