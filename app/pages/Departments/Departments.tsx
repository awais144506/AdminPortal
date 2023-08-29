
import React from 'react';
import { FaBuilding,FaUserTie,FaFlask,FaComputer,FaLightbulb,FaGears,FaBuildingUser} from 'react-icons/fa6';
import {  useNavigate } from 'react-router-dom'
function Departments() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#4E7AC8] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
        <FaBuilding className="text-white depart-icon mr-2" />
        <span>Departments</span>
      </div>

      {/* Department Content */}
      <div className="flex-grow p-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-6">
            <div  onClick={() => navigate('/ComputerScience')} className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-cyan-100 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaComputer className="text-[#5B95A9] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#5B95A9]">
                  Computer Science
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#f7dab8] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaUserTie className="text-[#A17C62] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#A17C62]">
                  Business Administration
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-pink-100 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaBuilding className="text-[#FE9BB7] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#FE9BB7]">
                 Food Science
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-red-100 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaFlask className="text-[#A6344B] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#A6344B]">
                Human Nutrition & Dietetics
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-yellow-100 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaLightbulb className="text-[#CC9933] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#CC9933]">
                 Electrical Engineering
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-gray-100 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaGears className="text-[#626262] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#626262]">
                Mechanical Engineering 
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-red-50 cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">
                <FaBuildingUser className="text-[#E76D58] text-3xl mr-2" />
                <h2 className="font-semibold text-xl text-[#E76D58]">
                Civil Engineering
                </h2>
              </div>
            </div>
            

            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
