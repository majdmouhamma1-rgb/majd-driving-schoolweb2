
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <main className="home">
      <div className="home-card">
        <div className="home-icon">🚗</div>

        <h1>Majd Driving School</h1>

        <h2>Driving License Practice Test</h2>

        <p>
          Test your knowledge of traffic signs and
          prepare for your driving license exam.
        </p>

        <div className="home-info">
          <span>📝 10 Questions</span>
          <span>🚦 Traffic Signs</span>
          <span>🏆 Instant Results</span>
        </div>

        <Link to="/quiz" className="start-btn">
          Start Practicing
        </Link>
      </div>
    </main>
  );
}
