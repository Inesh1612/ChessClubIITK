import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/chessclubiitklogo.jpeg';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  return (
    <aside className={`bg-[#1c1b1b] h-screen fixed left-0 top-0 border-r border-[#4d4635]/15 shadow-[32px_0_32px_rgba(0,0,0,0.06)] flex flex-col py-8 z-50 transition-all duration-300 ${isCollapsed ? 'w-20 px-2' : 'w-64 px-6'}`}>
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-surface-container-highest border border-outline-variant/30 rounded-full w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all z-50 shadow-md outline-none"
      >
        <span className="material-symbols-outlined text-[14px]">
          {isCollapsed ? 'chevron_right' : 'chevron_left'}
        </span>
      </button>

      <div className={`mb-12 flex flex-col items-center text-center mt-4`}>
        <Link to="/" className={`flex flex-col items-center gap-3 group`}>
          <img 
            alt="Chess Club IITK Seal" 
            className={`rounded-full border border-primary-container/20 group-hover:border-primary transition-all duration-300 shrink-0 shadow-lg object-cover ${isCollapsed ? 'w-10 h-10' : 'w-16 h-16'}`} 
            src={logo} 
          />
          <div className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'h-0 opacity-0 hidden' : 'h-auto opacity-100 mt-2'}`}>
            <span className="text-xl font-serif italic text-[#D4AF37] tracking-tighter group-hover:text-primary transition-colors">Chess Club IITK</span>
          </div>
        </Link>
        <div className={`transition-all duration-300 ${isCollapsed ? 'h-0 opacity-0 hidden' : 'h-auto opacity-100 mt-1'}`}>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold">IIT Kanpur</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2">
        <NavLink to="/calendar" className={({ isActive }) => `flex items-center gap-4 py-3 rounded-lg transition-colors duration-300 ${isCollapsed ? 'justify-center px-0 mx-2' : 'pl-4'} ${isActive && !isCollapsed ? 'text-[#f2ca50] font-bold border-l-4 border-[#D4AF37] bg-[#201f1f]/50' : isActive && isCollapsed ? 'text-[#f2ca50] font-bold bg-[#201f1f]/50' : 'text-[#e5e2e1]/60 font-medium hover:bg-[#201f1f] hover:text-[#f2ca50]'}`}>
          <span className="material-symbols-outlined shrink-0">calendar_month</span>
          <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
            <span className="text-sm tracking-wide truncate">Calendar</span>
          </div>
        </NavLink>

        <NavLink to="/events" className={({ isActive }) => `flex items-center gap-4 py-3 rounded-lg transition-colors duration-300 ${isCollapsed ? 'justify-center px-0 mx-2' : 'pl-4'} ${isActive && !isCollapsed ? 'text-[#f2ca50] font-bold border-l-4 border-[#D4AF37] bg-[#201f1f]/50' : isActive && isCollapsed ? 'text-[#f2ca50] font-bold bg-[#201f1f]/50' : 'text-[#e5e2e1]/60 font-medium hover:bg-[#201f1f] hover:text-[#f2ca50]'}`}>
          <span className="material-symbols-outlined shrink-0">event</span>
          <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
            <span className="text-sm tracking-wide truncate">Events</span>
          </div>
        </NavLink>

        <NavLink to="/blogs" className={({ isActive }) => `flex items-center gap-4 py-3 rounded-lg transition-colors duration-300 ${isCollapsed ? 'justify-center px-0 mx-2' : 'pl-4'} ${isActive && !isCollapsed ? 'text-[#f2ca50] font-bold border-l-4 border-[#D4AF37] bg-[#201f1f]/50' : isActive && isCollapsed ? 'text-[#f2ca50] font-bold bg-[#201f1f]/50' : 'text-[#e5e2e1]/60 font-medium hover:bg-[#201f1f] hover:text-[#f2ca50]'}`}>
          <span className="material-symbols-outlined shrink-0">article</span>
          <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
            <span className="text-sm tracking-wide truncate">Blogs</span>
          </div>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-4 py-3 rounded-lg transition-colors duration-300 ${isCollapsed ? 'justify-center px-0 mx-2' : 'pl-4'} ${isActive && !isCollapsed ? 'text-[#f2ca50] font-bold border-l-4 border-[#D4AF37] bg-[#201f1f]/50' : isActive && isCollapsed ? 'text-[#f2ca50] font-bold bg-[#201f1f]/50' : 'text-[#e5e2e1]/60 font-medium hover:bg-[#201f1f] hover:text-[#f2ca50]'}`}>
          <span className="material-symbols-outlined shrink-0">contact_page</span>
          <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
            <span className="text-sm tracking-wide truncate">Contact Us</span>
          </div>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/user" className={({ isActive }) => `flex items-center gap-4 py-3 rounded-lg transition-colors duration-300 ${isCollapsed ? 'justify-center px-0 mx-2' : 'pl-4'} ${isActive && !isCollapsed ? 'text-[#f2ca50] font-bold border-l-4 border-[#D4AF37] bg-[#201f1f]/50' : isActive && isCollapsed ? 'text-[#f2ca50] font-bold bg-[#201f1f]/50' : 'text-[#e5e2e1]/60 font-medium hover:bg-[#201f1f] hover:text-[#f2ca50]'}`}>
            <span className="material-symbols-outlined shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100 flex items-center justify-between flex-1 pr-4'}`}>
              <span className="text-sm tracking-wide truncate">User</span>
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </div>
            </div>
          </NavLink>
        )}
      </nav>

      <div className="mt-auto space-y-4 pt-8">
        <div className="pt-6 space-y-1 relative">
          <button 
            onClick={handleAuthClick}
            className={`flex items-center gap-4 text-[#e5e2e1]/60 font-medium py-2 transition-colors w-full rounded-lg ${isLoggedIn ? 'hover:text-error' : 'hover:text-primary'} ${isCollapsed ? 'justify-center px-0 mx-2 hover:bg-[#201f1f]' : 'pl-4 text-left hover:bg-[#201f1f]'}`}
          >
            <span className="material-symbols-outlined text-xl shrink-0">{isLoggedIn ? 'logout' : 'login'}</span>
            <div className={`transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
                <span className="text-xs truncate">{isLoggedIn ? 'Log Out' : 'Log In'}</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
