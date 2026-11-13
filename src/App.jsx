
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-content">
          <NavLink to="/" className="brand">
            <span>🚗</span>
            <span>Majd Driving School</span>
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
