
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
      <header className="header" dir="rtl">
        <h2>🚗 مدرسة ميشال حنوش</h2>

        <nav>
          <NavLink to="/" end>الرئيسية</NavLink>
          <NavLink to="/quiz">الاختبار</NavLink>
          <NavLink to="/results">النتيجة</NavLink>
          <NavLink to="/about">من نحن</NavLink>
          <NavLink to="/contact">اتصل بنا</NavLink>
        </nav>
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
