import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for the "Go Back" button

function WalletConnectPage() {
  const navigate = useNavigate(); // Hook to get the navigation function

  // Function to navigate back to the home page
  const handleGoBack = () => {
    navigate('/'); // Navigates to the root path
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Connect Your Wallet</h1>
      <p className="text-lg md:text-xl text-white/80 mb-10 text-center max-w-lg">
        This is where your actual Web3 wallet connection logic (e.g., MetaMask, WalletConnect integration) would go.
      </p>

      {/* Placeholder for wallet connection UI */}
      <div className="w-full max-w-sm p-6 bg-white/5 border border-white/20 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold transition-colors duration-200">
          Connect MetaMask
        </button>
        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-semibold transition-colors duration-200">
          Connect WalletConnect
        </button>
        <p className="text-sm text-white/50 mt-4">More wallet options coming soon!</p>
      </div>

      <button
        onClick={handleGoBack} // Add the click handler to go back
        className="mt-10 px-6 py-2 rounded-md border border-white/30 text-white/80 text-base font-medium
                   hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default WalletConnectPage;