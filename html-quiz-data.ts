// html-quiz-data.ts
// ទិន្នន័យសម្រាប់សាកល្បងចំណេះដឹង HTML (មេរៀន 7.2 - 15.3)

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;      // ឧទាហរណ៍ "B" ឬ "True" ឬ "False"
  explanation: string;        // ការពន្យល់ខ្លីៗ
  type: "multiple-choice" | "true-false" | "fill-in" | "code-writing";
  lessonSection: string;      // លេខមេរៀន ឧ. "7.2"
}

export const htmlQuizData: QuizQuestion[] = [
  // ==================== ផ្នែកទី 1: Labels and Accessibility (7.2) ====================
  {
    id: 1,
    question: "តើ attribute មួយណាដែលប្រើដើម្បីភ្ជាប់ <label> ទៅកាន់ <input>?",
    options: ["A. connect", "B. for", "C. link", "D. target"],
    correctAnswer: "B",
    explanation: "attribute `for` ភ្ជាប់ label ទៅ input តាមរយៈ `id` ។ ពេលចុចលើ label នោះ input នឹងត្រូវបាន focus ។",
    type: "multiple-choice",
    lessonSection: "7.2"
  },
  {
    id: 2,
    question: "ការប្រើ <label> គឺមិនសំខាន់សម្រាប់ screen reader ទេ។",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "label សំខាន់ណាស់សម្រាប់ screen reader ព្រោះវាប្រាប់អ្នកប្រើពិការភ្នែកថា input នីមួយៗសម្រាប់បញ្ចូលអ្វី។",
    type: "true-false",
    lessonSection: "7.2"
  },

  // ==================== ផ្នែកទី 2: Input Types (7.3) & HTML5 Input Types (12.1) ====================
  {
    id: 3,
    question: "តើ input type មួយណាដែលបង្ហាញក្ដារពណ៌ឲ្យអ្នកប្រើជ្រើសរើស?",
    options: ["A. color", "B. picker", "C. rgb", "D. palette"],
    correctAnswer: "A",
    explanation: "`type='color'` បើក color picker ឲ្យអ្នកប្រើជ្រើសពណ៌តាមចិត្ត។",
    type: "multiple-choice",
    lessonSection: "7.3"
  },
  {
    id: 4,
    question: "ដើម្បីបង្កើតវាលបញ្ចូលលេខតែប៉ុណ្ណោះ យើងប្រើ `type='______'` ។",
    options: ["number", "text", "digit", "integer"],
    correctAnswer: "number",
    explanation: "`type='number'` កំណត់ឲ្យ input ទទួលយកតែលេខប៉ុណ្ណោះ ហើយបង្ហាញប៊ូតុងបង្កើន/បន្ថយតម្លៃ។",
    type: "fill-in",
    lessonSection: "7.3"
  },

  // ==================== ផ្នែកទី 3: Semantic HTML (8.1) ====================
  {
    id: 5,
    question: "តើ tag មួយណាខាងក្រោម **មិនមែន**ជា semantic tag?",
    options: ["A. <article>", "B. <div>", "C. <header>", "D. <footer>"],
    correctAnswer: "B",
    explanation: "`<div>` គឺជា non-semantic tag ព្រោះវាមិនប្រាប់អត្ថន័យអ្វីដល់ browser ឬ developer។ semantic tags ដូចជា `<article>`, `<header>`, `<footer>` ប្រាប់ពីរចនាសម្ព័ន្ធនៃមាតិកា។",
    type: "multiple-choice",
    lessonSection: "8.1"
  },

  // ==================== ផ្នែកទី 4: Embedded Content (9.1 & 9.2) ====================
  {
    id: 6,
    question: "<iframe> អាចប្រើដើម្បីបង្កប់វីដេអូ YouTube បាន។",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "ពិតមែន។ YouTube ផ្ដល់ embed code ដែលប្រើ `<iframe>` ដើម្បីបង្កប់វីដេអូក្នុងទំព័រ web។",
    type: "true-false",
    lessonSection: "9.1"
  },

  // ==================== ផ្នែកទី 5: Data Attributes (10.2) ====================
  {
    id: 7,
    question: "តើ data attribute មួយណាដែលសរសេរត្រឹមត្រូវ?",
    options: ["A. data-userId='123'", "B. data-user-id='123'", "C. data_user_id='123'", "D. user-data-id='123'"],
    correctAnswer: "B",
    explanation: "data attribute ត្រូវតែចាប់ផ្ដើមដោយ `data-` ហើយប្រើ hyphen (-) សម្រាប់ពាក្យផ្សំ។ ឧទាហរណ៍ `data-user-id` ត្រឹមត្រូវ។",
    type: "multiple-choice",
    lessonSection: "10.2"
  },

  // ==================== ផ្នែកទី 6: Form Validation (11.1) ====================
  {
    id: 8,
    question: "តើ attribute មួយណាដែលប្រើដើម្បីកំណត់ថាវាលបញ្ចូល **ត្រូវតែបំពេញ**?",
    options: ["A. must", "B. require", "C. required", "D. mandatory"],
    correctAnswer: "C",
    explanation: "attribute `required` បើដាក់ក្នុង input នោះអ្នកប្រើមិនអាច submit form ទទេបានទេ។",
    type: "multiple-choice",
    lessonSection: "11.1"
  },

  // ==================== ផ្នែកទី 7: HTML5 APIs – localStorage (12.2) ====================
  {
    id: 9,
    question: "ដើម្បីរក្សាទុកទិន្នន័យក្នុង localStorage យើងប្រើ `localStorage.______('key', 'value')` ។",
    options: ["setItem", "getItem", "saveItem", "storeItem"],
    correctAnswer: "setItem",
    explanation: "`localStorage.setItem('key', 'value')` ប្រើសម្រាប់រក្សាទុកទិន្នន័យ។ `getItem` ប្រើសម្រាប់អាន។",
    type: "fill-in",
    lessonSection: "12.2"
  },
  {
    id: 10,
    question: "ទិន្នន័យដែលរក្សាទុកក្នុង localStorage នឹងលុបបាត់នៅពេលបិទ browser tab។",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "localStorage រក្សាទុកទិន្នន័យជាអចិន្ត្រៃយ៍រហូតដល់អ្នកប្រើលុបវាចេញ។ sessionStorage វិញទើបលុបបាត់ពេលបិទ tab។",
    type: "true-false",
    lessonSection: "12.2"
  },

  // ==================== ផ្នែកទី 8: ARIA Attributes (13.1) ====================
  {
    id: 11,
    question: "តើ ARIA attribute មួយណាដែលប្រើដើម្បីផ្ដល់ឈ្មោះដល់ element សម្រាប់ screen reader?",
    options: ["A. aria-name", "B. aria-labelledby", "C. aria-label", "D. ទាំង B និង C ត្រឹមត្រូវ"],
    correctAnswer: "D",
    explanation: "ទាំង `aria-label` និង `aria-labelledby` សុទ្ធតែប្រើដើម្បីដាក់ឈ្មោះឲ្យ element សម្រាប់ screen reader។",
    type: "multiple-choice",
    lessonSection: "13.1"
  },

  // ==================== ផ្នែកទី 9: Internal vs External CSS (14.1) ====================
  {
    id: 12,
    question: "តើត្រូវភ្ជាប់ external CSS file ឈ្មោះ `style.css` ដោយប្រើ tag មួយណា?",
    options: ["A. <css src='style.css'>", "B. <link rel='stylesheet' href='style.css'>", "C. <style src='style.css'>", "D. <script src='style.css'>"],
    correctAnswer: "B",
    explanation: "tag `<link rel='stylesheet' href='style.css'>` គឺជាវិធីត្រឹមត្រូវដើម្បីភ្ជាប់ external CSS ។",
    type: "multiple-choice",
    lessonSection: "14.1"
  },

  // ==================== ផ្នែកទី 10: Viewport & Media Queries (15.1 & 15.2) ====================
  {
    id: 13,
    question: "meta tag សម្រាប់ responsive design គឺ `<meta name='______' content='width=device-width, initial-scale=1.0'>`",
    options: ["viewport", "responsive", "scale", "mobile"],
    correctAnswer: "viewport",
    explanation: "`<meta name='viewport'>` ប្រាប់ browser ពីរបៀបគ្រប់គ្រងទំហំទំព័រនៅលើ mobile។",
    type: "fill-in",
    lessonSection: "15.1"
  },
  {
    id: 14,
    question: "`initial-scale=1.0` មានន័យថាកម្រិតពង្រីកដើមគឺ 100%។",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "ត្រឹមត្រូវ។ `initial-scale=1.0` កំណត់កម្រិត zoom ដើមឲ្យស្មើ 1 (100%) មិនពង្រីក ឬបង្រួមអ្វីបន្ថែម។",
    type: "true-false",
    lessonSection: "15.1"
  },

  // ==================== ផ្នែកទី 11: Form Submission Methods (15.3) ====================
  {
    id: 15,
    question: "តើ method មួយណាដែលបង្ហាញទិន្នន័យក្នុង URL?",
    options: ["A. POST", "B. GET", "C. PUT", "D. DELETE"],
    correctAnswer: "B",
    explanation: "method `GET` បង្ហាញទិន្នន័យក្នុង URL (query string) រីឯ `POST` វិញលាក់ទិន្នន័យក្នុង request body។",
    type: "multiple-choice",
    lessonSection: "15.3"
  }
];

// ==================== Function សម្រាប់ទាញយកសំណួរតាមមេរៀន ====================
export function getQuestionsByLesson(lessonSection: string): QuizQuestion[] {
  return htmlQuizData.filter(q => q.lessonSection === lessonSection);
}

export function getAllLessons(): string[] {
  return [...new Set(htmlQuizData.map(q => q.lessonSection))];
}

export function getTotalQuestions(): number {
  return htmlQuizData.length;
}