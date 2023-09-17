import React from 'react';
import { useAuth } from '@/app/pages/api/auth/nextauth';
import {  useNavigate } from 'react-router-dom'
import { FaBuilding,FaChrome ,FaUsers,FaChalkboardTeacher,FaDoorClosed} from 'react-icons/fa';
function Home() {
  const { user, loginOut } = useAuth();
  const navigate = useNavigate(); 
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white shadow p-20 flex items-center">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full mr-3"
            src="/Man.png"
            alt="Profile"
          />
          <div>
            <span className="text-2xl font-semibold">{user ? user.name : ''}</span>
            <p className="text-lg text-gray-600">
              Administrator &amp; Examination Controller<br />
              GCUF Sahiwal
            </p>
          </div>
        </div>
        {user ? (
          <div className="ml-auto">
            <button onClick={loginOut} className="text-lg text-white rounded-lg bg-red-500  w-20 h-12">
              Logout
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex-grow p-4 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
   
          <div onClick={() => navigate('/Departments')} className="flex flex-col items-start bg-white shadow w-80 h-60 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
            {/* Square card */}
            <div className="flex flex-col items-left mb-2">
              <FaBuilding  className="custom-icon mt-5 mr-2 mb-5 text-[#4E7AC8]"/>
              <h2 className="font-semibold text-2xl text-[#4E7AC8]">Departments</h2>
            </div>
            {/* Department content here */}
          </div>
    
          <div className="flex flex-col items-start bg-white shadow w-80 h-60 rounded-lg p-4 hover:bg-green-100 cursor-pointer">
            
            {/* Square card */}
            <div className="flex flex-col items-left mb-2">
              <FaChalkboardTeacher  className="custom-icon mt-5 mr-2 mb-5 text-[#80B527]" />
              <h2 className="font-semibold text-2xl text-[#80B527]">Faculty</h2>
            </div>
            {/* Department content here */}
          </div>
          <div onClick={() => navigate('/Website')} className="flex flex-col items-start bg-white shadow w-80 h-60 rounded-lg p-4 hover:bg-orange-100 cursor-pointer">
            {/* Square card */}
            <div className="flex flex-col items-left mb-2">
              <FaChrome className="custom-icon mt-5 mr-2 mb-5 text-[#EB7724]" />
              <h2 className="font-semibold text-2xl text-[#EB7724]">Website</h2>
            </div>
            {/* Department content here */}
          </div>
          <div className="flex flex-col items-start bg-white shadow w-80 h-60 rounded-lg p-4 hover:bg-red-100 cursor-pointer">
            {/* Square card */}
            <div className="flex flex-col items-left mb-2">
              <FaUsers  className="custom-icon mt-5 mr-2 mb-5 text-[#F6508E]"/>
              <h2 className="font-semibold text-2xl text-[#F6508E]">Admin Staff</h2>
            </div>
            {/* Department content here */}
          </div>
        </div>
      </div>





    </div>
  );
}

export default Home;