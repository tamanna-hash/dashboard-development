import React from "react";

const ProjectProgress = () => {
  // SVG Math: 
  // Radius: 60. Arc Length = PI * 60 ≈ 188.5
  const totalArcLength = 188.5;
  // Completed segment for 41%: 188.5 * 0.41 ≈ 77.3
  const completedSegmentValue = 77.3;

  return (
    <div className="bg-white rounded-2xl py-6 px-3 border border-gray-100 shadow-sm flex flex-col min-h-0">
      <h3 className="text-lg font-bold text-gray-800 mb-5 shrink-0">Project Progress</h3>

      <div className="relative flex flex-col items-center justify-center flex-1 min-h-0 py-2">
        {/* SVG Gauge */}
        <svg viewBox="0 0 160 100" className="w-full max-w-55 shrink-0">
          {/* Define the hatched pattern */}
          <defs>
            <pattern
              id="pendingStripes"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#D1D5DB" // Light gray color
                strokeWidth="1.5"
              />
            </pattern>
          </defs>

          {/* Background Track (The "Hatched" Pending part from the image) */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="url(#pendingStripes)" // Apply the stripe pattern here
            strokeWidth="18"
            strokeLinecap="round"
          />
          
          {/* Progress Segment 1: Completed */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#15803d" // Light Green
            strokeWidth="18"
            strokeDasharray={`${completedSegmentValue} ${totalArcLength}`} // 41%
            strokeLinecap="round"
          />

          {/* Progress Segment 2: In Progress */}
          {/* This part covers the remainder after 41% but is darker */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#064E3B" // Dark Green
            strokeWidth="18"
            strokeDasharray={`${totalArcLength * 0.25} ${totalArcLength}`} // arbitrary small segment
            strokeDashoffset={-completedSegmentValue} // starts where green ends
            strokeLinecap="round"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute top-[45%] flex flex-col items-center">
          <span className="text-4xl font-extrabold text-gray-900">41%</span>
          <span className="text-xs font-semibold text-gray-400">Project Ended</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-5 pt-4 shrink-0 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#15803d] rounded-full"></div>
          <span className="text-[11px] font-bold text-gray-500">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#064E3B] rounded-full"></div>
          <span className="text-[11px] font-bold text-gray-500">InProgress</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{
                backgroundImage: `repeating-linear-gradient(45deg, #D1D5DB 0px, #D1D5DB 1px, transparent 1px, transparent 3px)`
            }}
          ></div>
          <span className="text-[11px] font-bold text-gray-500">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;