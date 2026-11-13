
import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("تم إرسال رسالتك بنجاح (تجربة فقط)");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="contact" dir="rtl">
      <h1>اتصل بنا</h1>

      <p>يمكنك التواصل معنا عبر النموذج التالي.</p>

      <form onSubmit={handleSubmit}>
        <label>الاسم</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>الرسالة</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">إرسال الرسالة</button>
      </form>
    </main>
  );
}
