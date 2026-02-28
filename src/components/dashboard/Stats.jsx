import React from "react";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";

const Stat = ({ stat, index }) => {
  const isDark = stat.color === "bg-green-700";

  const styles = {
    wrapper: isDark ? "text-white" : "border border-gray-200",
    label:   isDark ? "text-green-100" : "text-gray-600",
    button:  isDark ? "bg-white/20"   : "bg-gray-100",
    value:   isDark ? "text-white"     : "text-gray-900",
    icon:    isDark ? "text-green-200" : "text-green-600",
    trend:   isDark ? "text-green-100" : "text-gray-500",
  };

  const cardStyle = isDark
    ? { background: "linear-gradient(135deg, #022c0a, #0b5e42)" }
    : undefined;

  return (
    <div className="h-full">
      <div
        className={`${!isDark ? stat.color : ""} ${styles.wrapper}  rounded-2xl p-6 h-full flex flex-col justify-between`}
        style={cardStyle}
      >
        
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