import { useState } from 'react';

const StaticClass = () => {
  const [schedule] = useState([
    { day: 'Monday', time: '10:00 AM - 11:30 AM', status: 'Present' },
    { day: 'Wednesday', time: '2:00 PM - 3:30 PM', status: 'Absent' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Static Class Schedule</h2>
        <div className="bg-white p-6 rounded-lg shadow-xl">
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
        </div>
      </div>
    </div>
  );
};

export default StaticClass;