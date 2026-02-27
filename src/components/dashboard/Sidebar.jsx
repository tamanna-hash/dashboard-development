import React, { useState } from "react";
import { MdDashboard, MdCheckCircle, MdCalendarToday, MdBarChart, MdPeople, MdSettings, MdHelp, MdLogout, MdMenu, MdClose } from 'react-icons/md';
import greenbg from '../../assets/greenbg.jpeg'; // Reusing your asset for the card

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: MdDashboard, label: 'Dashboard', active: true },
        { icon: MdCheckCircle, label: 'Tasks', badge: '12+' },
        { icon: MdCalendarToday, label: 'Calendar' },
        { icon: MdBarChart, label: 'Analytics' },
        { icon: MdPeople, label: 'Team' },
    ];

    const generalItems = [
        { icon: MdSettings, label: 'Settings' },
        { icon: MdHelp, label: 'Help' },
        { icon: MdLogout, label: 'Logout' },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-100"
            >
                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40
                w-72 bg-white border-r border-gray-100 h-screen flex flex-col transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                
                {/* Logo Section */}
                <div className="p-8 flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                        {/* Custom SVG Logo to match "Donezo" icon exactly */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#15803d"/>
                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#15803d"/>
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-800 tracking-tight">Donezo</span>
                </div>

                {/* Navigation Scroll Area */}
                <div className="flex-1 px-6 overflow-y-auto custom-scrollbar">
                    {/* Menu Section */}
                    <div className="mb-10">
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[2px] mb-6 px-4">Menu</p>
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative group mb-2">
                                {/* Active Indicator Pill */}
                                {item.active && (
                                    <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-1.5 h-8 bg-green-800 rounded-r-full" />
                                )}
                                
                                <button className={`
                                    w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                                    ${item.active ? 'text-gray-900 font-bold' : 'text-gray-400 font-medium hover:text-gray-600'}
                                `}>
                                    <item.icon className={`w-6 h-6 ${item.active ? 'text-green-700' : ''}`} />
                                    <span className="flex-1 text-left text-[15px]">{item.label}</span>
                                    {item.badge && (
                                        <span className="bg-[#14532D] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[24px] text-center">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* General Section */}
                    <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[2px] mb-6 px-4">General</p>
                        {generalItems.map((item, index) => (
                            <button key={index} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-2 text-gray-400 font-medium hover:text-gray-600 transition-all">
                                <item.icon className="w-6 h-6" />
                                <span className="text-[15px]">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom App Download Card */}
                <div className="p-6">
                    <div 
                        className="rounded-3xl p-5 relative overflow-hidden h-40 flex flex-col justify-end shadow-lg"
                        style={{
                            backgroundImage: `url(${greenbg})`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="absolute top-4 left-5 bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                           <MdDashboard className="text-white w-5 h-5" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-white font-bold text-sm leading-tight mb-3">
                                Download our <br /> Mobile App
                            </p>
                            <button className="w-full bg-[#14532D] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-opacity-90 transition-all">
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
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;