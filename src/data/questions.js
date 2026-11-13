
const images = import.meta.glob(
  "../assets/signs/*.png",
  { eager: true, query: "?url", import: "default" }
);

function sign(number) {
  return images[
    `../assets/signs/sign-${String(number).padStart(3, "0")}.png`
  ];
}

export const questions = [
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(25),
    options: [
      "ممنوع الدخول",
      "قف",
      "ممنوع الوقوف",
      "أعط الأفضلية"
    ],
    answer: 1
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(27),
    options: [
      "ممنوع الدخول",
      "موقف سيارات",
      "ممر مشاة",
      "طريق سريع"
    ],
    answer: 0
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(29),
    options: [
      "السرعة الدنيا 30",
      "ممنوع التجاوز",
      "السرعة القصوى 30",
      "نهاية تحديد السرعة"
    ],
    answer: 2
  }
];
