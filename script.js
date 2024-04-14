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
            answerContainers[num].style.color = 'black';
        }
        else {
            answerContainers[num].style.color = 'red';
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
        question: "What should go in the tags <_> to make a paragraph?",
        answers: {
            a: 'p',
            b: 'body',
            c: 'h1'
        },
        correct: 'a'
    },
    {
        question: "How would you change the type of font with CSS?",
        answers: {
            a: 'font-size',
            b: 'font-family',
            c: 'font-weight'
        },
        correct: 'b'
    },
    {
        question: "What language is used to make interactive content on websites?",
        answers: {
            a: 'Java',
            b: 'C',
            c: 'JavaScript'
        },
        correct: 'c'
    },
    {
        question: "When linking a CSS file to an HTML file, where should it be placed in the HTML?",
        answers: {
            a: 'body',
            b: 'head',
            c: 'outside of body and head'
        },
        correct: 'b'
    }
];

createQuiz();

submitButton.addEventListener('click', displayResults);