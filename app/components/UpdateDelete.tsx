import React, { useState } from 'react';

function UpdateDeleteForm({ student, onUpdateMorning, onUpdateEvening, onDelete, onClose }) {
  const [updatedStudent, setUpdatedStudent] = useState({ ...student });

  const handleUpdate = () => {
    console.log('Received student prop:', student);
    if (student.classSession === '') {
      return
    }
    else if (student.classSession === 'Morning' && onUpdateMorning) {
      onUpdateMorning(updatedStudent);
    } else if (student.classSession === 'Evening' && onUpdateEvening) {
      onUpdateEvening(updatedStudent);
    }
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-[1000px] h-auto">
      <h2 className='text-center text-2xl font-bold'>Edit / Delete Student</h2>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Session:</label>
        <select
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.classSession}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, classSession: e.target.value })}
        >
          <option value="">Select Session</option>
          <option value="Morning">Morning Session</option>
          <option value="Evening">Evening Session</option>
        </select>
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">

          <label className=" block text-gray-700 font-semibold mb-1">Roll No:</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={updatedStudent.rollNo}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, rollNo: e.target.value })}
          />
        </div>
        <div className="w-1/2">

          <label className="block text-gray-700 font-semibold mb-1">Name:</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={updatedStudent.name}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, name: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3">

      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Father Name:</label>
        <input
          type="text"
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.fatherName}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, fatherName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
        <select
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.gender}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Department:</label>
        <select
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.department}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, department: e.target.value })}
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Human Nutrition & Dietetics">Human Nutrition & Dietetics</option>
          <option value="BBA">Business Administration</option>

        </select>
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Courses:</label>
        <input
          type="text"
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.courses}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, courses: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Session Fall (Year): </label>
        <input
          type="text"
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.fall}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, fall: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">CGPA:</label>
        <input
          type="text"
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.cgpa}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, cgpa: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Fee Status:</label>
        <select
          className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          value={updatedStudent.feeStatus}
          onChange={(e) => setUpdatedStudent({ ...updatedStudent, feeStatus: e.target.value })}
        >
          <option value="">Select Fee Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>

      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
        <input
          type="file"
          accept="image/*"
          className="py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
          onChange={(e) => {
            const newImage = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
              const imageDataUrl = reader.result;
              setUpdatedStudent({ ...updatedStudent, image: imageDataUrl }); // Make sure you're updating correctly here
            };

            reader.readAsDataURL(newImage);
            console.log(newImage)
          }}
        />
        <div className="mt-2">
          {typeof updatedStudent.image === 'string' ? (
            <img
              src={updatedStudent.image}
              alt={`Image of ${updatedStudent.name}`}
              className="w-16 h-16 rounded-full"
            />
          ) : updatedStudent.image instanceof Blob ? (
            <img
              src={URL.createObjectURL(updatedStudent.image)}
              alt={`Image of ${updatedStudent.name}`}
              className="w-16 h-16 rounded-full"
            />
          ) : null}
        </div>
      </div>


      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" onClick={handleUpdate}>Update</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2" onClick={handleDelete}>Delete</button>
      <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg" onClick={onClose}>Close</button>
    </div>
  );
}

export default UpdateDeleteForm;
