import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen bg-[#f4f9f6] flex items-center justify-center px-6">
      
      {/* Subtle background circle */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-green-100 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-md">

        {/* Big 404 */}
        <h1
          className="text-[120px] font-bold leading-none text-[#14532D] opacity-10 select-none"
          style={{ letterSpacing: "-6px" }}
        >
          404
        </h1>

        {/* Icon */}
        <div className="flex justify-center -mt-10 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-green-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <circle cx="12" cy="12" r="9" stroke="#16a34a" strokeWidth="1.8"/>
              <path d="M12 8v5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="15.5" r="0.8" fill="#16a34a"/>
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-[#14532D] mb-2">Page not found</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 text-sm font-medium text-[#14532D] border border-[#14532D] rounded-full hover:bg-green-50 transition-colors"
          >
            ← Go back
          </button>
          <button
            onClick={() => window.location.href = "/"}
            className="px-5 py-2.5 text-sm font-medium text-white bg-[#16a34a] rounded-full hover:bg-[#15803d] transition-colors shadow-sm"
          >
            Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;