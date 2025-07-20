import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import ALL necessary icons from react-icons
import { 
  FaLink, FaCloud, FaShieldAlt, // For Key Solution Features
  FaSatellite, FaHelicopter, FaTemperatureLow, FaFlask, FaMedkit, // For Use Cases - FaDrone changed to FaHelicopter
  FaExclamationTriangle, FaLightbulb, FaTimesCircle // For Problem Statement icons
} from 'react-icons/fa'; // Using Font Awesome icons

function AboutPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-5 md:p-10">
      <div className="w-full max-w-[1000px] bg-main-window bg-cover bg-center flex flex-col box-border p-5 md:p-10 lg:px-[50px] lg:py-[25px] rounded-lg shadow-lg overflow-y-auto no-scrollbar">
        
        {/* 1. Section Title: About Telehash */}
        <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-[36px] mb-12
                       bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent 
                       bg-[length:200%_auto] animate-aurora drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          About Telehash
        </h1>

        {/* 3. Solution Overview (placed here for flow) */}
        <section className="mb-12 text-center"> {/* Removed opacity-0, animate-fade-in-up, animation-delay-300 */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">How Telehash Solves This</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Telehash brings verifiability and trust to telemetry data using blockchain-backed logging, decentralized storage, and cryptographic integrity.
          </p>
        </section>

        {/* 2. Problem Statement */}
        <section className="mb-12"> {/* Removed opacity-0, animate-fade-in-up, animation-delay-600 */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Problem Statement</h2>
          <ul className="space-y-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-2xl mt-1"><FaExclamationTriangle /></span> {/* Warning icon */}
              Centralized telemetry is prone to tampering.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 text-2xl mt-1"><FaLightbulb /></span> {/* Alert/Info icon */}
              Limited transparency in data relay or receipt.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-2xl mt-1"><FaTimesCircle /></span> {/* Error/Issue icon */}
              Poor traceability across multi-satellite or device networks.
            </li>
          </ul>
        </section>

        {/* 4. Key Solution Features */}
        <section className="mb-12"> {/* Removed opacity-0, animate-fade-in-up, animation-delay-900 */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Key Solution Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center 
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaLink className="text-5xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blockchain Logging</h3>
              <p className="text-white/70">Every command & signal is immutably recorded.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center 
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaCloud className="text-5xl text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Decentralized Storage</h3>
              <p className="text-white/70">Logs stored via BNB Greenfield, not centralized.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center 
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaShieldAlt className="text-5xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cryptographic Proofs</h3>
              <p className="text-white/70">Verifiable integrity using file & signal hashes.</p>
            </div>
          </div>
        </section>

        {/* 5. Use Cases (Visual Grid) */}
        <section className="mb-12"> {/* Removed opacity-0, animate-fade-in-up, animation-delay-1200 */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Use Cases</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
              <FaSatellite className="text-5xl text-gray-300 mb-3" />
              <span className="text-lg font-medium">Satellite Systems</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
              <FaHelicopter className="text-5xl text-gray-300 mb-3" /> {/* FaDrone changed to FaHelicopter */}
              <span className="text-lg font-medium">Drones</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
              <FaTemperatureLow className="text-5xl text-blue-300 mb-3" /> {/* Cold chain uses blue */}
              <span className="text-lg font-medium">Cold Chain Tracking</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
              <FaFlask className="text-5xl text-orange-300 mb-3" />
              <span className="text-lg font-medium">DeSci Labs</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
              <FaMedkit className="text-5xl text-red-300 mb-3" />
              <span className="text-lg font-medium">Medical Devices</span>
            </div>
          </div>
        </section>
        
        {/* Go Back Home Button */}
        <button
          onClick={handleGoBack}
          className="mt-10 px-6 py-2 rounded-md border border-white/30 text-white/80 text-base font-medium
                     hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer self-center"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default AboutPage;