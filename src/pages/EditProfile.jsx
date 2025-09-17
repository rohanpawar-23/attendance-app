import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ role }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "Rohan",
    institute: "GECA",
    username: "rohan123",
    branch: "Computer Science",
    year: "2nd Year",
    enrollmentNumber: "12345678",
  });
  const [editedData, setEditedData] = useState({ ...userData });
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!role || role !== "student") navigate("/");
  }, [role, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => setConfirming(true);
  const handleConfirm = () => {
    setUserData(editedData);
    navigate("/dashboard");
  };
  const handleCancel = () => {
    setConfirming(false);
    setEditedData({ ...userData });
  };

  if (!role || role !== "student") return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-lg w-full px-6 py-10">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Edit Profile
          </h2>

          <div className="space-y-5">
            {Object.entries(editedData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                             bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                             focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                             transition duration-200"
                />
              </div>
            ))}

            {!confirming ? (
              <button
                onClick={handleSave}
                className="w-full mt-4 bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white p-3 rounded-xl 
                           hover:opacity-90 transition duration-300 font-semibold shadow-md"
              >
                Save Changes
              </button>
            ) : (
              <div className="mt-4 text-center space-y-3">
                <p className="text-lg text-gray-700 dark:text-gray-200">
                  Confirm changes?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleConfirm}
                    className="bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white px-6 py-2 rounded-xl 
                               hover:opacity-90 transition duration-300 font-semibold shadow-md"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200 px-6 py-2 rounded-xl 
                               hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-200 font-semibold"
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProfile;
