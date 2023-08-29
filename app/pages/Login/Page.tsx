"use client"
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/app/pages/api/auth/nextauth'


const Login = () => {
    const { user, loginUser, errorMessage } = useAuth()
    const navigate = useNavigate()

    const loginForm = useRef(null)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = { email, password }

        loginUser(userInfo)
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="m-auto p-8 border rounded-md bg-white shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit} ref={loginForm}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-[#141414]">
                            Username
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter email..."
                            className="mt-1 p-2 border rounded w-full text-[#141414]"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-[#141414]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password..."
                            autoComplete="password"
                            className="mt-1 p-2 border rounded w-full text-[#141414]"
                        />

                    </div>
                    {errorMessage && (
                        <p className="text-red-500 mb-2">{errorMessage}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-[#4E7AC8] text-white p-2 rounded">Log In</button>
                </form>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center p-4 z-50 ">
                <img src="/logo3.png" alt="Logo" className="w-100 h-60 mx-auto" />
            </div>
        </div>
    )
}


export default Login