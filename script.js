document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (quizForm) {
        quizForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let score = 0;

            // Grabbing user answers from the quiz form
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');
            const q5 = document.querySelector('input[name="q5"]:checked');

            // Checking answers - these are the correct answers based on your quiz
            if (q1 && q1.value === 'B') score++; // Blue Whale
            if (q2 && q2.value === 'C') score++; // Vatican City
            if (q3 && q3.value === 'B') score++; // Mars
            if (q4 && q4.value === 'B') score++; // 1912
            if (q5 && q5.value === 'A') score++; // Africa

            // Storing score in localStorage
            localStorage.setItem('quizScore', score);

            // Redirect to results page
            window.location.href = 'results.html';
        });
    }

    // Displaying the score on the results page
    if (resultsDisplay) {
        const score = localStorage.getItem('quizScore');
        resultsDisplay.textContent = score !== null 
            ? `You scored ${score} out of 5.` 
            : 'You have not taken the quiz yet.';
    }
});
