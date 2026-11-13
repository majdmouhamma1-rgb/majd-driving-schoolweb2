
import { useLocation, Link } from "react-router-dom";
import "../css/Results.css";

export default function Results() {
  const location = useLocation();

  const score = location.state?.score ?? 0;
  const total = location.state?.total ?? 0;

  const percentage = total > 0
    ? Math.round((score / total) * 100)
    : 0;

  const passed = percentage >= 70;

  return (
    <main className="results" dir="rtl">
      <h1>نتيجة اختبار القيادة</h1>

      {total === 0 ? (
        <>
          <p>لم تقم بإجراء الاختبار بعد.</p>
          <Link to="/quiz" className="restart-btn">
            ابدأ الاختبار
          </Link>
        </>
      ) : (
        <>
          <h2 className={passed ? "pass" : "fail"}>
            {passed ? "مبروك! لقد نجحت" : "للأسف، لم تنجح"}
          </h2>

          <p>علامتك</p>

          <div className="score">
            {score} / {total}
          </div>

          <p>النسبة المئوية: {percentage}%</p>

          <Link to="/quiz" className="restart-btn">
            إعادة الاختبار
          </Link>
        </>
      )}
    </main>
  );
}
