import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Scanner } from '@yudiel/react-qr-scanner';
import Login from './Login';

const Home = ({ role, setRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('No result');
  const [error, setError] = useState(null);
  const [attendance] = useState([{ date: '2025-09-14', status: 'Present' }, { date: '2025-09-13', status: 'Absent' }]);
  const [allAttendance] = useState([{ user: 'John Doe', date: '2025-09-14', status: 'Present' }, { user: 'Jane Smith', date: '2025-09-14', status: 'Absent' }]);
  const [schedule] = useState([{ day: 'Monday', time: '10:00 AM - 11:30 AM', status: 'Present' }, { day: 'Wednesday', time: '2:00 PM - 3:30 PM', status: 'Absent' }]);
  const [sessionLink] = useState('https://meet.example.com/session-123');
  const [attendanceList, setAttendanceList] = useState([]);
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('Present');
  const [activeTab, setActiveTab] = useState('attendance');
  const [classMode, setClassMode] = useState(null); // Admin class mode selection: 'static', 'dynamic', 'online'

  useEffect(() => {
    if (role === 'admin') {
      const adminSection = document.getElementById('admin');
      if (adminSection) {
        adminSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (role === 'student') {
      const scannerSection = document.getElementById('scanner');
      if (scannerSection) {
        scannerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [role]);

  useEffect(() => {
    if (classMode && role === 'admin') {
      const sectionId = `${classMode}-class`;
      const classSection = document.getElementById(sectionId);
      if (classSection) {
        classSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [classMode, role]);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', { name, email, password });
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-20">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Attendance App</h1>
          <p className="text-xl mb-8 animate-fade-in delay-200">Streamline Attendance Management</p>
          <h2 className="text-3xl font-semibold mb-4">Attendance for All Classes.</h2>
          <p className="text-lg mb-2">On Any Device, Anytime.</p>
          <div className="space-y-4 text-center">
            <p className="text-2xl font-medium">Track attendance 10X faster, detect absences instantly.</p>
            <p className="text-2xl font-medium">Reduce manual efforts by over 60%</p>
            <p className="text-2xl font-medium">Track attendance 10X faster, detect absences instantly.</p>
            <p className="text-2xl font-medium">Reduce manual efforts by over 60%</p>
          </div>
        </section>

        {/* Login Section */}
        <section id="login" className="bg-white p-6 rounded-xl shadow-2xl">
          <Login setRole={setRole} />
        </section>

        {/* Sign Up Section */}
        <section id="signup" className="bg-white p-6 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Sign Up</h2>
          <form onSubmit={handleSignupSubmit} className="space-y-6">
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

        {/* Admin Section (Only for Admin) */}
        {role === 'admin' && (
          <section id="admin" className="bg-white p-6 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Admin Panel</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-700 mb-4">Select Class Mode to Conduct</h3>
              <select
                value={classMode}
                onChange={(e) => setClassMode(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              >
                <option value={null}>Select Mode</option>
                <option value="online">Online Class</option>
                <option value="static">Static Class</option>
                <option value="dynamic">Dynamic Class</option>
              </select>
            </div>
            <div className="flex border-b mb-6">
              <button
                className={`px-4 py-2 font-semibold ${activeTab === 'attendance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('attendance')}
              >
                Attendance
              </button>
              <button
                className={`px-4 py-2 font-semibold ${activeTab === 'qr' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('qr')}
              >
                QR Generator
              </button>
            </div>
            {activeTab === 'attendance' && (
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
            )}
            {activeTab === 'qr' && (
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
            )}
          </section>
        )}

        {/* Online Class Section (Only for Admin if selected) */}
        {role === 'admin' && classMode === 'online' && (
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
        )}

        {/* Static Class Section (Only for Admin if selected) */}
        {role === 'admin' && classMode === 'static' && (
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
        )}

        {/* Dynamic Class Section (Only for Admin if selected) */}
        {role === 'admin' && classMode === 'dynamic' && (
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
        )}

        {/* Student Face Scan Section (Only for Student) */}
        {role === 'student' && (
          <section id="scanner" className="bg-white p-6 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Scan Your Face for Attendance</h2>
            <div className="border-4 border-blue-500 rounded-xl overflow-hidden relative">
              <Scanner
                onScan={handleScan}
                onError={handleError}
                constraints={{ video: { facingMode: 'user' } }}
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
        )}

        {/* Remaining Text Section */}
        <section id="remaining-text" className="py-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Attendance App?</h2>
          <p className="text-lg text-gray-600 mb-4">Our app simplifies attendance tracking for students and admins alike. With features like face scanning for students and class mode selection for admins, it's designed for efficiency.</p>
          <p className="text-lg text-gray-600 mb-4">Experience seamless management on any device, anytime. Join thousands of users who have reduced manual efforts by over 60%.</p>
          <p className="text-lg text-gray-600">As of 04:27 PM IST on Sunday, September 14, 2025, we're committed to providing the best tools for education.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;