import { FiSearch, FiBell, FiMail } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-md">
                <div className="relative w-full">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search task"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">⌘F</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <FiMail className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <FiBell className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-3 ml-2">
                    <img
                        src="https://ui-avatars.com/api/?name=Totok+Michael&background=059669&color=fff"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Totok Michael</p>
                        <p className="text-xs text-gray-500">tmichael20@mail.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;