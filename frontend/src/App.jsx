import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import ExchangeHistory from './pages/ExchangeHistory.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => (
  <Router>
    <Navbar />
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<ExchangeHistory />} />
      </Routes>
    </div>
  </Router>
);

export default App;
