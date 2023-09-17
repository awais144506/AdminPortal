import React, { useState, useEffect } from 'react';
import { FaChrome } from 'react-icons/fa';
import { db, storage } from '@/app/appwrite';
import { ID } from 'appwrite';

function News() {
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
    const [date, setDate] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');


    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleHeadingChange = (e) => {
        setHeading(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const documentId = ID.unique(); 

            const eventDocument = {
                date: date,
                heading: heading,
                description: description,

            };

            const eventResponse = await db.createDocument('6506cf5aa359dba589cb', '6506d0011351ee9de1ef', documentId, eventDocument);
            console.log('Event created:', eventResponse);
            const eventId = eventResponse['$id'];
            const newEvent = {
                id: eventId,
                date: date,
                heading: heading,
                description: description,

            };

            setEvents([...events, newEvent]);

            setDate('');
            setHeading('');
            setDescription('');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents)); // Update local storage
    };
    

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <div>

            <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaChrome className="text-white depart-icon mr-2" />
                <span>News</span>
            </div>
            <div className="container mx-auto p-12">
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Date:
                        </label>
                        <input
                            type="text"
                            value={date}
                            onChange={handleDateChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Heading:
                        </label>
                        <input
                            type="text"
                            value={heading}
                            onChange={handleHeadingChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description:
                        </label>
                        <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="max-w-md bg-white rounded overflow-hidden shadow-lg"
                        >
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Heading: {event.heading}</div>
                                <p className="text-gray-700 text-base">Description: {event.description}</p>
                                <p className="text-gray-700 text-base mt-2">Date: {event.date}</p>
                                <button
                                    onClick={() => handleDelete(event.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold p-4 rounded mt-4"
                                >Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News