import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-white hover:text-blue-200 transition duration-300">
          Attendance App
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:space-x-6 absolute md:static top-12 right-4 bg-blue-800 md:bg-transparent p-4 md:p-0 rounded-md shadow-lg md:shadow-none`}>
          <Link to="/register" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Register</Link>
          <Link to="/scanner" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Scan Attendance</Link>
          <Link to="/dashboard" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Dashboard</Link>
          <Link to="/admin" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Admin</Link>
          <Link to="/static-class" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Static Class</Link>
          <Link to="/dynamic-class" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Dynamic Class</Link>
          <Link to="/online-class" className="block md:inline-block hover:text-blue-200 transition duration-300 py-2">Online Class</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;