import { FiSearch, FiBell, FiMail, FiMenu } from 'react-icons/fi';
import avatar2 from "../../assets/avatar2.jpeg";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="px-4 sm:px-6 py-3 flex items-center justify-between gap-3 min-h-16">
      {/* Left: menu (mobile) + search */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 shrink-0"
            aria-label="Open menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        )}
        <div className="relative flex-1 max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search task"
            className="w-full pl-10 pr-12 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium hidden sm:inline">
            ⌘F
          </span>
        </div>
      </div>

      {/* Right: actions + profile */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        <button type="button" className="p-2 sm:p-2.5 hover:bg-gray-200 bg-white rounded-full text-gray-600 transition-colors" aria-label="Messages">
          <FiMail className="w-5 h-5" />
        </button>
        <button type="button" className="p-2 sm:p-2.5 hover:bg-gray-200 bg-white rounded-full text-gray-600 transition-colors" aria-label="Notifications">
          <FiBell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2 pl-2 sm:pl-0 border-l border-gray-100">
          <img
            src={avatar2}
            alt="User"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
          />
          <div className="hidden sm:block min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">Totok Michael</p>
            <p className="text-xs text-gray-500 truncate">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
