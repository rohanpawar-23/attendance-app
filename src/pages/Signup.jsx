import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setRole }) => {
  const [formData, setFormData] = useState({
    role: "student",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    institute: "",
    enrollmentNumber: "",
    username: "",
    year: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setRole(formData.role);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-300 py-16 px-4">
      <div className="bg-gray-50 dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Select Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Extra Fields for Student */}
          {formData.role === "student" && (
            <>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Institute Name
                </label>
                <select
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                             bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
                  required
                >
                  <option value="">Select Institute</option>
                  <option value="GECA">GECA</option>
                  <option value="MEM COLLEGE">MEM COLLEGE</option>
                  <option value="DEVGIRI COLLEGE">DEVGIRI COLLEGE</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Enrollment Number
                </label>
                <input
                  type="text"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleChange}
                  placeholder="Enter enrollment number"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                             bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Create Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a unique username"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                             bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Year of Study
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                             bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>
            </>
          )}

          {/* Common Fields */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white p-3 rounded-xl 
                       hover:opacity-90 transition duration-300 font-semibold shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-700 dark:text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-gray-900 dark:text-gray-200 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
