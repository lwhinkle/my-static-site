function createQuiz(){
    const output = [];

    for (var i = 0; i < quizQuestions.length; i++) {
            const answers = [];

            for(letter in quizQuestions[i].answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="question${i}" value="${letter}">
                    ${letter} :
                    ${current.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${current.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }

    quizContainer.innerHTML = output.join('');
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Question 1",
        answers: {
            a: '1',
            b: '2',
            c: '3'
        },
        correct: 'c'
    },
    {
        question: "Question 2",
        answers: {
            a: '1',
            b: '2',
            c: '3'
        },
        correct: 'b'
    }
];

createQuiz();