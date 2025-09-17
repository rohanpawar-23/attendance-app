import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = ({ role }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!role || role !== 'admin') navigate('/');
  }, [role, navigate]);

  if (!role || role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-6xl w-full px-4 py-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Admin Panel</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">Welcome, Admin! Manage the system here.</p>
        </section>
      </div>
    </div>
  );
};

export default Admin;
