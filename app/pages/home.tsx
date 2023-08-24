
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import HomeComponents from '../components/HomeComponents'
function Home() {
 
 
  return (
    <div >
         <HomeComponents />
       
    </div>

  
  )
}

export default Home