import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const LoginScreen = () => {

    const {handleSubmit, register, reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        console.log(data)
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        if (localStorage.getItem('token')){
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if (isLogged) {
        return (
            <div>
                <h2>Usser Loged</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' {...register('email')}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' {...register('password')}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginScreen