import React from 'react'

function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-lg font-semibold mb-4">Loading...</div>
          <div className="border-t-4 border-gray-300 border-dashed animate-spin rounded-full w-12 h-12"></div>
        </div>
      );
    };

export default LoadingPage