import { useState } from 'react';

const DynamicClass = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('Present');

  const handleAddAttendance = (e) => {
    e.preventDefault();
    setAttendanceList([...attendanceList, { user: userName, status }]);
    setUserName('');
    setStatus('Present');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dynamic Class Attendance</h2>
        <div className="bg-white p-6 rounded-lg shadow-xl">
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
                <th className="p-3 border text-left cursor-pointer hover:bg-gray-300">User</th>
                <th className="p-3 border text-left cursor-pointer hover:bg-gray-300">Status</th>
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
        </div>
      </div>
    </div>
  );
};

export default DynamicClass;