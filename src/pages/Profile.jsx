import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ role }) => {
  const navigate = useNavigate();
  const userData = {
    name: "Rohan",
    institute: "GECA",
    username: "rohan123",
    branch: "Computer Science",
    year: "2nd Year",
    enrollmentNumber: "12345678",
  };

  useEffect(() => {
    if (!role || role !== "student") navigate("/");
  }, [role, navigate]);

  if (!role || role !== "student") return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-lg w-full px-6 py-10">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            My Profile
          </h2>

          <div className="space-y-5">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
                <div className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition duration-200 shadow-sm">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
