
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import HomeComponents from '../components/HomeComponents'
function Home() {
  const navigate = useNavigate()
  const {user,loginOut} = useAuth()
  return (
    <div >
        {user ? (
        <>
       <div>
       <button onClick={loginOut} className="btn">Logout</button>
        </div>
        </>
        ):(
            <Link className="btn" to="/login">Login</Link>
        )}
     <HomeComponents />
    </div>

  
  )
}

export default Home