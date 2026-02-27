import React from "react";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";

const Stat = ({ stat, index }) => {
  const isDark = stat.color === "bg-green-700";

  const styles = {
    wrapper: isDark ? "text-white" : "border border-gray-200",
    label:   isDark ? "text-green-100" : "text-gray-600",
    button:  isDark ? "bg-green-600"   : "bg-gray-100",
    value:   isDark ? "text-white"     : "text-gray-900",
    icon:    isDark ? "text-green-300" : "text-green-600",
    trend:   isDark ? "text-green-100" : "text-gray-500",
  };

  return (
    <div className="h-full">
      <div className={`${stat.color} ${styles.wrapper} rounded-2xl p-6 h-full flex flex-col justify-between`}>
        
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm font-medium ${styles.label}`}>
            {stat.title}
          </span>
          <button className={`p-2 rounded-full ${styles.button}`}>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Value */}
        <div className={`text-5xl font-bold mb-2 ${styles.value}`}>
          {stat.value}
        </div>

        {/* Trend — pinned to bottom */}
        <div className="flex items-center gap-2">
          <FiTrendingUp className={`w-4 h-4 ${styles.icon}`} />
          <span className={`text-xs ${styles.trend}`}>{stat.trend}</span>
        </div>

      </div>
    </div>
  );
};

export default Stat;