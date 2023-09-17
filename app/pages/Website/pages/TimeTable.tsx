import React, { useState, useEffect } from 'react';
import { FaChrome } from 'react-icons/fa';
import { db, storage } from '@/app/appwrite';
import { ID } from 'appwrite';

function Department({ name, onUpload, onDelete, pdf }) {
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        onUpload(file, name);

        try {
            const imageType = 'application/pdf'; // Set the correct MIME type for PDF
            const storageFile = new File([file], file.name, { type: imageType });
            const documentId = ID.unique()
            // Upload the file to the Appwrite storage bucket
            const fileResponse = await storage.createFile('6506e1a6e39e0187b2bc', documentId, storageFile);
            console.log('PDF uploaded:', fileResponse);
        } catch (error) {
            console.error('Error uploading PDF:', error);
        }
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            {pdf ? (
                <div>
                    <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded mt-4 cursor-pointer">Uploaded PDF: {pdf.name}</p>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-4 rounded mt-4"
                        onClick={() => onDelete(name)}>Delete PDF</button>
                </div>
            ) : (
                <div>
                    <input type="file" accept=".pdf" onChange={handleUpload} />
                </div>
            )}
        </div>
    );
}

function TimeTable() {
    const [pdfs, setPdfs] = useState(JSON.parse(localStorage.getItem('pdfs')) || {});

    const handleUpload = (file, department) => {
        const updatedPdfs = { ...pdfs, [department]: file, };
        setPdfs(updatedPdfs);
        localStorage.setItem('pdfs', JSON.stringify(updatedPdfs));
    };

    const handleDelete = (department) => {
        const updatedPdfs = { ...pdfs };
        delete updatedPdfs[department];
        setPdfs(updatedPdfs);
        localStorage.setItem('pdfs', JSON.stringify(updatedPdfs));
    };

    return (
        <div>
            <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
                <FaChrome className="text-white depart-icon mr-2" />
                <span>Time Table</span>
            </div>

            <div className="flex items-center justify-center">

                <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Computer Science"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Computer Science']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Software Engineering"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Software Engineering']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Information Technology"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Information Technology']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Food Science"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Food Science']}
                        />
                    </div>

                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Human Nutrition & Dietetics"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Human Nutrition & Dietetics']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Business Administration (BBA)"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Business Administration (BBA)']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Accounting & Finance"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Accounting & Finance']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Mathemetics"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Mathemetics']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Chemistry"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Chemistry']}
                        />
                    </div>
                    <div className="bg-white p-4 rounded shadow-md">
                        <Department
                            name="Physics"
                            onUpload={handleUpload}
                            onDelete={handleDelete}
                            pdf={pdfs['Physics']}
                        />
                    </div>
                    {/* Add more Department components for each department */}
                </div>
            </div>

        </div>
    );
}

export default TimeTable;
