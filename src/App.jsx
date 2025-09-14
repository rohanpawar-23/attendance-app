import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [role, setRole] = useState(null); // null: logged out, 'admin', 'student'

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role={role} setRole={setRole} />
      <main className="container mx-auto p-4">
        <Home role={role} setRole={setRole} />
      </main>
    </div>
  );
}

export default App;