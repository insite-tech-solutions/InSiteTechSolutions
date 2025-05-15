import React from 'react';

const PageTransitionLoader: React.FC = () => {
  return (
    <div className="fixed left-0 right-0 top-[104px] h-[calc(100vh-104px)] z-[9999] flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-100 opacity-100" id="page-transition-loader">
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-light-blue rounded-full animate-loader-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="w-5 h-5 bg-medium-blue rounded-full animate-loader-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-5 h-5 bg-dark-blue-alt rounded-full animate-loader-pulse" style={{ animationDelay: '0.2s' }}></div>
      </div>
      {/* You can add text here if desired, e.g., <p className="mt-4 text-lg text-gray-700">Loading...</p> */}
      <style jsx global>{`
        @keyframes loader-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.75);
          }
        }
        .animate-loader-pulse {
          animation: loader-pulse 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PageTransitionLoader; 