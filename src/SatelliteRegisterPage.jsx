// src/SatelliteRegisterPage.jsx
import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';

function SatelliteRegisterPage() {
    const navigate = useNavigate();
    const [satelliteName, setSatelliteName] = useState(''); // State for satellite name

    const handleGoBack = () => {
        navigate('/connect-wallet'); // Navigate back to the Wallet Connect page
    };

    const handleRegisterSatellite = () => {
        if (satelliteName.trim() === '') {
            alert('Please enter a satellite name to register.');
            return;
        }
        // Navigate to the new page, passing the satelliteName as state
        navigate('/registered-satellite-details', { state: { satelliteName: satelliteName.trim() } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Satellite Registration</h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 text-center max-w-lg">
                Register your satellite to start tracking telemetry data.
            </p>

            {/* Satellite registration form */}
            <div className="w-full max-w-md p-8 bg-white/5 border border-white/20 rounded-lg shadow-lg flex flex-col gap-6">
                <div className="flex flex-col">
                    <label htmlFor="satelliteName" className="text-white/80 text-sm mb-2">Satellite Name</label>
                    <input
                        type="text"
                        id="satelliteName"
                        value={satelliteName} // Bind value to state
                        onChange={(e) => setSatelliteName(e.target.value)} // Update state on change
                        placeholder="e.g., TeleHash-SAT-001"
                        className="p-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={handleRegisterSatellite} // Call the new handler
                    className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 rounded-md text-lg font-semibold transition-colors duration-200"
                >
                    Register Satellite
                </button>
            </div>

            <button
                onClick={handleGoBack}
                className="mt-10 px-6 py-2 rounded-md border border-white/30 text-white/80 text-base font-medium
                           hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
            >
                Go Back
            </button>
        </div>
    );
}

export default SatelliteRegisterPage;