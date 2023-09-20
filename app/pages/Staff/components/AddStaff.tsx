// components/AddFaculty.js
import React, { useState } from 'react';

function AddStaff({ onAddFaculty, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    qualification: '',
    email: '',
    contactNo: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFaculty(formData);
    onClose(); // Close the modal after submitting the form
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Faculty</h2>
        <form onSubmit={handleSubmit}>
          {/* Add input fields for faculty attributes */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Designation
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Qualification
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Contact No
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* Add similar fields for other attributes */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Add Staff
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStaff;
