import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import QRScanner from './pages/Scanner';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import StaticClass from './pages/StaticClass';
import OnlineClass from './pages/OnlineClass';
import DynamicClass from './pages/DynamicClass';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* New homepage as default */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/scanner" element={<QRScanner />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/static-class" element={<StaticClass />} />
            <Route path="/online-class" element={<OnlineClass />} />
            <Route path="/dynamic-class" element={<DynamicClass />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;