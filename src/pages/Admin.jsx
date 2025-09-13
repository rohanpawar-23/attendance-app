import { useState } from 'react';
import QRCode from 'react-qr-code';

const Admin = () => {
  const [allAttendance] = useState([
    { user: 'John Doe', date: '2025-09-12', status: 'Present' },
    { user: 'Jane Smith', date: '2025-09-12', status: 'Absent' },
  ]);
  const [activeTab, setActiveTab] = useState('attendance');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin Panel</h2>
        <div className="bg-white p-6 rounded-lg shadow-xl">
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
            <div className="text-center">
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
        </div>
      </div>
    </div>
  );
};

export default Admin;