// src/RegisteredSatelliteDetailsPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisteredSatelliteDetailsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { satelliteName } = location.state || { satelliteName: 'Unknown Satellite' };

    // State for the command input
    const [commandInput, setCommandInput] = useState('');
    // State to store sent commands (for a simple display log)
    const [commandLog, setCommandLog] = useState([
        `[${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}] System: Welcome to ${satelliteName} command interface.`,
    ]);

    // State to store uploaded file names
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Function to navigate back to the home page (root path)
    const handleGoHome = () => {
        navigate('/'); // Navigates to the root path
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFiles(prevFiles => [...prevFiles, { name: file.name, size: file.size, date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) }]);
            alert(`File "${file.name}" ready for upload (simulated).`);
        }
    };

    const handleUploadButtonClick = () => {
        if (uploadedFiles.length > 0) {
            alert('Initiating upload for staged files!');
            // Implement actual upload logic here
        } else {
            alert('No file selected to upload.');
        }
    };

    const handleSendCommand = () => {
        if (commandInput.trim() === '') {
            alert('Please enter a command.');
            return;
        }

        const newCommand = `[${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}] Sent: ${commandInput.trim()}`;
        setCommandLog(prevLog => [...prevLog, newCommand]);
        console.log(`Sending command to ${satelliteName}: ${commandInput.trim()}`);
        // Here you would integrate with your backend/blockchain to actually send the command

        setCommandInput('');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 relative">
            {/* TELEHASH button positioned at the top LEFT and made smaller */}
            <button
                onClick={handleGoHome}
                className="absolute top-4 left-4 z-10
                           font-bold text-xl tracking-widest uppercase {/* Reduced font size to text-xl */}
                           bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent bg-[length:200%_auto]
                           animate-aurora drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
                           hover:scale-105 transition-transform duration-200"
            >
                TELEHASH
            </button>

            {/* Registered Satellite Name as Main Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-md mt-16 sm:mt-20">
                {satelliteName}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 text-center max-w-lg">
                Your mission control for {satelliteName}. Send commands, review logs, and manage data uploads.
            </p>

            <div className="w-full max-w-2xl p-8 bg-white/5 border border-white/20 rounded-lg shadow-lg flex flex-col gap-8">

                {/* Command Input and Log Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-white/90">Send Command</h2>
                    <div className="bg-white/10 p-4 rounded-md h-48 overflow-y-auto border border-white/30 mb-4">
                        {commandLog.map((logEntry, index) => (
                            <p key={index} className="text-white/70 text-sm mb-1">
                                {logEntry}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={commandInput}
                            onChange={(e) => setCommandInput(e.target.value)}
                            placeholder="Enter command (e.g., START_DATA_STREAM)"
                            className="flex-grow p-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendCommand();
                                }
                            }}
                        />
                        <button
                            onClick={handleSendCommand}
                            className="flex-shrink-0 py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold transition-colors duration-200"
                        >
                            Send Command
                        </button>
                    </div>
                </div>

                {/* Upload Option and Display Uploaded Files Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-white/90">Upload Data</h2>
                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-white/70
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-md file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-blue-500 file:text-white
                                       hover:file:bg-blue-600 cursor-pointer"
                        />
                        <button
                            onClick={handleUploadButtonClick}
                            className="flex-shrink-0 w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold transition-colors duration-200"
                        >
                            Upload File
                        </button>
                    </div>
                    <p className="text-sm text-white/50 mb-4">Max file size: 50MB. Supported formats: .txt, .json, .bin</p>

                    {/* Display Uploaded Files */}
                    <h3 className="text-xl font-bold mb-2 text-white/80">Uploaded Files</h3>
                    {uploadedFiles.length === 0 ? (
                        <p className="text-white/60">No files uploaded yet.</p>
                    ) : (
                        <ul className="list-disc list-inside bg-white/5 p-4 rounded-md border border-white/20">
                            {uploadedFiles.map((file, index) => (
                                <li key={index} className="text-white/70 text-base mb-1">
                                    <span className="font-semibold">{file.name}</span> ({(file.size / 1024).toFixed(2)} KB) - {file.date}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RegisteredSatelliteDetailsPage;