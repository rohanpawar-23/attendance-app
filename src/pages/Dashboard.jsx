import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ role }) => {
  const navigate = useNavigate();
  const [userData] = useState({
    name: 'Rohan',
    institute: 'GECA',
    username: 'rohan123',
    branch: 'Computer Science',
    year: '2nd Year',
    enrollmentNumber: '12345678'
  });

  const [currentTime] = useState(new Date());
  const [greeting] = useState('Good Night'); 
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!role || role !== 'student') {
      navigate('/');
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [role, navigate]);

  const sections = useRef([]);
  useEffect(() => {
    const observers = sections.current.map((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-slide-up');
              if (entry.target.querySelector('.progress-bar')) {
                entry.target.querySelector('.progress-bar').classList.add('animate-progress-fill');
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  if (!role || role !== 'student') return null;

  const liveClasses = [
    { subject: 'Mathematics', year: '1st Year' },
    { subject: 'Science', year: '2nd Year' },
    { subject: 'English', year: '3rd Year' }
  ];

  const notifications = [
    { id: 1, message: 'Upcoming class: Mathematics at 2:00 PM', time: '1 hr ago' },
    { id: 2, message: 'Attendance below 75% warning', time: '2 days ago' }
  ];

  const engagementMetrics = {
    quizzes: 85,
    participation: 90
  };

  const progressTracker = {
    attendanceGoal: 90,
    currentAttendance: 88,
    badges: ['Regular Attendee']
  };

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 transition-colors duration-300 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Greeting Section */}
        <section ref={(el) => (sections.current[0] = el)} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 animate-slide-up">
          <h2 className="text-4xl font-extrabold dark:text-gray-200 mb-3 drop-shadow-sm md:text-5xl">{greeting}, {userData.name}!</h2>
          <p className="text-xl dark:text-gray-300 md:text-2xl">
            Welcome back to your dashboard. Current time: {currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true })}
          </p>
        </section>

        {/* Live Classes */}
        <section ref={(el) => (sections.current[1] = el)} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 animate-slide-up">
          <h3 className="text-3xl font-extrabold dark:text-gray-200 mb-6 drop-shadow-sm md:text-4xl">Live Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveClasses.map((cls, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/50"
              >
                <h4 className="text-xl font-semibold dark:text-gray-300">{cls.subject}</h4>
                <p className="text-base dark:text-gray-400">{cls.year}</p>
                <button className="mt-4 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
                  Join Class
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section ref={(el) => (sections.current[2] = el)} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 animate-slide-up">
          <h3 className="text-3xl font-extrabold dark:text-gray-200 mb-6 drop-shadow-sm md:text-4xl">Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/50"
              >
                <p className="text-base dark:text-gray-300">{notification.message}</p>
                <p className="text-sm dark:text-gray-400">{notification.time}</p>
                <button className="mt-2 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Metrics */}
        <section ref={(el) => (sections.current[3] = el)} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 animate-slide-up">
          <h3 className="text-3xl font-extrabold dark:text-gray-200 mb-6 drop-shadow-sm md:text-4xl">Engagement Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/50">
              <h4 className="text-xl font-semibold dark:text-gray-300">Quiz Score</h4>
              <p className="text-2xl text-teal-500">{engagementMetrics.quizzes}%</p>
              <button className="mt-4 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
                View Details
              </button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/50">
              <h4 className="text-xl font-semibold dark:text-gray-300">Participation</h4>
              <p className="text-2xl text-teal-500">{engagementMetrics.participation}%</p>
              <button className="mt-4 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section ref={(el) => (sections.current[4] = el)} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg animate-slide-up">
          <h3 className="text-3xl font-extrabold dark:text-gray-200 mb-6 drop-shadow-sm md:text-4xl">Progress Tracker</h3>
          <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/50">
            <p className="text-lg dark:text-gray-300">Attendance Goal: {progressTracker.attendanceGoal}%</p>
            <p className="text-lg dark:text-gray-300">Current Attendance: {progressTracker.currentAttendance}%</p>
            <p className="text-lg dark:text-gray-300">Badges: {progressTracker.badges.join(', ')}</p>
            <div className="w-full bg-slate-200 dark:bg-gray-600 rounded-full h-3 mt-4">
              <div
                className="bg-teal-500 h-3 rounded-full progress-bar"
                style={{ width: '0%' }}
              ></div>
            </div>
            <button className="mt-4 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
              View Progress
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 mt-16 p-4 text-center text-gray-700 dark:text-gray-300">
        <p>&copy; 2025 GECA Attendance App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
