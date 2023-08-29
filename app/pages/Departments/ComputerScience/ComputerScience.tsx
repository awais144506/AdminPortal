import React from 'react';
import { FaComputer } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function ComputerScience() {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#5B95A9] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
      <FaComputer className="text-white depart-icon mr-2"/>
        <span>Computer Science Department</span>
      </div>

      {/* Semester Content */}
      <div className="flex-grow p-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-10 mt-10">
        
           

            {/* Semester 2 */}
            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
          
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 1
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
          
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 2
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
       
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 3
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
    
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 4
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">

                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 5
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
      
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 6
                </h2>
              </div>
            </div>
            <div onClick={() => navigate('/Semester7')}className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
     
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 7
                </h2>
              </div>
            </div>
            <div  className="bg-white shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
              <div className="flex flex-col items-center mb-2">
          
                <h2 className="font-semibold text-lg text-[#4E7AC8]">
                  Semester 8
                </h2>
              </div>
            </div>

            {/* Add more semester cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerScience;
