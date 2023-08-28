import React, { useState } from 'react';

interface AddStudentFormProps {
  onClose: () => void;
  onAddStudent: (student: Student) => void;
}
const AddStudentForm: React.FC<AddStudentFormProps> = ({ onClose, onAddStudent }) => {
  const [classSession, setClassSession] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [fall, setFall] = useState('');
  const [courses, setCourses] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [feeStatus, setFeeStatus] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      classSession,
      rollNo,
      name,
      fatherName,
      gender,
      department,
      fall,
      courses,
      cgpa,
      feeStatus,
      image
    };
    onAddStudent(newStudent);
    setClassSession('');
    setRollNo('');
    setName('');
    setFatherName('');
    setGender('');
    setDepartment('');
    setFall('');
    setCourses('');
    setCGPA('');
    setFeeStatus('');
    onClose();
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]; // Get the selected image from the input
    const reader = new FileReader(); // Create a FileReader instance

    reader.onload = () => {
      // This function will be called when the reader finishes reading the image
      const imageDataUrl = reader.result; // Get the data URL of the image
      setImage(imageDataUrl); // Set the image state with the data URL
    };

    // Read the selected image as a data URL
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px]">
      <h3 className="text-xl font-semibold mb-4">Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Session:</label>
          <select
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={classSession}
            onChange={(e) => setClassSession(e.target.value)}
            required
          >
            <option value="">Select Session</option>
            <option value="Morning">Morning Session</option>
            <option value="Evening">Evening Session</option>
          </select>
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-1">Roll Number:</label>
            <input
              type="number"
              className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-1">Name:</label>
            <input
              type="text"
              className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Father's Name:</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Gender:</label>
          <select
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Department:</label>
          <select
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Human Nutrition & Dietetics">Human Nutrition & Dietetics</option>
            <option value="BBA">Business Administration</option>
            {/* Add more department options */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Session Fall (Year)</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={fall}
            onChange={(e) => setFall(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Courses:</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">CGPA:</label>
          <input
            type="text"
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={cgpa}
            onChange={(e) => setCGPA(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Fee Status:</label>
          <select
            className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            value={feeStatus}
            onChange={(e) => setFeeStatus(e.target.value)}
            required
          >
            <option value="">Select Fee Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#80B527] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#4d6424] mr-2"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
