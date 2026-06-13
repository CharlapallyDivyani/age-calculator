# ⏳ Task 1: Exact Age & Life Stat Calculator

An interactive, responsive web application built as part of my web development internship tasks. This tool calculates an individual's precise chronological age in years, months, and days, while handling complex date constraints like varying month lengths and leap years. It also generates real-time advanced life statistics.

## 🚀 Key Features
- **Precise Age Metrics:** Computes real-time age down to the exact day, utilizing automatic borrowing algorithms for negative day/month differences.
- **Life in Numbers:** Automatically calculates the total cumulative days lived since birth.
- **Birthday Countdown Tracker:** Features a custom live countdown showcasing the exact number of days remaining until the user's next birthday.
- **Smart Date Guardrails:** Implements automated logic to dynamic-lock future calendar dates, preventing users from selecting invalid future dates of birth.

---

## 🛠️ Tech Stack & Architecture
- **HTML5:** Semantic layouts for accessible UI components.
- **CSS3:** Responsive layout cards utilizing clean margins, custom color properties, and dynamic font sizes.
- **JavaScript (ES6):** Vanilla DOM manipulation, dynamic event handling, and custom date object arithmetic.

---

## 📁 Project Structure
```text
task-1/
├── index.html     # Application structure and form layout
├── style.css      # Custom UI properties, variables, and responsive layout styling
├── script.js      # Core age evaluation & countdown logic
└── README.md      # Project documentation
