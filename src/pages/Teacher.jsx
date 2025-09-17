import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

const Teacher = ({ role }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [qrValue, setQrValue] = useState('');
  const [confirming, setConfirming] = useState(false);

  // Sample data for 10 students
  const studentsAttendance = [
    { name: 'Student 1', conducted: 20, attended: 18, missed: 2, percentage: 90 },
    { name: 'Student 2', conducted: 20, attended: 17, missed: 3, percentage: 85 },
    { name: 'Student 3', conducted: 20, attended: 19, missed: 1, percentage: 95 },
    { name: 'Student 4', conducted: 20, attended: 16, missed: 4, percentage: 80 },
    { name: 'Student 5', conducted: 20, attended: 20, missed: 0, percentage: 100 },
    { name: 'Student 6', conducted: 20, attended: 15, missed: 5, percentage: 75 },
    { name: 'Student 7', conducted: 20, attended: 18, missed: 2, percentage: 90 },
    { name: 'Student 8', conducted: 20, attended: 14, missed: 6, percentage: 70 },
    { name: 'Student 9', conducted: 20, attended: 19, missed: 1, percentage: 95 },
    { name: 'Student 10', conducted: 20, attended: 17, missed: 3, percentage: 85 },
  ];

  useEffect(() => {
    if (!role || role !== 'teacher') navigate('/');
  }, [role, navigate]);

  if (!role || role !== 'teacher') return null;

  const handleClassSelection = (option) => setSelectedOption(option);
  const handleConfirmSelection = () => { if (selectedOption) setConfirming(true); };
  const handleConfirmQR = () => {
    if (confirming) {
      setQrValue(`teacher-session-${selectedOption}-${Date.now()}`);
      setConfirming(false);
    }
  };
  const handleCancel = () => { setSelectedOption(null); setConfirming(false); setQrValue(''); };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Teacher Panel */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-lg transition-all duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Teacher Panel</h2>

          {/* Class Selection */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">Take Classes</h3>
            <div className="flex flex-wrap gap-4">
              {!selectedOption && ['Online', 'Static', 'Dynamic'].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleClassSelection(opt.toLowerCase())}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
                >
                  {opt} Class
                </button>
              ))}
            </div>

            {/* Confirm Selection */}
            {selectedOption && !confirming && !qrValue && (
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">Confirm {selectedOption} Class?</p>
                <button
                  onClick={handleConfirmSelection}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200 mr-2"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Confirm QR */}
            {confirming && !qrValue && (
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                  Are you sure to generate QR for {selectedOption} Class?
                </p>
                <button
                  onClick={handleConfirmQR}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200 mr-2"
                >
                  Yes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-200"
                >
                  No
                </button>
              </div>
            )}

            {/* QR Display */}
            {qrValue && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">
                  QR Code for {selectedOption} Class
                </h3>
                <QRCode value={qrValue} size={250} className="mx-auto mb-4" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">Session ID: {qrValue}</p>
              </div>
            )}
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-6">Manage your classes and attendance here.</p>
        </section>

        {/* Student Attendance Table */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">Student Attendance for Mathematics</h3>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse text-gray-700 dark:text-gray-300">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600">Student Name</th>
                  <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600">Conducted</th>
                  <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600">Attended</th>
                  <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600">Missed</th>
                  <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {studentsAttendance.map((student, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <td className="p-3 border-b border-gray-300 dark:border-gray-600">{student.name}</td>
                    <td className="p-3 border-b border-gray-300 dark:border-gray-600">{student.conducted}</td>
                    <td className="p-3 border-b border-gray-300 dark:border-gray-600">{student.attended}</td>
                    <td className="p-3 border-b border-gray-300 dark:border-gray-600">{student.missed}</td>
                    <td className="p-3 border-b border-gray-300 dark:border-gray-600">{student.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teacher;
