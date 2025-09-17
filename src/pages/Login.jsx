import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userType) {
      alert("Please select a role before logging in!");
      return;
    }

    console.log("Login:", { email, password, userType });

    // Save role globally
    setRole(userType);

    // Redirect based on role
    if (userType === "student") navigate("/dashboard");
    else if (userType === "teacher") navigate("/teacher");
    else if (userType === "admin") navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select Role */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Select Role
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            >
              <option value="">Choose your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 
                         bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white p-3 rounded-xl 
                       hover:opacity-90 transition duration-300 font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-700 dark:text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-gray-900 dark:text-gray-200 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
