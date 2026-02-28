import React from "react";

const bars = [
  { day: "S", height: 50, type: "hatched" },
  { day: "M", height: 70, type: "green-dark" },
  { day: "T", height: 60, type: "green-light", tooltip: "74%" },
  { day: "W", height: 85, type: "green-medium" },
  { day: "T", height: 65, type: "hatched" },
  { day: "F", height: 55, type: "hatched" },
  { day: "S", height: 45, type: "hatched" },
];

const barStyles = {
  hatched: {
    backgroundColor: "#F3F4F6",
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(209, 213, 219, 0.6) 5px, rgba(209, 213, 219, 0.6) 10px)`,
  },
  "green-light": { backgroundColor: "#86EFAC" },
  "green-medium": { backgroundColor: "#14532D" },
  "green-dark": { backgroundColor: "#064E3B" },
};

const ProjectAnalytics = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1 relative">
      <h3 className="text-lg font-semibold text-gray-800 mb-8">
        Project Analytics
      </h3>

      <div className="flex items-end justify-between h-40 gap-2 px-1">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center group relative h-full justify-end"
          >
            {bar.tooltip && (
              <div
                className="absolute mb-4"
                style={{
                  bottom: `${bar.height + 8}%`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="bg-[#064E3B] text-white text-[10px] py-1 px-2 rounded-lg relative font-semibold">
                  {bar.tooltip}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#064E3B] rotate-45"></div>
                </div>
              </div>
            )}

            <div
              className="w-full max-w-14 rounded-full transition-all duration-300"
              style={{
                height: `${bar.height}%`,
                ...barStyles[bar.type],
              }}
            />

            <span className="text-[12px] text-gray-400 font-medium mt-3">
              {bar.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
