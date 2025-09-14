import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center animate-fade-in">
          Welcome to Attendance App
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
          Streamline your attendance management with our all-in-one solution. Track sessions, scan QR codes, and manage classes effortlessly. Whether you're a student, teacher, or admin, this app is designed to make attendance easy and accurate as of September 14, 2025.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/login" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Login</h3>
            <p className="text-gray-600">Access your account to start managing attendance.</p>
          </Link>
          <Link to="/register" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Register</h3>
            <p className="text-gray-600">Create a new account to join the system.</p>
          </Link>
          <Link to="/scanner" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Scan Attendance</h3>
            <p className="text-gray-600">Use your camera to scan QR codes for attendance.</p>
          </Link>
          <Link to="/dashboard" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Dashboard</h3>
            <p className="text-gray-600">View your attendance summary and stats.</p>
          </Link>
          <Link to="/admin" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Admin Panel</h3>
            <p className="text-gray-600">Manage all attendance records and generate QR codes.</p>
          </Link>
          <Link to="/static-class" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Static Class</h3>
            <p className="text-gray-600">Check the schedule for static classes.</p>
          </Link>
          <Link to="/dynamic-class" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Dynamic Class</h3>
            <p className="text-gray-600">Add and manage dynamic attendance records.</p>
          </Link>
          <Link to="/online-class" className="block bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Online Class</h3>
            <p className="text-gray-600">Join or generate QR for online sessions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;