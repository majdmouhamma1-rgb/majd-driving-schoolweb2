
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Michel Hanouch Driving School</h1>

      <p>
        Welcome! Practice driving license questions
        and prepare for your driving exam.
      </p>

      <h2>Choose Your Driving Test</h2>

      <div>
        <Link to="/tests">
          <button>Start Practicing</button>
        </Link>
      </div>
    </main>
  );
}
