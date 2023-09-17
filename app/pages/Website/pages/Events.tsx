import React, { useState, useEffect } from 'react';
import { FaChrome } from 'react-icons/fa';

function Events() {
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
    const [date, setDate] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleHeadingChange = (e) => {
        setHeading(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Date.now(), // Assign a unique ID
            date: date,
            heading: heading,
            description: description,
            image: image,
        };

        setEvents([...events, newEvent]);

        setDate('');
        setHeading('');
        setDescription('');
        setImage('');
    };

    const handleDelete = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <div>

            <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaChrome className="text-white depart-icon mr-2" />
                <span>Events</span>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Upload Image:
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
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
                            <img
                                className="w-full h-80 object-cover"
                                src={event.image}
                                alt="Event"
                            />
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

export default Events;
