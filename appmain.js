// HERE WE HAVE VARIABLE
const Qcontainer = document.getElementById('Question-container');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElemnt = document.getElementById("question");
const answerElement = document.getElementById("answer-btn");
// console.log(nextButton)

// console.log(Qcontainer);
let suffledQuestion, currentQuestionIndex;


startButton.addEventListener('click', startQuizz);

// HERE WE HAVE NEXTBUTTON FUNCTION
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    SetnextQuestion()
    startQuizz()
})


// HERE WE HAVE START GAME FUNCTION
function startQuizz() {
    console.log('hey');
    startButton.classList.add('hide');
    Qcontainer.classList.remove('hide');
    suffledQuestion = questions.sort(() => Math.random()- .5);
    currentQuestionIndex = 0;
    SetnextQuestion()
    console.log(suffledQuestion);
}


// HERE WE HAVE SETNEXTQUESTION FUNCTION
function SetnextQuestion() {
    resetState();
    showQuestion(suffledQuestion[currentQuestionIndex]);
}

// HERE WE HAVE RESETSTATE FUNCTION
function resetState() {
    nextButton.classList.add('hide');
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);

    }
}

// HERE WE HAVE SHOWQUESTION FUNCTION
function showQuestion(question) {
    questionElemnt.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            // var data = button.dataset
            // console.log(data);
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button);
    })
}



// HERE WE HAVE SELECTANSWER FUNCTION
function selectAnswer(answer) {
    const selectButton = answer.target;
    // console.log(selectButton);
    // correct varibale
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body , correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (suffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide');
        startQuizz();
    }
}


// HERE WE HAVE SET STATUS CLASS FUNCTION
function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong')
    }
}


// HERE WE HAVE CLEAR STATUS CLASS FUNCTION
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')

}



// HERE WE HAVE JSON TEXT
const questions = [

    {

        question : " India is a federal union comprising twenty-nine states and how many union territories ?",
        answer: [
            { text: '6', correct: false},
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '9', correct: false }
        ]
    },

    {

        question : " Which of the following is the capital of Arunachal Pradesh ?",
        answer: [
            { text: 'Itanagar', correct: true},
            { text: 'Dispur', correct: false },
            { text: 'Imphal', correct: false },
            { text: 'Panaji', correct: false }
        ]
    },

    {

        question : "  What is the state flower of Haryana? ?",
        answer: [
            { text: 'Lotus', correct: true},
            { text: 'Rhododendron', correct: false },
            { text: 'Golden Shower', correct: false },
            { text: 'Not declared', correct: false }
        ]
    },


    {
        question: "what is 2 + 2 ?",
        answer: [
            { text: '13', correct: false},
            { text: '22', correct: false },
            { text: '4', correct: true },
            { text: '12', correct: false }
        ]
    },



    {
        question: "what is 3 + 2 ?",
        answer: [
            { text: '5', correct: true },
            { text: '22', correct: false },
            { text: '52', correct: false },
            { text: '202', correct: false }
        ]
    },

    {
        question: "what is 400 - 2 ?",
        answer: [
            { text: '10', correct: false },
            { text: '398', correct: true },
            { text: '20', correct: false },
            { text: '391', correct: false }
        ]
    },
    {
        question: "what is 234 - 2 ?",
        answer: [
            { text: '10', correct: false },
            { text: '231', correct: false },
            { text: '120', correct: false },
            { text: '232', correct: true }
        ]
    },
    {
        question: "what is 00 - 2 ?",
        answer: [
            { text: '10', correct: false },
            { text: '0', correct: true },
            { text: '100', correct: false },
            { text: '190', correct: false }
        ]
    },
    {
        question: "what is 100 - 2 ?",
        answer: [
            { text: '110', correct: false },
            { text: '98', correct: true },
            { text: '00', correct: false },
            { text: '10', correct: false }
        ]
    }
]