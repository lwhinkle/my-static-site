function createQuiz(){
    const output = [];

    quizQuestions.forEach( (current, num) => {
            const answers = [];

            for(letter in current.answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="question${num}" value="${letter}">${letter} : ${current.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${current.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function displayResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let correctAnswers = 0;

    quizQuestions.forEach( (current, num) => {
        const answerContainer = answerContainers[num];
        const selector = `input[name=question${num}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer == current.correct) {
            correctAnswers++;
        }
    } 
    );

    resultsContainer.innerHTML = `${correctAnswers} out of ${quizQuestions.length}`;
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

submitButton.addEventListener('click', displayResults);