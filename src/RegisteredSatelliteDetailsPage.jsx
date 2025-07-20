import React, { useState, useEffect } from 'react';
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

    // State to store uploaded file names and data
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // State to control input focus animation
    const [isInputFocused, setIsInputFocused] = useState(false);

    // Optional: Add a subtle loading state or animation on mount
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Function to navigate back to the home page (root path)
    const handleGoHome = () => {
        navigate('/'); // Navigates to the root path
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newFileEntry = {
                id: Date.now() + Math.random(), // Still using ID for unique key in map, but not for removal
                name: file.name,
                size: file.size,
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };
            setUploadedFiles(prevFiles => [...prevFiles, newFileEntry]);
            alert(`File "${file.name}" ready for upload (simulated).`);
            // Clear the input value so the same file can be selected again
            event.target.value = null;
        }
    };

    const handleUploadButtonClick = () => {
        if (uploadedFiles.length > 0) {
            alert('Initiating upload for staged files!');
            // Implement actual upload logic here
            // For simulation, let's clear the list after "upload"
            setUploadedFiles([]);
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
            {/* Background Grids/Particles (Creative Addition) */}
            <div className={`absolute inset-0 bg-dot-grid opacity-10 animate-fade-in animate-pan-bg ${isMounted ? '' : 'opacity-0'}`}></div>
            <div className={`absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80 opacity-70 animate-fade-in ${isMounted ? '' : 'opacity-0'}`}></div>

            {/* TELEHASH button positioned at the top LEFT and made smaller */}
            <button
                onClick={handleGoHome}
                className="absolute top-4 left-4 z-20
                               font-bold text-xl tracking-widest uppercase
                               bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent bg-[length:200%_auto]
                               animate-aurora drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
                               hover:scale-105 transition-transform duration-200"
            >
                TELEHASH
            </button>

            {/* Registered Satellite Name as Main Heading */}
            <h1 className={`text-5xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-md mt-16 sm:mt-20 z-10
                               ${isMounted ? 'animate-fade-in-bottom' : 'opacity-0'} font-display`}>
                {satelliteName}
            </h1>

            <p className={`text-lg md:text-xl text-white/80 mb-10 text-center max-w-lg z-10
                            ${isMounted ? 'animate-fade-in-bottom animation-delay-100' : 'opacity-0'}`}>
                Your mission control for {satelliteName}. Send commands, review logs, and manage data uploads.
            </p>

            {/* Main Content Container - Fades in and scales up */}
            <div className={`w-full max-w-2xl p-8 bg-white/5 border border-white/20 rounded-lg shadow-lg flex flex-col gap-8 z-10 backdrop-blur-sm
                                ${isMounted ? 'animate-fade-in-scale-up animation-delay-200' : 'opacity-0'}`}>

                {/* Command Input and Log Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-white/90 font-display">Send Command</h2>
                    {/* Log Area - Subtle text flicker */}
                    <div className="bg-white/10 p-4 rounded-md h-48 overflow-y-auto border border-white/30 mb-4 shadow-inner-glow">
                        {commandLog.map((logEntry, index) => (
                            <p key={index} className="text-white/70 text-sm mb-1 font-mono animate-flicker-slow">
                                {logEntry}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={commandInput}
                            onChange={(e) => setCommandInput(e.target.value)}
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                            placeholder="Enter command (e.g., START_DATA_STREAM)"
                            className={`flex-grow p-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                                         ${isInputFocused ? 'animate-pulse-blue-border' : ''}`}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendCommand();
                                }
                            }}
                        />
                        <button
                            onClick={handleSendCommand}
                            className="flex-shrink-0 py-3 px-6 rounded-md text-lg font-semibold
                                         bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                                         shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95"
                        >
                            Send Command
                        </button>
                    </div>
                </div>

                {/* Upload Option and Display Uploaded Files Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-white/90 font-display">Upload Data</h2>
                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                        <label className="block w-full text-sm cursor-pointer
                                             bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700
                                             text-white py-3 px-6 rounded-md font-semibold text-center
                                             shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            Choose File
                        </label>
                        <button
                            onClick={handleUploadButtonClick}
                            className="flex-shrink-0 w-full sm:w-auto py-3 px-6 rounded-md text-lg font-semibold
                                         bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                                         shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95"
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
                        <ul className="bg-white/5 p-4 rounded-md border border-white/20 shadow-inner-glow">
                            {uploadedFiles.map((file) => (
                                <li key={file.id} className="flex justify-between items-center text-white/70 text-base mb-1 p-2 rounded-md hover:bg-white/10 transition-colors duration-150 animate-fade-in">
                                    <span className="font-mono">
                                        <span className="font-semibold text-white">{file.name}</span> ({(file.size / 1024).toFixed(2)} KB) - {file.date}
                                    </span>
                                    {/* Removed the remove button for each file */}
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