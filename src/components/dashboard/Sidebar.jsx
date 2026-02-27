import { MdDashboard, MdCheckCircle, MdCalendarToday, MdBarChart, MdPeople, MdSettings, MdHelp, MdLogout } from 'react-icons/md';

const Sidebar = () => {
    const menuItems = [
        { icon: MdDashboard, label: 'Dashboard', active: true },
        { icon: MdCheckCircle, label: 'Tasks', badge: '12' },
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
        <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
            <div className="p-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Donezo</span>
            </div>

            <div className="flex-1 px-4">
                <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">Menu</p>
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                                item.active
                                    ? 'bg-white text-green-600 shadow-sm border-l-4 border-green-600'
                                    : 'text-gray-600 hover:bg-white'
                            }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                            {item.badge && (
                                <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">General</p>
                    {generalItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-gray-600 hover:bg-white transition-colors"
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;