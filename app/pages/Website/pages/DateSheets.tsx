import React, { useState, useEffect } from 'react';
import { FaChrome } from 'react-icons/fa';
import { db, storage } from '@/app/appwrite';
import { ID } from 'appwrite';
function Department({ name, onUpload, onDelete, pdf }) {
  const handleUpload = (e) => {
      const file = e.target.files[0];
      onUpload(file, name);
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


function DateSheets() {
  const [pdfs, setPdfs] = useState({});

  const handleUpload = (file, department) => {
      setPdfs({ ...pdfs, [department]: file });
  };

  const handleDelete = (department) => {
      const updatedPdfs = { ...pdfs };
      delete updatedPdfs[department];
      setPdfs(updatedPdfs);
  };

  return (
      <div>
          <div className="bg-[#EB7724] py-4 text-white text-3xl font-semibold text-center flex items-center justify-center">
              <FaChrome className="text-white depart-icon mr-2" />
              <span>Date Sheets</span>
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
                          name="Software Engineering"
                          onUpload={handleUpload}
                          onDelete={handleDelete}
                          pdf={pdfs['Software Engineering']}
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

export default DateSheets