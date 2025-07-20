// src/App.jsx
import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './index.css';
import BlurText from './components/BlurText.jsx';
import WalletConnectPage from './WalletConnectPage.jsx';
import AboutPage from './AboutPage.jsx';
import SatelliteRegisterPage from './SatelliteRegisterPage.jsx';
import RegisteredSatelliteDetailsPage from './RegisteredSatelliteDetailsPage.jsx'; // <--- Import the new component

// This component contains all the content for your home page
function HomeContent() {
  const navigate = useNavigate();

  const handleConnectWalletClick = () => {
    navigate('/connect-wallet');
  };

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between pb-6 border-b border-white/20 w-full">
        {/* TELEHASH title */}
        <div className="font-bold text-3xl tracking-widest uppercase bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-aurora drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          TELEHASH
        </div>

        {/* Navigation buttons */}
        <nav className="flex space-x-4">
          {/* Use Link for navigation buttons for proper SPA behavior */}
          <Link to="/dashboard" className="px-5 py-2 rounded-md border border-white/30 text-white/80 text-lg font-medium
                                hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer">
            Dashboard
          </Link>
          <Link to="/about" className="px-5 py-2 rounded-md border border-white/30 text-white/80 text-lg font-medium
                                hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer">
            About
          </Link>
        </nav>
      </header>

      {/* Hero section */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-10 font-mono">

        {/* --- LEFT COLUMN (CONTENT) --- */}
        <div className="lg:w-1/2 max-w-[600px] text-center lg:text-left">
          <BlurText
            text=" Blockchain-Backed Satellite Telemetry "
            delay={100}
            animateBy="words"
            direction="top"
            containerClassName="font-bold mb-6 leading-tight text-[2.0rem] md:text-[2.6rem] lg:text-[3.2rem] font-display"
            textClassName="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-aurora bg-[length:200%_auto] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          />
          <button
            onClick={handleConnectWalletClick}
            className="inline-block mt-10 bg-transparent border-2 border-white/50 text-white/80 py-3 px-6 md:py-[15px] md:px-[35px] font-medium text-base cursor-pointer transition-all duration-300 ease-in-out shadow-subtle-glow hover:text-white hover:bg-gradient-to-br from-[#181819] to-[#2b3038] hover:border-transparent hover:shadow-intense-glow hover:-translate-y-1">
            <span>Connect Wallet</span>
          </button>
        </div>

        {/* --- RIGHT COLUMN (ENLARGED 3D ANIMATION) --- */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto flex items-center justify-center">
          <div className="relative w-full h-full [perspective:900px] group">
            {/* 3D Container */}
            <div className="absolute w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
              {/* Earth Element */}
              <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-earth bg-cover rounded-full shadow-earth-glow animate-earth-rotate"></div>
              {/* Orbit Container */}
              <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] absolute animate-orbit-3d [transform-style:preserve-3d] [transform:rotateX(65deg)] transition-transform duration-500 ease-in-out group-hover:[transform:rotateX(50deg)]">
                {/* Satellite Positioner */}
                <div className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 [transform:translateX(180px)] md:[transform:translateX(240px)]">
                  {/* Satellite Image */}
                  <div className="absolute w-[80px] h-[80px] bg-satellite-image bg-contain bg-no-repeat bg-center animate-satellite-image-spin
                                        top-1/2 left-1/2 -mt-[40px] -ml-[40px] ">
                    <div className="absolute inset-0 shadow-lg rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// The main App component handles the overarching layout and routes
function App() {
  return (
    <div className="bg-black bg-stars bg-cover bg-center bg-fixed text-white font-sans flex justify-center items-center min-h-screen box-border overflow-hidden">
      <div className="w-full max-w-[1400px] bg-main-window bg-cover bg-center flex flex-col box-border p-5 md:p-10 lg:px-[50px] lg:py-[25px]
                      h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
        {/* Use Routes to define which component renders based on the URL */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomeContent />} />
          {/* Route for the connect wallet page */}
          <Route path="/connect-wallet" element={<WalletConnectPage />} />
          {/* Route for the About page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Route for the Dashboard page (you'll need to create this component) */}
          <Route path="/dashboard" element={
            <div className="flex items-center justify-center min-h-screen text-4xl text-white">
              <h1 className="text-5xl font-bold">Dashboard Page</h1>
              <p className="mt-4 text-lg">This is where your dashboard content will go.</p>
            </div>
          } />
          {/* Route for the Satellite Registration page */}
          <Route path="/satellite-register" element={<SatelliteRegisterPage />} />
          {/* NEW: Route for the Registered Satellite Details page */}
          <Route path="/registered-satellite-details" element={<RegisteredSatelliteDetailsPage />} />
          {/* Optional: A fallback route for 404 Not Found pages */}
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-screen text-4xl text-white">
              <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
              <p className="mt-4 text-lg">The page you are looking for does not inst.</p>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;