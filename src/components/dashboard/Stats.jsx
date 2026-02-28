import React from "react";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
const Stat = ({ stat }) => {
  const isDark = stat.color === "bg-green-700";

  const styles = {
    wrapper: isDark ? "text-white" : "border border-gray-200",
    label: isDark ? "text-green-100" : "text-gray-600",
    button: isDark ? "bg-white/20" : "bg-gray-100",
    value: isDark ? "text-white" : "text-gray-900",
    icon: isDark ? "text-green-200" : "text-green-600",
    trend: isDark ? "text-green-100" : "text-gray-500",
  };

  const cardStyle = isDark
    ? { background: "linear-gradient(135deg, #022c0a, #0b5e42)" }
    : undefined;

  return (
    <div className="h-full">
      <div
        className={`${!isDark ? stat.color : ""} ${styles.wrapper}  rounded-2xl p-4 h-full flex flex-col justify-between`}
        style={cardStyle}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-medium ${styles.label}`}>
            {stat.title}
          </span>
          <button className={`p-2 rounded-full ${styles.button}`}>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Value */}
        <div className={`text-5xl font-medium mb-3 ${styles.value}`}>
          {stat.value}
        </div>

        {/* Trend — pinned to bottom */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-0.5 px-1 py-0.5 rounded-md border text-[10px] font-bold shrink-0 ${
              isDark
                ? "bg-white/10 border-white/20 text-green-300"
                : "bg-green-50 border-green-100 text-green-600"
            }`}
          >
            <span>{stat.badge}</span>
            <FiArrowUpRight className="w-2 h-2" />
          </div>
          <span className={`text-[11px] ${styles.trend}`}>{stat.trend}</span>
        </div>
      </div>
    </div>
  );
};

export default Stat;
