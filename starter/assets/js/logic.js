// Buttons
const startButton = document.querySelector('#start');
const nextButton = document.querySelector('#next-button');
const answerButtonElement = document.querySelector('#answer-button');
const submitButton = document.querySelector('#submit');
const goHomeButton = document.querySelector('#home-button');

// Intro and questions
const startScreen = document.querySelector('#start-screen');
const intro = document.querySelector('#start-screen > p');
const questionsContainer = document.querySelector('#questionsContainer');
const questionElement = document.querySelector('#question');

// Score and end screen
const finalScore = document.querySelector('#final-score');
const score = 0;
const endScreen = document.querySelector('#end-screen');
const initialInput = document.querySelector('#initials');

// Correct incorrect messaging
const msgCorrectAnswer = document.querySelector('#correct');
const msgIncorrectAnswer = document.querySelector('#incorrect');
const correctAudio = new Audio("./assets/sfx/correct.wav");
const wrongAudio = new Audio("./assets/sfx/incorrect.wav");


let shuffledQuestions, currentQuestionIndex

// Click to start game
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Start game show first question
function startGame() {
    startButton.classList.add('hide');
    // Shuffle and randomise questions
    shuffledQuestions = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    intro.classList.add('hide');
    questionsContainer.classList.remove('hide');

    setNextQuestion();

}
1
// Set next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    msgCorrectAnswer.classList.add('hide')
    msgIncorrectAnswer.classList.add('hide')
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer-button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)

    });

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}



function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')

    } else {
        endScreen.classList.remove('hide');
        questionsContainer.classList.add('hide');
        questionElement.classList.add('hide');
        answerButtonElement.classList.add('hide');
        msgCorrectAnswer.classList.add('hide')
        msgIncorrectAnswer.classList.add('hide')
    }

}

// Submit button must go back to home page / start quiz 
function submitScore() {
    const savedScores = JSON.parse(localStorage.getItem('finalScore')) || []
    const userInitials = initialInput.value
    console.log(userInitials)
    const userSubmission = {
        finalScore: score,
        initials: userInitials,

    }
    savedScores.push(userSubmission)
    localStorage.setItem('finalScore', JSON.stringify(savedScores))
    location.replace("/starter/highscores.html")

}


function reloadPage() {
    submitButton.addEventListener('click', reload())
    reloadPage()
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        msgCorrectAnswer.classList.remove('hide')

    } else {
        msgIncorrectAnswer.classList.remove('hide')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}





// STILL TO DO 

// Getting correct or incorrect display (with sounds)
// Including a 'next' button on the last question (it skips this for some reason)

// Keep track of user score (correct choices)
// Set and show final score 
// Submit score with with initials 
// Display scores on high scores page 
// 

// Countdown timer - setTimer and setInterval 
// Display final page when timer runs out 
// Deduct 5 seconds each time incorrect answer given

// Questions 
// struggle w




// user types in 
// presses submit 
// initials + score 
// stored to local storage

submitButton.addEventListener('click', submitScore)


// get scores from local storage onto highscores 
// JSON.parse back into array 
// for loop over the array and create high score elements (p elemnts or li for example)
