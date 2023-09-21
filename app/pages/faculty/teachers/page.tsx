import React, { useState, useEffect } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import AddFaculty from '../components/AddFaculty';

function Faculty() {
  const [facultyData, setFacultyData] = useState(() => {
    // Load faculty data from local storage if available, otherwise use an empty array
    const storedData = localStorage.getItem('facultyData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [isAddFacultyModalOpen, setIsAddFacultyModalOpen] = useState(false);

  const toggleAddFacultyModal = () => {
    setIsAddFacultyModalOpen(!isAddFacultyModalOpen);
  };

  const handleAddFaculty = (newFaculty) => {
    setFacultyData([...facultyData, newFaculty]);
  };

  const handleDeleteFaculty = (index) => {
    const updatedData = [...facultyData];
    updatedData.splice(index, 1);
    setFacultyData(updatedData);
  };

  useEffect(() => {
    localStorage.setItem('facultyData', JSON.stringify(facultyData));
  }, [facultyData]);


  return (
    <div >
      <div className="bg-[#80B527] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
        <FaChalkboardTeacher className="text-white depart-icon mr-2" />
        <span>Faculty</span>
      </div>
      <div className='p-10'>
        <div className="flex justify-center">
          <button
            onClick={toggleAddFacultyModal}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4 "
          >
            Add Faculty
          </button>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Qualification</th>
              <th className="border p-2">Specialization</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact No</th>
              <th className="border p-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty, index) => (
              <tr key={index}>
                <td className="border p-2 text-center">{faculty.name}</td>
                <td className="border p-2 text-center">{faculty.designation}</td>
                <td className="border p-2 text-center">{faculty.qualification}</td>
                <td className="border p-2 text-center">{faculty.specialization}</td>
                <td className="border p-2 text-center">{faculty.email}</td>
                <td className="border p-2 text-center">{faculty.contact}</td>
                <td className="border p-2 text-center">{faculty.department}</td>
                <td className="border p-2 text-center"> <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-16 h-16 rounded-full object-cover"
                /></td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDeleteFaculty(index)}
                    className="text-white font-bold bg-red-500 p-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddFacultyModalOpen && (
        <AddFaculty
          onAddFaculty={handleAddFaculty}
          onClose={toggleAddFacultyModal}
        />
      )}
    </div>
  );
}

export default Faculty;
