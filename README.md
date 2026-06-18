# Smart Age Calculator ⏳

A precise, elegant, and fully responsive web application that calculates an individual's exact age based on their birthdate. It breaks down the result beautifully into years, months, and days, offering a smooth user experience.

Built cleanly with vanilla HTML, CSS, and modern JavaScript.

## 🚀 Live Demo
You can view and use the live application here:
👉 [https://charlapallydivyani.github.io/age-calculator/](https://charlapallydivyani.github.io/age-calculator/)

---

## ✨ Features

- **Exact Breakdown:** Displays age meticulously in Years, Months, and Days instead of just a raw number.
- **Future Date Validation:** Built-in validation logic that prevents users from selecting a birthdate in the future.
- **Dynamic Month-Length Handling:** Accurately accounts for leap years and varying days in each month (28, 30, or 31 days) to give pixel-perfect mathematical results.
- **Sleek, Modern UI:** Clean typography, distinct input structures, and smooth micro-animations upon calculation.
- **Fully Responsive:** Adapts flawlessly across small mobile viewports, tablets, and wide desktop screens.

---

## 🛠️ Built With

* **HTML5:** Semantic layouts and native date-picker forms.
* **CSS3:** Custom styling layout systems (Flexbox/Grid), custom fonts, and smooth state transitions.
* **JavaScript (ES6+):** Dynamic date manipulation routines using the standard built-in native `Date` object API.

---

## 📅 How It Works (Behind the Scenes)

The application captures the user input value and compares it dynamically against the active timestamp:
1. Validates that the input date is not greater than today's current date.
2. Calculates the absolute difference in years.
3. Checks if the current month/day has passed the birth month/day to properly adjust the month and day offsets, handling tricky end-of-month rollovers accurately.

---

## 📂 Local Installation & Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/CharlapallyDivyani/age-calculator.git](https://github.com/CharlapallyDivyani/age-calculator.git)
