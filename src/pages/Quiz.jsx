
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import "../css/Quiz.css";

// Choose 10 random questions from the 25
function getRandomQuestions() {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 10);
}

export default function Quiz() {
  const [quizQuestions] = useState(getRandomQuestions);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  const question = quizQuestions[current];

  function nextQuestion() {
    if (selected === null) return;

    const newScore =
      score + (selected === question.answer ? 1 : 0);

    if (current === quizQuestions.length - 1) {
      navigate("/results", {
        state: {
          score: newScore,
          total: quizQuestions.length,
        },
      });
    } else {
      setScore(newScore);
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  return (
    <main className="quiz" dir="rtl">
      <h1>اختبار رخصة قيادة السيارة</h1>

      <p>
        السؤال {current + 1} من {quizQuestions.length}
      </p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${((current + 1) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>

      <h2>{question.question}</h2>

      {question.image && (
        <img src={question.image} alt="إشارة مرور" />
      )}

      {question.options.map((option, index) => (
        <label
          key={index}
          className={`option ${selected === index ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="answer"
            checked={selected === index}
            onChange={() => setSelected(index)}
          />
          {" "}{option}
        </label>
      ))}

      <button
        className="next-btn"
        onClick={nextQuestion}
        disabled={selected === null}
      >
        {current === quizQuestions.length - 1
          ? "عرض النتيجة"
          : "السؤال التالي"}
      </button>
    </main>
  );
}
