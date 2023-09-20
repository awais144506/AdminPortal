import React, { useState } from 'react';
import { FaChalkboardTeacher, FaChrome, FaUsers } from 'react-icons/fa';
import AddStaff from './components/AddStaff';


function Staff() {
  const [facultyData, setFacultyData] = useState([
    // Add initial faculty data here
  ]);

  const [isAddFacultyModalOpen, setIsAddFacultyModalOpen] = useState(false);

  const toggleAddFacultyModal = () => {
    setIsAddFacultyModalOpen(!isAddFacultyModalOpen);
  };

  const handleAddFaculty = (newFaculty) => {
    setFacultyData([...facultyData, newFaculty]);
  };
  return (
    <div >
      <div className="bg-[#F6508E] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
        <FaUsers className="text-white depart-icon mr-2" />
        <span>Admin Staff</span>
      </div>
      <div className='p-10'>
        <button
          onClick={toggleAddFacultyModal}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          Add Staff
        </button>

        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Qualification</th>
           
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact No</th>
         
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty, index) => (
              <tr key={index}>
                <td className="border p-2">{faculty.name}</td>
                <td className="border p-2">{faculty.designation}</td>
                <td className="border p-2">{faculty.qualification}</td>
              
                <td className="border p-2">{faculty.email}</td>
                <td className="border p-2">{faculty.contactNo}</td>
       
                <td className="border p-2">
                  <img
                    src={`/images/${faculty.image}`}
                    alt={faculty.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddFacultyModalOpen && (
        <AddStaff
          onAddFaculty={handleAddFaculty}
          onClose={toggleAddFacultyModal}
        />
      )}
    </div>
  );
}

export default Staff