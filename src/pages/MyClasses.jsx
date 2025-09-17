import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyClasses = ({ role }) => {
  const navigate = useNavigate();

  const dailyLectures = [
    { subject: "Mathematics", time: "9:00 AM - 10:30 AM" },
    { subject: "Science", time: "11:00 AM - 12:30 PM" },
    { subject: "English", time: "2:00 PM - 3:30 PM" },
    { subject: "History", time: "4:00 PM - 5:30 PM" },
    { subject: "Geography", time: "6:00 PM - 7:30 PM" },
  ];

  const weeklySchedule = [
    { day: "Monday", lectures: ["Mathematics", "Science"] },
    { day: "Tuesday", lectures: ["English", "History"] },
    { day: "Wednesday", lectures: ["Geography", "Mathematics"] },
    { day: "Thursday", lectures: ["Science", "English"] },
    { day: "Friday", lectures: ["History", "Geography"] },
  ];

  useEffect(() => {
    if (!role || role !== "student") {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role || role !== "student") return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          My Classes
        </h2>

        {/* Today's Lectures */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-lg p-6 mb-8 animate-slide-up">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Today's Lectures
          </h3>

          <div className="overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Subject</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Time</th>
                </tr>
              </thead>
              <tbody>
                {dailyLectures.map((lec, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {lec.subject}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {lec.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-lg p-6 animate-slide-up">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Weekly Schedule
          </h3>

          <div className="overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Day</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Lectures</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((day, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {day.day}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {day.lectures.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
