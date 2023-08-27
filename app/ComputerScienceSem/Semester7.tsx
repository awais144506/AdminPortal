import React, { useState, useEffect } from 'react';
import { FaBuildingUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { db } from '@/appwrite';
import { FaChalkboardTeacher } from 'react-icons/fa';
function Semester7() {
    const navigate = useNavigate()
    const [selectedSession, setSelectedSession] = useState('');
    const [morningTimetable, setMorningTimetable] = useState([]);
    const [eveningTimetable, setEveningTimetable] = useState([]);
    useEffect(() => {
        // Load morning timetable from local storage on component mount
        const storedMorningTimetable = localStorage.getItem('morningTimetable');
        if (storedMorningTimetable) {
            setMorningTimetable(JSON.parse(storedMorningTimetable));
        }

        // Load evening timetable from local storage on component mount
        const storedEveningTimetable = localStorage.getItem('eveningTimetable');
        if (storedEveningTimetable) {
            setEveningTimetable(JSON.parse(storedEveningTimetable));
        }
    }, []);

    useEffect(() => {
        // Save morning timetable to local storage whenever it changes
        localStorage.setItem('morningTimetable', JSON.stringify(morningTimetable));
    }, [morningTimetable]);

    useEffect(() => {
        // Save evening timetable to local storage whenever it changes
        localStorage.setItem('eveningTimetable', JSON.stringify(eveningTimetable));
    }, [eveningTimetable]);

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newRow = {
            day: formData.get('day'),
            startTime: formData.get('startTime'),
            subjectName: formData.get('subjectName'),
            faculty: formData.get('faculty'),
        };


        if (selectedSession === 'morning') {
            setMorningTimetable([...morningTimetable, newRow]);
        } else if (selectedSession === 'evening') {
            setEveningTimetable([...eveningTimetable, newRow]);
        }
        event.target.reset();
    };

    const handleDeleteRow = (session, index) => {
        if (session === 'morning') {
            const updatedMorningTimetable = [...morningTimetable];
            updatedMorningTimetable.splice(index, 1);
            setMorningTimetable(updatedMorningTimetable);
        } else if (session === 'evening') {
            const updatedEveningTimetable = [...eveningTimetable];
            updatedEveningTimetable.splice(index, 1);
            setEveningTimetable(updatedEveningTimetable);
        }
    };



    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-[#5B95A9] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaBuildingUser className="text-white depart-icon mr-2" />
                <span>Semester 7</span>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <div onClick={() => navigate('/ClassRoom')} className="shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
                    <div className="flex items-center justify-center space-x-2">
                        <FaChalkboardTeacher className="mt-5 mr-2 mb-5 .depart-icon text-[#5B95A9]" />
                        <h2 className="font-semibold text-xl text-[#5B95A9]">
                            Go to Class Room
                        </h2>
                    </div>
                </div>
            </div>
            {/* Session and Classroom */}
            <div className="flex-grow p-4">
                <h1 className='text-center text-2xl mb-4 font-bold'>Time Table</h1>
                <div className="flex justify-center items-center space-x-6">
                    {/* Session Selection */}
                    <div className="flex items-center space-x-2">
                        <label className="block text-gray-700 text-lg font-semibold">
                            Select Session:
                        </label>
                        <select
                            className="px-4 py-2 w-44 border rounded-lg focus:ring focus:ring-blue-200"
                            value={selectedSession}
                            onChange={handleSessionChange}
                        >
                            <option value="">Select Session</option>
                            <option value="morning">Morning Session</option>
                            <option value="evening">Evening Session</option>
                        </select>
                    </div>
                </div>


                <div className="flex items-center justify-center space-x-2 mt-6">
                    <label className="block text-gray-700 text-lg font-semibold">
                        Class Room:
                    </label>
                    <input
                        type="text"
                        className="px-4 py-2 w-44 border rounded-lg focus:ring focus:ring-blue-200"
                        placeholder="Enter Classroom"
                    />
                </div>


                {/* Timings */}
                {selectedSession && (
                    <div className="flex justify-center flex-col items-center mt-5">
                        <p className="text-gray-600 text-lg">
                            {selectedSession === 'morning'
                                ? 'Morning Session Timings: 8:00 AM - 12:00 PM'
                                : 'Evening Session Timings: 1:00 PM - 5:00 PM'}
                        </p>
                        <h2 className="text-lg font-semibold text-center mt-3">
                            {selectedSession === 'morning'
                                ? 'Morning Time Table'
                                : 'Evening Time Table'}</h2>
                    </div>

                )}



                {/* Table */}



                <div className="mt-6">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="py-2 px-4 border border-gray-300">Day</th>
                                <th className="py-2 px-4 border border-gray-300">Start Time</th>
                                <th className="py-2 px-4 border border-gray-300">Subject Name</th>
                                <th className="py-2 px-4 border border-gray-300">Faculty</th>
                                <th className="py-2 px-4 border border-gray-300"></th>
                            </tr>
                        </thead>
                        {selectedSession === 'morning' && morningTimetable.length > 0 && (
                            <tbody>
                                {morningTimetable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.day}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.startTime}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.subjectName}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.faculty}</td>
                                        <td className="py-2 px-4 border border-gray-300">
                                            <button
                                                className="text-red-500"
                                                onClick={() => handleDeleteRow('morning', index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}

                        {selectedSession === 'evening' && eveningTimetable.length > 0 && (
                            <tbody>
                                {eveningTimetable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.day}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.startTime}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.subjectName}</td>
                                        <td className="py-2 px-4 border border-gray-300 text-center">{row.faculty}</td>
                                        <td className="py-2 px-4 border border-gray-300">
                                            <button
                                                className="text-red-500"
                                                onClick={() => handleDeleteRow('evening', index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>


                {selectedSession && (
                    <div className="mt-6">
                        <form onSubmit={handleFormSubmit} className="grid grid-cols-4 gap-4 items-center">
                            {/* Input fields for Day, Start Time, Subject Name, and Faculty */}
                            <label className="block text-gray-700 text-lg font-semibold">
                                Day:
                            </label>
                            <input
                                type="text"
                                name="day"
                                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                required
                            />

                            <label className="block text-gray-700 text-lg font-semibold">
                                Start Time:
                            </label>
                            <input
                                type="text"
                                name="startTime"
                                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                required
                            />

                            <label className="block text-gray-700 text-lg font-semibold">
                                Subject Name:
                            </label>
                            <input
                                type="text"
                                name="subjectName"
                                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                required
                            />

                            <label className="block text-gray-700 text-lg font-semibold">
                                Faculty:
                            </label>
                            <input
                                type="text"
                                name="faculty"
                                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                required
                            />

                            <button
                                type="submit"
                                className="col-span-4 px-6 py-2 bg-[#5B95A9] text-white font-semibold rounded-lg hover:bg-[#34697a]"
                            >
                                Add Row
                            </button>
                        </form>
                    </div>
                )}

                {/* Submit Button */}
                {selectedSession && (
                    <div className="mt-6 flex justify-center">
                        <button className="px-6 py-2 bg-[#80B527] text-white font-semibold rounded-lg hover:bg-[#7ca23b]">
                            Submit
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Semester7;
