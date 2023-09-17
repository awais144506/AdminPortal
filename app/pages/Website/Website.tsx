import {  useNavigate } from 'react-router-dom'
import { FaChrome } from 'react-icons/fa';
function Website() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
        <FaChrome className="text-white depart-icon mr-2" />
        <span>Website</span>
      </div>

      {/* Department Content */}
      <div className="flex-grow p-4 mt-10">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-6">
            <div onClick={() => navigate('/Events')} className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative ">
              <div className="flex flex-col items-center   absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Events
                </h2>
              </div>
            </div>
            <div onClick={() => navigate('/News')} className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-center  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  News
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Time Tables
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Date Sheets
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Academic Calender
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Road Maps
                </h2>
              </div>
            </div>

            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Prospectus
                </h2>
              </div>
            </div>
            <div className="bg-white shadow w-80 h-40 rounded-lg p-4 hover:bg-[#EB7724] hover:text-[#fff] cursor-pointer relative">
              <div className="flex flex-col items-left  absolute top-12">

                <h2 className="font-semibold text-xl ">
                  Merit Lists
                </h2>
              </div>
            </div>



            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>);
}

export default Website;
