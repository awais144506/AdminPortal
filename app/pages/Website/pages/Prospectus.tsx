import React, { useState } from 'react';
import { FaChrome } from 'react-icons/fa';

function Prospectus() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfName, setPdfName] = useState('');

    const handleUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPdfFile(file);
            setPdfName(file.name);
        }
    };

    const handleSave = () => {
        // Save PDF to local storage
        const pdfData = {
            name: pdfName,
            data: pdfFile,
        };
        localStorage.setItem('prospectus_pdf', JSON.stringify(pdfData));
    };

    const handleLoad = () => {
        // Load PDF from local storage
        const savedData = JSON.parse(localStorage.getItem('prospectus_pdf'));
        if (savedData) {
            setPdfFile(savedData.data);
            setPdfName(savedData.name);
        }
    };

    const handleDelete = () => {
        // Delete PDF from local storage
        localStorage.removeItem('prospectus_pdf');
        setPdfFile(null);
        setPdfName('');
    };

    return (
          <>
          
          <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center mb-6 rounded-t">
                <FaChrome className="text-white depart-icon mr-2" />
                <span>Prospectus</span>
            </div>
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">

            <div className="mb-4">
                <input type="file" accept=".pdf" onChange={handleUpload} />
            </div>

            {pdfFile && (
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center mb-2 font-semibold">PDF Name: {pdfName}</div>
                    <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Save 
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
                        Delete
                    </button>
                </div>
            )}

            <div className="mt-6 text-center">
                <button onClick={handleLoad} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Load 
                </button>
            </div>
        </div>
          </>  
    );
}

export default Prospectus;
