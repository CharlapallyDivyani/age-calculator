document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const calculateBtn = document.getElementById('calculate-btn');
    
    // Check your HTML: Make sure these IDs match the BOTTOM cards in your UI!
    const yearsDisplay = document.getElementById('years');
    const monthsDisplay = document.getElementById('months');
    const daysDisplay = document.getElementById('days');
    const errorTxt = document.getElementById('error-txt');

    // Setup the max date constraint on load
    const initDate = new Date();
    const yyyy = initDate.getFullYear();
    const mm = String(initDate.getMonth() + 1).padStart(2, '0');
    const dd = String(initDate.getDate()).padStart(2, '0');
    dobInput.max = `${yyyy}-${mm}-${dd}`;

    calculateBtn.addEventListener('click', () => {
        const dobValue = dobInput.value;

        if (!dobValue) {
            showError("Please select a valid date of birth.");
            return;
        }

        // FIX 1: Generate a fresh 'today' on EVERY click
        const today = new Date();
        const dob = new Date(dobValue);

        // Basic structural validation
        if (dob > today) {
            showError("Date of birth cannot be in the future!");
            resetResults();
            return;
        }

        errorTxt.style.display = "none"; // Hide errors if valid

        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();

        const birthYear = dob.getFullYear();
        const birthMonth = dob.getMonth();
        const birthDate = dob.getDate();

        let calculatedYears = currentYear - birthYear;
        let calculatedMonths = currentMonth - birthMonth;
        let calculatedDays = currentDate - birthDate;

        // Handle negative days (borrow from previous month)
        if (calculatedDays < 0) {
            calculatedMonths--;
            const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
            calculatedDays += daysInPrevMonth;
        }

        // Handle negative months (borrow from previous year)
        if (calculatedMonths < 0) {
            calculatedYears--;
            calculatedMonths += 12;
        }

        // Update UI with calculated values
        displayResults(calculatedYears, calculatedMonths, calculatedDays);

        // Calculate total days lived
        const totalTimeDiff = today.getTime() - dob.getTime();
        const totalDaysLived = Math.floor(totalTimeDiff / (1000 * 60 * 60 * 24));

        // FIX 2: Create normalized dates (normalized to midnight) for perfect day countdown tracking
        const todayMidnight = new Date(currentYear, currentMonth, currentDate);
        let nextBday = new Date(currentYear, birthMonth, birthDate);

        if (nextBday < todayMidnight) {
            nextBday.setFullYear(currentYear + 1);
        }

        const timeToNextBday = nextBday.getTime() - todayMidnight.getTime();
        const daysToNextBday = Math.round(timeToNextBday / (1000 * 60 * 60 * 24));

        // Display the unique stats
        const extraStats = document.getElementById('extra-stats');
        if (extraStats) extraStats.style.display = "block";
        
        const totalDaysEl = document.getElementById('total-days');
        if (totalDaysEl) totalDaysEl.textContent = totalDaysLived.toLocaleString();

        const countdownEl = document.getElementById('next-birthday-countdown');
        if (countdownEl) {
            if (daysToNextBday === 365 || daysToNextBday === 0) {
                countdownEl.textContent = "🎉 Happy Birthday! It's Today! 🎉";
            } else {
                countdownEl.textContent = `${daysToNextBday} Days`;
            }
        }
    });

    function displayResults(y, m, d) {
        yearsDisplay.textContent = y;
        monthsDisplay.textContent = m;
        daysDisplay.textContent = d;
    }

    function resetResults() {
        yearsDisplay.textContent = "-";
        monthsDisplay.textContent = "-";
        daysDisplay.textContent = "-";
    }

    function showError(message) {
        errorTxt.textContent = message;
        errorTxt.style.display = "block";
    }
});