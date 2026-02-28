import React, { useState } from "react";
import {
  MdDashboard,
  MdCheckCircle,
  MdCalendarToday,
  MdBarChart,
  MdPeople,
  MdSettings,
  MdHelp,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import greenbg from "../../assets/greenbg.jpeg";
import logo from '../../assets/logo_icon.png'
const Sidebar = ({ isOpen: isOpenProp, setOpen: setOpenProp }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isOpenProp !== undefined ? isOpenProp : internalOpen;
  const setOpen = setOpenProp || setInternalOpen;

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", active: true },
    { icon: MdCheckCircle, label: "Tasks", badge: "12+" },
    { icon: MdCalendarToday, label: "Calendar" },
    { icon: MdBarChart, label: "Analytics" },
    { icon: MdPeople, label: "Team" },
  ];

  const generalItems = [
    { icon: MdSettings, label: "Settings" },
    { icon: MdHelp, label: "Help" },
    { icon: MdLogout, label: "Logout" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-100"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      <aside
        className={`
                fixed top-0 left-0 z-45
                w-70 border-r rounded-2xl mx-2 bg-gray-100 mt-2 border-gray-100 h-screen flex flex-col transition-transform duration-300
                rounded-r-2xl overflow-y-auto scrollbar-hide
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
      >
        {/* Logo Section */}
        <div className="p-6 mt-5 md:mt-0 ml-3 md:ml-0 flex items-center gap-3 shrink-0">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <span className="text-2xl font-semibold text-gray-800 tracking-tight">
            Donezo
          </span>
        </div>

        {/* Navigation Scroll Area */}
        <div className="flex-1 px-4 overflow-y-auto scrollbar-hide">
          <div className="mb-8">
            <p className="text-sm text-gray-400 uppercase tracking-[2px] mb-4 px-3">
              Menu
            </p>
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  className={`group w-full flex items-center gap-4 py-2 px-8 transition-all duration-200 text-left relative
                    ${
                        item.active
                          ? "text-gray-700 font-medium"
                          : "text-gray-400  hover:text-gray-700 hover:bg-gray-50/50"
                    }`}
                >
                  {/* The Active Indicator Pill */}
                  {item.active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-[#14532D] rounded-r-full shadow-[2px_0_8px_rgba(20,83,45,0.2)]" />
                  )}

                  <item.icon
                    className={`w-6 h-6 shrink-0 transition-colors 
                       ${item.active ? "text-[#14532D]" : "text-gray-400 group-hover:text-gray-600"}`}
                  />
                  <span className="flex-1 text-[15px]">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md min-w-7 text-center bg-[#14532D] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[2px] mb-4 px-3">
              General
            </p>
            {generalItems.map((item, index) => (
              <button
                key={index}
                className="group w-full flex items-center gap-4 px-4 py-3 rounded-r-xl mb-1.5 text-gray-500 font-medium hover:bg-gray-50/50 hover:text-gray-700 transition-colors duration-150 text-left"
              >
                <item.icon className="w-6 h-6 shrink-0 text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="text-[15px]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom App Download Card */}
        <div className="p-4 shrink-0">
          <div
            className="rounded-xl p-5 relative overflow-hidden min-h-35 flex flex-col justify-end shadow-lg"
            style={{
              backgroundImage: `url(${greenbg})`,
              backgroundSize: "cover",
              backgroundColor: "#14532D",
            }}
          >
            <div className="relative z-10">
              <p className="text-white text-lg leading-tight mb-1">
                Download our <br /> Mobile App
              </p>
              <p className="text-white/90 text-xs mb-4">
                Get easy in another way
              </p>
              <button className="w-full bg-[#14532D] text-white hover:bg-[#195f35] text-sm font-bold py-2.5 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
