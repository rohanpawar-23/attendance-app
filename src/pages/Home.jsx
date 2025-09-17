import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-500 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Card Section */}
        <div
          className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg mb-12 
                     transition-all duration-300 hover:-translate-y-1 text-center border border-gray-300 dark:border-gray-700"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            Welcome to <span className="text-teal-600">Smart Attendance</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Manage attendance effortlessly with a modern, intuitive, and powerful dashboard.
            Whether you're a student, teacher, or admin — we've got you covered.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="mt-4 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
          >
            Get Started
          </button>
        </div>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
            Why Choose Our Platform?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Easy to Use",
                desc: "A clean and simple interface for hassle-free attendance management.",
                icon: "📱",
              },
              {
                title: "Role-Based Access",
                desc: "Separate dashboards for students, teachers, and admins.",
                icon: "🔐",
              },
              {
                title: "Real-Time Attendance Tracking",
                desc: "Instantly monitor student attendance and generate reports in real time.",
                icon: "⏱️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           p-8 rounded-2xl shadow-lg text-center 
                           transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 mt-16 p-4 text-center text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} Smart Attendance. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
