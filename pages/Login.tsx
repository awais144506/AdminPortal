"use client"
import { useState, FormEvent } from 'react'
import { login } from '@/appwrite'


export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password)
      .then((account) => alert(`Warr gya bai ${account.osName}`))
   
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-8 border rounded-md bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-[#141414]">
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email...'
              className="mt-1 p-2 border rounded w-full text-[#141414]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#141414]">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password...'
              className="mt-1 p-2 border rounded w-full text-[#141414]"
            />
            
          </div>
          <button
            type="submit"
            className="w-full bg-[#4E7AC8] text-white p-2 rounded">Log In</button>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center p-4 ">
        <img src="/logo3.png" alt="Logo" className="w-100 h-60 mx-auto" />
      </div>
    </div>
  )
}


export default Login