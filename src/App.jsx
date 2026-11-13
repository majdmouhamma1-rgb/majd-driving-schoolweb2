
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tests from "./pages/Tests";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/tests">Tests</NavLink> |{" "}
        <NavLink to="/quiz">Quiz</NavLink> |{" "}
        <NavLink to="/results">Results</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
