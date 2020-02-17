const correctAnswers = ['B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scoreSection = document.querySelector('.result');
const scoreText = document.querySelector('.score');
const maxScore = 3;

form.addEventListener('submit', e => {
    e.preventDefault();
    scoreSection.classList.remove('d-none');

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];
    
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });

    scrollTo(0, 0);
    const ninjaPercent = Math.round((score/maxScore)*100);
    let output = 0;
    const timer = setInterval(() => {
        scoreText.textContent = `${output}%`;
        if (output === ninjaPercent) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
