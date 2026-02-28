import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="bg-white rounded-2xl px-6 py-3 border border-gray-100 shadow-sm flex-1 relative"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
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

            <motion.div
              className="w-full max-w-14 rounded-full"
              style={barStyles[bar.type]}
              initial={{ height: 0 }}
              animate={{ height: `${bar.height}%` }}
              transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: "easeOut" }}
            />

            <span className="text-[12px] text-gray-400 font-medium mt-3">
              {bar.day}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectAnalytics;
