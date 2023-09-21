import React, { useState } from 'react';
import { db, storage } from '@/app/appwrite';
import { ID } from 'appwrite';
function AddStaff({ onAddStaff, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    qualification: '',
    email: '',
    contact: '',
  });

  const [image, setImage] = useState('');
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = () => {
            const imageDataUrl = reader.result;
            setImage(imageDataUrl);
        };

        reader.readAsDataURL(selectedImage);
    }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddStaff(formData);
    try {
      const response = await db.createDocument("650c78d0b34d27f714f4","650c46e2e1a1bcd7c852",ID.unique(),formData);

      if (image) {
        const imageType = 'image/jpg';
        const blob = dataURItoBlob(image);
        const storageFile = new File([blob], `${response.$id}.jpg`, { type: imageType });

        const fileResponse = await storage.createFile('6506e1b83c74aa2c4892', response.$id, storageFile);

        console.log('Image uploaded:', fileResponse);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    onClose(); 
    onClose(); // Close the modal after submitting the form
  };
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Contact No
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            /> </div>
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
