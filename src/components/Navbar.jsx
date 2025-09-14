import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white hover:text-blue-200 transition duration-300 cursor-pointer" onClick={() => scrollToSection('home')}>
          Attendance App
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:space-x-6 absolute md:static top-12 right-4 bg-blue-800 md:bg-transparent p-4 md:p-0 rounded-md shadow-lg md:shadow-none`}>
          <div onClick={() => scrollToSection('login')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Login</div>
          <div onClick={() => scrollToSection('register')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Register</div>
          <div onClick={() => scrollToSection('scanner')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Scan Attendance</div>
          <div onClick={() => scrollToSection('dashboard')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Dashboard</div>
          <div onClick={() => scrollToSection('admin')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Admin</div>
          <div onClick={() => scrollToSection('static-class')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Static Class</div>
          <div onClick={() => scrollToSection('dynamic-class')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Dynamic Class</div>
          <div onClick={() => scrollToSection('online-class')} className="block md:inline-block hover:text-blue-200 transition duration-300 py-2 cursor-pointer">Online Class</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;