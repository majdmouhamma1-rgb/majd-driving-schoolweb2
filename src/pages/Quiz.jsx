
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  const signImages = import.meta.glob(
  "../assets/signs/*.png",
  { eager: true, query: "?url", import: "default" }
);

  const questions = [
    {
      question: "ماذا تعني الإشارة الضوئية الحمراء؟",
      options: ["التوقف", "المرور", "زيادة السرعة", "الانعطاف"],
      answer: 0,
    },
    {
      question: "ماذا يجب أن تفعل عند ممر المشاة؟",
      options: [
        "زيادة السرعة",
        "إعطاء الأولوية للمشاة",
        "استعمال الزمور",
        "التجاوز",
      ],
      answer: 1,
    },
    {
      question: "ماذا تعني الإشارة الضوئية الخضراء؟",
      options: [
        "التوقف دائماً",
        "الرجوع للخلف",
        "السماح بالمرور إذا كان الطريق آمناً",
        "إطفاء المحرك",
      ],
      answer: 2,
    },
  ];

  export default function Quiz() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    function nextQuestion() {
      if (selected === null) return;

      const newScore =
        score + (selected === questions[current].answer ? 1 : 0);

      if (current + 1 === questions.length) {
        navigate("/results", {
          state: {
            score: newScore,
            total: questions.length,
          },
        });
      } else {
        setScore(newScore);
        setCurrent(current + 1);
        setSelected(null);
      }
    }

    return (
      <main dir="rtl">
        <h1>اختبار رخصة قيادة السيارة</h1>

        <p>
          السؤال {current + 1} من {questions.length}
        </p>

        <h2>{questions[current].question}</h2>

        {questions[current].options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                checked={selected === index}
                onChange={() => setSelected(index)}
              />
              {option}
            </label>
          </div>
        ))}

        <button
          onClick={nextQuestion}
          disabled={selected === null}
        >
          {current + 1 === questions.length
            ? "عرض النتيجة"
            : "السؤال التالي"}
        </button>
      </main>
    );
  }
