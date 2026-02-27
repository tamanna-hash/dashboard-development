import React from "react";
import { MdPause, MdStop } from "react-icons/md";
import greenbg from '../../assets/greenbg.jpeg';

const TimeTracker = () => {
  return (
    <div className="flex flex-col gap-6">
      

      {/* Time Tracker with your Image Asset */}
      <div 
        className="rounded-[24px] p-6 text-white relative overflow-hidden h-[240px] flex flex-col justify-between shadow-xl"
        style={{
          backgroundImage: `url(${greenbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Subtle overlay to ensure text readability if the image is too bright */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <h3 className="text-sm font-bold relative z-10 tracking-wide opacity-90">
          Time Tracker
        </h3>
        
        <div className="text-center relative z-10">
          <div className="text-[52px] font-bold tracking-tighter mb-6 leading-none">
            01:24:08
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {/* Pause Button - Styled like the image */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#064E3B] shadow-lg hover:scale-105 active:scale-95 transition-all">
              <MdPause className="w-7 h-7" />
            </button>
            
            {/* Stop Button - Styled with the ring effect from the image */}
            <button className="w-12 h-12 bg-[#FF4D4D] rounded-full flex items-center justify-center text-white border-[5px] border-white/20 shadow-lg hover:scale-105 active:scale-95 transition-all">
              <MdStop className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;