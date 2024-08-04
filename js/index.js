document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            text: 'Which of these careers is not tech-related?',
            options: ['Frontend Dev', 'UI/UX', 'Engineering', 'Web3'],
            answer: 'Engineering'
        },
        {
            text: 'One of the following is a design tool:',
            options: ['Figma', 'Ms Word', 'Excel', 'GitHub'],
            answer: 'Figma'
        },
        {
            text: 'A person who writes code is called?',
            options: ['Writer', 'DevOps', 'Developer', 'Instructor'],
            answer: 'Developer'
        },
        {
            text: 'A lady who is into user interface design is called?',
            options: ['Interfacer', 'UI Designer', 'Web Dev', 'Lady Tech'],
            answer: 'UI Designer'
        },
        {
            text: 'Which of these is not a frontend stack?',
            options: ['React', 'Vue', 'Python', 'JavaScript'],
            answer: 'Python'
        },
        {
            text: 'Which of these is not a backend stack?',
            options: ['Python', 'Java', 'Ruby', 'React.js'],
            answer: 'React.js'
        }
    ];

    const submitButton = document.querySelector('.submit');
    const totalScoreElement = document.querySelector('.totalscore');

    submitButton.addEventListener('click', () => {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="answer${index + 1}"]:checked`);
            const feedbackElement = document.querySelector(`#score${index + 1}`);

            if (selectedOption) {
                if (selectedOption.value === question.answer) {
                    feedbackElement.textContent = 'Correct!';
                    score += 10;  // Each question carries 10 marks
                } else {
                    feedbackElement.textContent = 'Incorrect!';
                }
                feedbackElement.classList.remove('hidden');
            }
        });
        totalScoreElement.textContent = `Total Score: ${score}`;
        totalScoreElement.classList.remove('hidden');
    });
});
