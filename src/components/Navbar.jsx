import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = ({ role, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          Attendance App
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-100 focus:outline-none hover:scale-110 transition-transform duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 right-4 bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none transition-all duration-300 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            {!role && (
              <>
                <div
                  onClick={() => handleNavigation('/')}
                  className="nav-link text-gray-800 dark:text-gray-100"
                >
                  Home
                </div>
                <div
                  onClick={() => handleNavigation('/login')}
                  className="nav-link text-gray-800 dark:text-gray-100"
                >
                  Login
                </div>
                <div
                  onClick={() => handleNavigation('/signup')}
                  className="nav-link text-gray-800 dark:text-gray-100"
                >
                  Sign Up
                </div>
              </>
            )}
            {role && (
              <>
                <button
                  onClick={() => {
                    setRole(null);
                    handleNavigation('/');
                  }}
                  className="nav-link text-gray-800 dark:text-gray-100"
                >
                  Logout
                </button>
                {role === 'student' && (
                  <>
                    <div onClick={() => handleNavigation('/dashboard/username')} className="nav-link text-gray-800 dark:text-gray-100">Username</div>
                    <div onClick={() => handleNavigation('/dashboard/profile')} className="nav-link text-gray-800 dark:text-gray-100">My Profile</div>
                    <div onClick={() => handleNavigation('/dashboard/edit-profile')} className="nav-link text-gray-800 dark:text-gray-100">Edit Profile</div>
                    <div onClick={() => handleNavigation('/dashboard/my-classes')} className="nav-link text-gray-800 dark:text-gray-100">My Classes</div>
                    <div onClick={() => handleNavigation('/dashboard/my-attendance')} className="nav-link text-gray-800 dark:text-gray-100">My Attendance</div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          display: block;
          padding: 0.5rem 1rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .nav-link:hover {
          background-color: #14b8a6; /* teal-500 hover */
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
