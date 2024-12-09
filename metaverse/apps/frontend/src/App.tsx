import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Arena from "./Game";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-white font-bold">
              Metaverse
            </Link>
            <div className="space-x-4">
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<Arena />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
