
const images = import.meta.glob(
  "../assets/signs/*.png",
  { eager: true, query: "?url", import: "default" }
);

// Get the image of each traffic sign
function sign(number) {
  return images[
    `../assets/signs/sign-${String(number).padStart(3, "0")}.png`
  ];
}

// Driving license questions
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
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(10),
    options: [
      "تقاطع طرق",
      "ممنوع الدخول",
      "طريق زلق",
      "موقف سيارات"
    ],
    answer: 0
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(19),
    options: [
      "مطب",
      "تساقط الصخور",
      "ممر مشاة",
      "طريق سريع"
    ],
    answer: 1
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(21),
    options: [
      "ممنوع الوقوف",
      "موقف سيارات",
      "خطر عام",
      "قف"
    ],
    answer: 2
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(63),
    options: [
      "ممنوع الوقوف",
      "ممنوع الدخول",
      "ممر مشاة",
      "طريق سريع"
    ],
    answer: 0
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(64),
    options: [
      "موقف سيارات",
      "ممنوع التوقف والوقوف",
      "قف",
      "مطب"
    ],
    answer: 1
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(8),
    options: [
      "ممنوع الدخول",
      "طريق زلق",
      "سير باتجاهين",
      "موقف سيارات"
    ],
    answer: 2
  },
  {
    question: "ماذا تعني هذه الإشارة؟",
    image: sign(55),
    options: [
      "ممنوع الدوران للخلف",
      "ممر مشاة",
      "طريق ضيق",
      "قف"
    ],
    answer: 0
  }
];
