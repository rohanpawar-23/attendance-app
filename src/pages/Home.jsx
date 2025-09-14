import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Scanner } from '@yudiel/react-qr-scanner';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('No result');
  const [error, setError] = useState(null);
  const [attendance] = useState([{ date: '2025-09-12', status: 'Present' }, { date: '2025-09-11', status: 'Absent' }]);
  const [allAttendance] = useState([{ user: 'John Doe', date: '2025-09-12', status: 'Present' }, { user: 'Jane Smith', date: '2025-09-12', status: 'Absent' }]);
  const [schedule] = useState([{ day: 'Monday', time: '10:00 AM - 11:30 AM', status: 'Present' }, { day: 'Wednesday', time: '2:00 PM - 3:30 PM', status: 'Absent' }]);
  const [sessionLink] = useState('https://meet.example.com/session-123');
  const [attendanceList, setAttendanceList] = useState([]);
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('Present');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
  };

  const handleScan = (result) => {
    if (result) {
      setResult(result);
      console.log('Scanned:', result);
    }
  };

  const handleError = (err) => {
    setError(err);
    console.error(err);
  };

  const handleAddAttendance = (e) => {
    e.preventDefault();
    setAttendanceList([...attendanceList, { user: userName, status }]);
    setUserName('');
    setStatus('Present');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Welcome Section */}
        <section id="home" className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in">
            Welcome to Attendance App
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Streamline your attendance management with our all-in-one solution. Track sessions, scan QR codes, and manage classes effortlessly. Whether you're a student, teacher, or admin, this app is designed to make attendance easy and accurate as of September 14, 2025.
          </p>
        </section>

        {/* Login Section */}
        <section id="login" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Login</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold"
            >
              Sign In
            </button>
          </form>
        </section>

        {/* Register Section */}
        <section id="register" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Register</h2>
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white p-3 rounded-lg hover:from-green-700 hover:to-green-900 transition duration-300 font-semibold"
            >
              Sign Up
            </button>
          </form>
        </section>

        {/* Scanner Section */}
        <section id="scanner" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Scan Attendance</h2>
          <div className="border-4 border-blue-500 rounded-xl overflow-hidden relative">
            <Scanner
              onScan={handleScan}
              onError={handleError}
              constraints={{ video: { facingMode: 'environment' } }}
              styles={{
                container: { width: '100%' },
                video: { width: '100%', objectFit: 'cover' },
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <div className="w-3/4 h-3/4 border-2 border-green-400 animate-pulse"></div>
            </div>
          </div>
          {error && <p className="text-red-500 mt-4 text-center">{error.message}</p>}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-lg font-medium text-gray-700">Scan Result:</p>
            <p className="text-gray-900 break-all animate-fade-in">{result}</p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Your Attendance Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Total Sessions</p>
              <p className="text-2xl font-bold text-blue-800">2</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Present</p>
              <p className="text-2xl font-bold text-green-800">1</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-yellow-800">1</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-800">50%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Admin Section */}
        <section id="admin" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Admin Panel</h2>
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 font-semibold ${'attendance' === 'attendance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => {}}
            >
              Attendance
            </button>
            <button
              className={`px-4 py-2 font-semibold ${'attendance' === 'qr' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => {}}
            >
              QR Generator
            </button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border text-left">User</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {allAttendance.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="p-3 border">{item.user}</td>
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-6">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Generate Attendance QR</h3>
            <QRCode value="attendance-session-123" size={250} className="mx-auto mb-4" />
            <p className="text-gray-600">Session ID: attendance-session-123</p>
            <button
              className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={() => navigator.clipboard.writeText('attendance-session-123')}
            >
              Copy Session ID
            </button>
          </div>
        </section>

        {/* Static Class Section */}
        <section id="static-class" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">Static Class Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schedule.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 border border-gray-200">
                <p className="text-gray-700 font-medium">Day: {item.day}</p>
                <p className="text-gray-600">Time: {item.time}</p>
                <p className={`mt-2 px-2 inline-block rounded-full text-sm ${item.status === 'Present' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  Status: {item.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Class Section */}
        <section id="dynamic-class" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">Dynamic Class Attendance</h2>
          <form onSubmit={handleAddAttendance} className="space-y-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-lg hover:from-purple-700 hover:to-purple-900 transition duration-300 font-semibold"
            >
              Add Attendance
            </button>
          </form>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border text-left">User</th>
                <th className="p-3 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="p-3 border">{item.user}</td>
                  <td className="p-3 border">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Online Class Section */}
        <section id="online-class" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Online Class</h2>
          <div className="mb-6 bg-gray-200 h-48 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Video Preview Placeholder</p>
          </div>
          <p className="text-lg text-gray-600 mb-4">Join the live session:</p>
          <a
            href={sessionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mb-6 block"
          >
            {sessionLink}
          </a>
          <div className="mb-6">
            <QRCode value={sessionLink} size={200} className="mx-auto" />
            <p className="text-gray-600 mt-2">Scan to join</p>
          </div>
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold"
            onClick={() => window.open(sessionLink, '_blank')}
          >
            Join Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;