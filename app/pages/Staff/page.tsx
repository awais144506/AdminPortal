import React, { useState,useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import AddStaff from './components/AddStaff';

function Staff() {
  const [staffData, setStaffData] = useState(() => {
    const storedData = localStorage.getItem('staffData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);

  const toggleAddStaffModal = () => {
    setIsAddStaffModalOpen(!isAddStaffModalOpen);
  };

  const handleAddStaff = (newStaff) => {
    setStaffData([...staffData, newStaff]);
  };

  const handleDeleteFaculty = (index) => {
    const updatedData = [...staffData];
    updatedData.splice(index, 1);
    setStaffData(updatedData);
  };

  useEffect(() => {
    localStorage.setItem('staffData', JSON.stringify(staffData));
  }, [staffData]);
  return (
    <div >
      <div className="bg-[#F6508E] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
        <FaUsers className="text-white depart-icon mr-2" />
        <span>Admin Staff</span>
      </div>
      <div className='p-10'>
      <div className="flex justify-center">
          <button
            onClick={toggleAddStaffModal}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4 "
          >
            Add Faculty
          </button></div>

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
            {staffData.map((staff, index) => (
              <tr key={index}>
                <td className="border p-2 text-center">{staff.name}</td>
                <td className="border p-2 text-center">{staff.designation}</td>
                <td className="border p-2 text-center">{staff.qualification}</td>
                <td className="border p-2 text-center">{staff.email}</td>
                <td className="border p-2 text-center">{staff.contact}</td>
                <td className="border p-2">
                  <img
                    src={`/images/${staff.image}`}
                    alt={staff.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
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
      {isAddStaffModalOpen && (
        <AddStaff
          onAddStaff={handleAddStaff}
          onClose={toggleAddStaffModal}
        />
      )}
    </div>
  );
}

export default Staff