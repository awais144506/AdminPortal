import React, { useState } from 'react';
import { FaBuildingUser } from 'react-icons/fa6';

function Semester7() {
    const [selectedSession, setSelectedSession] = useState('');

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    const [morningTimetable, setMorningTimetable] = useState([]);
    const [eveningTimetable, setEveningTimetable] = useState([]);

    const handleFormSubmit = (event) => {
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
            <div className="bg-[#E76D58] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaBuildingUser className="text-white depart-icon mr-2" />
                <span>Semester 7</span>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <div className="shadow w-60 h-20 rounded-lg p-4 hover:bg-sky-100 cursor-pointer">
                    <div className="flex items-center justify-center space-x-2">
                        <h2 className="font-semibold text-xl text-[#4E7AC8]">
                            Go to Class Room 
                        </h2>
                    </div>
                </div>
            </div>
            {/* Session and Classroom */}
            <div className="flex-grow p-4">
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

                {selectedSession && (
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
                )}

                {/* Timings */}
                {selectedSession && (
                    <div className="flex justify-center items-center mt-5">
                        <p className="text-gray-600 text-lg">
                            {selectedSession === 'morning'
                                ? 'Morning Session Timings: 8:00 AM - 12:00 PM'
                                : 'Evening Session Timings: 1:00 PM - 5:00 PM'}
                        </p>
                    </div>
                )}



                {/* Table */}


                {/* Morning Timetable */}
                {selectedSession === 'morning' && morningTimetable.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-center mb-3">Morning Timetable</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border border-gray-300">Day</th>
                                    <th className="py-2 px-4 border border-gray-300">Start Time</th>
                                    <th className="py-2 px-4 border border-gray-300">Subject Name</th>
                                    <th className="py-2 px-4 border border-gray-300">Faculty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {morningTimetable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border border-gray-300">{row.day}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.startTime}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.subjectName}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.faculty}</td>
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
                        </table>
                    </div>
                )}

                {/* Evening Timetable */}
                {selectedSession === 'evening' && eveningTimetable.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-center mb-3">Evening Timetable</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border border-gray-300">Day</th>
                                    <th className="py-2 px-4 border border-gray-300">Start Time</th>
                                    <th className="py-2 px-4 border border-gray-300">Subject Name</th>
                                    <th className="py-2 px-4 border border-gray-300">Faculty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eveningTimetable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border border-gray-300">{row.day}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.startTime}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.subjectName}</td>
                                        <td className="py-2 px-4 border border-gray-300">{row.faculty}</td>
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
                        </table>
                    </div>
                )}
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
                                className="col-span-4 px-6 py-2 bg-[#E76D58] text-white font-semibold rounded-lg hover:bg-[#CC5D4B]"
                            >
                                Add Row
                            </button>
                        </form>
                    </div>
                )}

                {/* Submit Button */}
                {selectedSession && (
                    <div className="mt-6 flex justify-center">
                        <button className="px-6 py-2 bg-[#E76D58] text-white font-semibold rounded-lg hover:bg-[#CC5D4B]">
                            Submit
                        </button>
                    </div>
                )}
            </div>
          
        </div>
    );
}

export default Semester7;
