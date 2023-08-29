import React, { useState, useEffect } from 'react';
import { FaBuildingUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { db } from '@/app/appwrite';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { ID } from 'appwrite';

function Semester7() {
    const navigate = useNavigate()
    const [selectedSession, setSelectedSession] = useState('');
    const [classRoom, setClassRoom] = useState('');
    const [timing, setTiming] = useState('');
    const [morningTimetable, setMorningTimetable] = useState([]);
    const [eveningTimetable, setEveningTimetable] = useState([]);

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    const handleClassRoomChange = (event) => {
        setClassRoom(event.target.value);
    };
    const handleTimingChange = (event) => {
        setTiming(event.target.value);
    };

    const handleAddRow = () => {
        // Get form values directly
        const day = document.querySelector('[name="day"]').value;
        const startTime = document.querySelector('[name="startTime"]').value;
        const subjectName = document.querySelector('[name="subjectName"]').value;
        const faculty = document.querySelector('[name="faculty"]').value;
        const newRow = {
            day: day,
            startTime: startTime,
            subjectName: subjectName,
            faculty: faculty,
        };
    
        if (selectedSession === 'morning') {
            setMorningTimetable([...morningTimetable, newRow]);
        } else if (selectedSession === 'evening') {
            setEveningTimetable([...eveningTimetable, newRow]);
        }
    };
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        // Create a complete timetableData object
        const timetableData = {
            session: selectedSession,
            classRoom: classRoom,
            timing: timing,
            rows: selectedSession === 'morning' ? morningTimetable : eveningTimetable,
        };
    
        // Prepare data for Appwrite
        const rowsData = timetableData.rows.map(row => ({
            day: row.day,
            startTime: row.startTime,
            subjectName: row.subjectName,
            faculty: row.faculty,
        }));
        console.log(rowsData); 
     
        const promise = db.createDocument('64e7be0277a594862d45', '64e9063eeb3004e694e8', ID.unique(), {
            ...timetableData,
            rows: rowsData,
        });

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        }
        );
    };

    // Delete Row Code 
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

    // Local Sorage of Time Table Code
    useEffect(() => {
        const storedMorningTimetable = localStorage.getItem('morningTimetable');
        if (storedMorningTimetable) {
            setMorningTimetable(JSON.parse(storedMorningTimetable));
        }
        const storedEveningTimetable = localStorage.getItem('eveningTimetable');
        if (storedEveningTimetable) {
            setEveningTimetable(JSON.parse(storedEveningTimetable));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('morningTimetable', JSON.stringify(morningTimetable));
    }, [morningTimetable]);

    useEffect(() => {
        localStorage.setItem('eveningTimetable', JSON.stringify(eveningTimetable));
    }, [eveningTimetable]);

    //End of Local Storage Code

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
                <form onSubmit={handleFormSubmit}>
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
                        onChange={handleClassRoomChange}
                        value={classRoom}
                        type="text"
                        className="px-4 py-2 w-44 border rounded-lg focus:ring focus:ring-blue-200"
                        placeholder="Enter Classroom"
                    />
                </div>
                <div className="flex items-center justify-center space-x-2 mt-6">
                    <label className="block text-gray-700 text-lg font-semibold">
                        Timings:
                    </label>
                    <input
                        onChange={handleTimingChange}
                        value={timing}
                        type="text"
                        className="px-4 py-2 w-80 border rounded-lg focus:ring focus:ring-blue-200"
                        placeholder="Enter Timing From 00:00AM to 00:00PM"
                    />
                </div>



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
                        <form className="grid grid-cols-4 gap-4 items-center">
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
                               type="button"  // Change type to "button"
                               onClick={handleAddRow}
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
                        <button type='submit'
                        className="px-6 py-2 bg-[#80B527] text-white font-semibold rounded-lg hover:bg-[#7ca23b]">
                            Submit
                        </button>
                    </div>
                )}
                </form>
            </div>

        </div>
    );
}

export default Semester7;
