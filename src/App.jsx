import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import MyClasses from "./pages/MyClasses";
import MyAttendance from "./pages/MyAttendance";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useTheme } from "./context/ThemeContext.jsx";
import { useState, useEffect } from "react";

function App() {
  const { darkMode } = useTheme(); // Dark mode toggle from context

  // Store role of logged-in user
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  // Keep role persistent on refresh
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [role]);

  return (
    <div className={darkMode ? "dark bg-dark-bg text-dark-text" : "bg-gray-50 text-gray-900"}>
      <Router>
        <div className="min-h-screen transition-colors duration-300">
          {/* Navbar is visible across all pages */}
          <Navbar role={role} setRole={setRole} />

          <Routes>
            {/* ----------- PUBLIC ROUTES ----------- */}
            <Route path="/" element={<Home role={role} setRole={setRole} />} />
            <Route path="/signup" element={<Signup role={role} setRole={setRole} />} />
            <Route path="/login" element={<Login role={role} setRole={setRole} />} />

            {/* ----------- DASHBOARD ----------- */}
            <Route
              path="/dashboard"
              element={role ? <Dashboard role={role} /> : <Navigate to="/login" replace />}
            />

            {/* ----------- ADMIN ----------- */}
            <Route
              path="/admin"
              element={role === "admin" ? <Admin role={role} /> : <Navigate to="/" replace />}
            />

            {/* ----------- TEACHER ----------- */}
            <Route
              path="/teacher"
              element={role === "teacher" ? <Teacher role={role} /> : <Navigate to="/" replace />}
            />

            {/* ----------- STUDENT SPECIFIC ROUTES ----------- */}
            <Route
              path="/dashboard/my-classes"
              element={role === "student" ? <MyClasses role={role} /> : <Navigate to="/" replace />}
            />
            <Route
              path="/dashboard/my-attendance"
              element={role === "student" ? <MyAttendance role={role} /> : <Navigate to="/" replace />}
            />

            {/* ----------- PROFILE MANAGEMENT ----------- */}
            <Route
              path="/dashboard/edit-profile"
              element={role ? <EditProfile role={role} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/dashboard/profile"
              element={role ? <Profile role={role} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/dashboard/username"
              element={role ? <Dashboard role={role} /> : <Navigate to="/login" replace />}
            />

            {/* ----------- CATCH-ALL ----------- */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
