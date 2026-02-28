import React from "react";
import { MdPhotoCameraFront, MdPlayArrow } from "react-icons/md";

const Reminder = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Reminders</h3>
        <div className="mb-0">
          <h4 className="text-lg sm:text-[20px] font-medium text-[#14532D] mb-1.5 leading-tight">
            Meeting with Arc Company
          </h4>
          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            Time: 02.00 pm - 04.00 pm
          </p>
        </div>
      </div>
      <button  className="bg-linear-to-b from-[#124c29] via-[#195b32] to-[#28864d] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm hover:bg-green-800 transition-colors flex items-center gap-2 shadow-sm">
        <MdPhotoCameraFront className="w-5 h-5" />
        Start Meeting
      </button>
    </div>
  );
};

export default Reminder;
