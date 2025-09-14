import { useState } from 'react';

const Login = ({ setRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password, userType });
    setRole(userType); // Set role based on selection
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center tracking-wide">Login</h2>
      <div className="flex mb-6">
        <button
          onClick={() => setUserType('student')}
          className={`w-1/2 p-3 rounded-l-lg ${userType === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold transition duration-200`}
        >
          Student Login
        </button>
        <button
          onClick={() => setUserType('admin')}
          className={`w-1/2 p-3 rounded-r-lg ${userType === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold transition duration-200`}
        >
          Admin Login
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;