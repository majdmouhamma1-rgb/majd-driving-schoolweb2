
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <main className="home" dir="rtl">
      <div className="home-card">
        <div className="home-icon">🚗</div>

        <h1>مدرسة ميشال حنوش لتعليم القيادة</h1>

        <h2>اختبار رخصة القيادة</h2>

        <p>
          اختبر معلوماتك في إشارات المرور
          واستعد لامتحان رخصة القيادة.
        </p>

        <div className="home-info">
          <span>📝 10 أسئلة</span>
          <span>🚦 إشارات المرور</span>
          <span>🏆 نتيجة فورية</span>
        </div>

        <Link to="/quiz" className="start-btn">
          ابدأ الاختبار
        </Link>
      </div>
    </main>
  );
}
