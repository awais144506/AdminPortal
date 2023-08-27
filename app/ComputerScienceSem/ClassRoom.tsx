import React, { useState ,useEffect} from 'react';
import { FaComputer, FaMagnifyingGlass, FaTrashCan, FaPencil } from 'react-icons/fa6';
import AddStudentForm from '../components/AddStudentForm';
function ClassRoom() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Load student data from local storage on component mount
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            setStudents(JSON.parse(storedStudents));
        }
    }, []); 
    useEffect(() => {
        // Save student data to local storage whenever students state changes
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleAddStudent = (newStudent) => {
        console.log("Adding student:", newStudent);
        setStudents([...students, newStudent]);
        closeModal();
    }
    const handleUpdateStudent = (index) => {
    };

    const handleDeleteStudent = (index) => {
        const updatedStudents = [...students];
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
    };
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-[#5B95A9] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaComputer className="text-white depart-icon mr-2" />
                <span>Computer Science</span>
            </div>
            {/* Student List */}
            <div className="p-4">
                <div className="flex items-end justify-end mb-4">

                    <div className="relative">
                        <input
                            type="text"
                            className="px-4 py-2 w-48 border rounded-lg items-end focus:ring focus:ring-blue-200"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <FaMagnifyingGlass className="absolute text-[#999] right-3 top-2 cursor-pointer" />
                    </div>
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center mx-auto ">
                    Semester 7
                </h2>

                <div className="flex justify-center">
                    <button
                        className="bg-[#80B527] text-white font-semibold rounded-lg hover:bg-[#789d37] px-4 py-2 mt-2 mb-5"
                        onClick={openModal}
                    >
                        Add Student
                    </button>
                </div>
                {/* Morning Session Students */}
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-2 text-center">Morning Session Students</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="py-2 px-4 border border-gray-300">Roll No</th>
                                <th className="py-2 px-4 border border-gray-300">Name</th>
                                <th className="py-2 px-4 border border-gray-300">Father Name</th>
                                <th className="py-2 px-4 border border-gray-300">Gender</th>
                                <th className="py-2 px-4 border border-gray-300">Department</th>
                                <th className="py-2 px-4 border border-gray-300">Session</th>
                                <th className="py-2 px-4 border border-gray-300">Courses</th>
                                <th className="py-2 px-4 border border-gray-300">CGPA</th>
                                <th className="py-2 px-4 border border-gray-300">Fee Status</th>
                                <th className="py-2 px-4 border border-gray-300"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                // Check if the student's classSession is "Evening"
                                student.classSession === "Morning" && (
                                    <tr key={index} className="cursor-pointer hover:bg-slate-200" >
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.rollNo}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.name}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.fatherName}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.gender}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.department}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.fall}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.courses}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.cgpa}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{student.feeStatus}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">
                                            <img src={student.image} alt={`Image of ${student.name}`} className="w-16 h-16 rounded-full" />
                                        </td>
                                        {/* <td className="py-2 px-4 border border-gray-300 text-center">
                                            <div className="flex space-x-5 ">
                                                <button
                                                    className="text-blue-500 "
                                                    onClick={() => handleUpdateStudent(index)}
                                                >
                                                    <FaPencil />
                                                </button>
                                                <button
                                                    className="text-red-500 hover:underline"
                                                    onClick={() => handleDeleteStudent(index)}
                                                >
                                                    <FaTrashCan />
                                                </button>
                                            </div>
                                        </td> */}
                                    </tr>
                                )
                            ))}
                        </tbody>

                    </table>
                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <AddStudentForm onClose={closeModal} onAddStudent={handleAddStudent} /> {/* Use the AddStudentForm component */}
                            </div>
                        </div>
                    )}
                </div>
                {/* Evening Session Students */}
                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-center">Evening Session Students</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="py-2 px-4 border border-gray-300">Roll No</th>
                                    <th className="py-2 px-4 border border-gray-300">Name</th>
                                    <th className="py-2 px-4 border border-gray-300">Father Name</th>
                                    <th className="py-2 px-4 border border-gray-300">Gender</th>
                                    <th className="py-2 px-4 border border-gray-300">Department</th>
                                    <th className="py-2 px-4 border border-gray-300">Session</th>
                                    <th className="py-2 px-4 border border-gray-300">Courses</th>
                                   
                                    <th className="py-2 px-4 border border-gray-300">CGPA</th>
                                    <th className="py-2 px-4 border border-gray-300">Fee Status</th>
                                    <th className="py-2 px-4 border border-gray-300"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    // Check if the student's classSession is "Evening"
                                    student.classSession === "Evening" && (
                                        <tr key={index} className="cursor-pointer hover:bg-slate-200">
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.rollNo}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.name}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.fatherName}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.gender}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.department}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.fall}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.courses}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.cgpa}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">{student.feeStatus}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-center">
                                                <img src={student.image} alt={`Image of ${student.name}`} className="w-16 h-16 rounded-full " />
                                            </td>
                                            {/* <td className="py-2 px-4 border border-gray-300 text-center">
                                                <div className="flex space-x-5 ">
                                                    <button
                                                        className="text-blue-500 "
                                                        onClick={() => handleUpdateStudent(index)}
                                                    >
                                                        <FaPencil />
                                                    </button>
                                                    <button
                                                        className="text-red-500 hover:underline"
                                                        onClick={() => handleDeleteStudent(index)}
                                                    >
                                                        <FaTrashCan />
                                                    </button>
                                                </div>
                                            </td> */}
                                        </tr>
                                    )
                                ))}
                            </tbody>

                        </table>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default ClassRoom;
