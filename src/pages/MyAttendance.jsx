import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const MyAttendance = ({ role }) => {
  const navigate = useNavigate();

  const subjects = [
    { name: "Mathematics", conducted: 20, attended: 18, missed: 2, percentage: 90 },
    { name: "Science", conducted: 22, attended: 20, missed: 2, percentage: 91 },
    { name: "English", conducted: 18, attended: 15, missed: 3, percentage: 83 },
    { name: "History", conducted: 25, attended: 22, missed: 3, percentage: 88 },
    { name: "Geography", conducted: 19, attended: 17, missed: 2, percentage: 89 },
  ];

  const weeklyAttendance = [
    { week: "Week 1", Mathematics: 85, Science: 90, English: 80, History: 85, Geography: 90 },
    { week: "Week 2", Mathematics: 90, Science: 85, English: 85, History: 90, Geography: 85 },
    { week: "Week 3", Mathematics: 95, Science: 92, English: 88, History: 92, Geography: 95 },
  ];

  useEffect(() => {
    if (!role || role !== "student") {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role || role !== "student") return null;

  const labels = subjects.map((s) => s.name);
  const datasetColors = ["#14B8A6", "#3B82F6", "#6366F1"];
  const datasets = weeklyAttendance.map((wk, idx) => ({
    label: wk.week,
    data: labels.map((lbl) => wk[lbl] ?? 0),
    backgroundColor: datasetColors[idx % datasetColors.length],
    borderColor: datasetColors[idx % datasetColors.length],
    borderWidth: 1,
  }));
  const chartData = { labels, datasets };
  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100, title: { display: true, text: "Attendance (%)" } },
      x: { title: { display: true, text: "Subjects" } },
    },
    plugins: { legend: { position: "top" } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          My Attendance
        </h2>

        {/* Subject-wise Table */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-lg p-6 mb-8 animate-slide-up">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Subject-wise Attendance
          </h3>

          <div className="overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Subject</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Conducted</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Attended</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Missed</th>
                  <th className="p-3 text-left text-gray-800 dark:text-gray-100">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {sub.name}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {sub.conducted}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {sub.attended}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {sub.missed}
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
                      {sub.percentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Graph */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-lg p-6 animate-slide-up">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Weekly Attendance Graph
          </h3>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MyAttendance;
