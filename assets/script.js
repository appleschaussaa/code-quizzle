//getElementById() method variables
var answersA = document.getElementById("buttonA");
var answersB = document.getElementById("buttonB");
var answersC = document.getElementById("buttonC");
var answersD = document.getElementById("buttonD");
var finalScore = document.getElementById("displayScore");
var currentQuestion = document.getElementById("currentQuestions");
var highscoreList = document.getElementById("highscore-list");
var initialsInput = document.getElementById("initials-input");

// querySelector variables
var countdownInsert = document.querySelector(".countdown-timer");
var mainScreen = document.querySelector(".homepageQuiz");
var quizSection = document.querySelector(".quiz-section");
var highscoreInitials = document.querySelector(".highscore-input");
var highscoreScreen = document.querySelector(".highscore-screen");
var header = document.querySelector(".header");
var mainStart = document.querySelector(".start-button");
var submitInitials = document.querySelector(".button-initials");
var quizRestart = document.querySelector(".restart-quiz");
var clearHighscores = document.querySelector(".clear-highscores");
var addInitials = document.querySelector(".highscore-list");
var buttonAnswers = document.querySelectorAll(".buttonAnswers");

// declared variables
var quizOver;
var timer;
var timeLeft;
var startQuestion = 0;
var score = 0;
var initials = "";
var highscores = [];

// array of question and answers for the quiz
var questions = [
    { 
        question: "Commonly used data types DO NOT include: ",
        answerOne: "strings",
        answerTwo: "booleans",
        answerThree: "alerts",
        answerFour: "numbers",
        correct: "alerts"
    },
    { 
        question: "The condition in an if/else statement is enclosed within ___. ",
        answerOne: "quotes",
        answerTwo: "curly brackets",
        answerThree: "parenthesis",
        answerFour: "square brackets",
        correct: "curly brackets"
    },
    { 
        question: "Arrays in JavaScript can be used to store ___. ",
        answerOne: "numbers and strings",
        answerTwo: "other arrays",
        answerThree: "booleans",
        answerFour: "all of the above",
        correct: "all of the above"
    },
    { 
        question: "String values must be enclosed within ___ when being assigned to variables. ",
        answerOne: "commas",
        answerTwo: "curly brackets",
        answerThree: "quotes",
        answerFour: "parenthesis",
        correct: "quotes"
    },
    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answerOne: "Javascript",
        answerTwo: "terminal/bash",
        answerThree: "for loops",
        answerFour: "console.log",
        correct: "console.log"
    }
];

// defines the final question
var finalQuestion = questions.length -1;

// add a click event to the mainStart button and call the startQuiz function
mainStart.addEventListener("click", startQuiz);

// startQuiz establishes a a time for the counter, adds and removes css hide to dispay the code for displayQuiz and calls the countdownTimer function
function startQuiz() {
    timeLeft = 75
    mainScreen.classList.add("hide");
    quizSection.classList.remove("hide");
    displayQuiz();
    countdownTimer();
};

// countdownTimer takes the establish timeleft and creates a countdown displaying the time left, when time runs out it runs the displayHighscore function
function countdownTimer() {
    timer = setInterval(function() {
        timeLeft--;
        countdownInsert.textContent = "Time:" + timeLeft;
        if (timeLeft === 0) {
            displayHighscore()
        }
    }, 1000)
    return
};

// displayQuiz take the variables used to add the strings from the questions array as 4 answer buttons and a question insert
function displayQuiz() {
    var questionDisplay = questions[startQuestion];
    currentQuestion.innerHTML = "<h1>" + questionDisplay.question + "</h1>";
    answersA.innerHTML = "1. " + questionDisplay.answerOne;
    answersB.innerHTML = "2. " +questionDisplay.answerTwo;
    answersC.innerHTML = "3. " +questionDisplay.answerThree;
    answersD.innerHTML = "4. " +questionDisplay.answerFour;
};

// adds an click event to buttonAnswer that applies to all 4 answer buttons
buttonAnswers.forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

// tries to establish the button clicked to find out which button was pressed
var selectedAnswer = buttonAnswers.textContent;

// nextQuestion will increase the question/answer displayed so long it is not the last question or else it will hide the quizSection and call the saveHighscore function
function nextQuestion(event) {
    if (startQuestion < finalQuestion) {
        startQuestion++;
        answerChoice(event);
    } else {
        quizSection.classList.add("hide");
        saveHighscore();
    }
};

// answerChoice defines the answer selected and he correct answer and compared them. If they equal the score goes up otherwise the time is subtracted. Then call the displayQuiz function to show the next question
function answerChoice(event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswer = questions[startQuestion].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
        console.log("Answer was correct");
        // alert("Correct!");
    } else {
        timeLeft -= 5;
        // alert("Incorrect!");
        console.log("Answer was incorrect");
    }
    displayQuiz();
};

// saveHighscore take the users initials, finds highscores and adds entered initials and score to it while saving it to local storage
function saveHighscore() {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            score: score,
            initials: initials
        };
        highscores.push(newScore);
        highscores.sort(function(a, b) {
            return b.score - a.score;
        });
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    highScoreInput();
};

// highScoreInput brinds up the screen to enter initials, take the input in, stops the countdown of the timer and displays the score the user got
function highScoreInput() {
    highscoreInitials.classList.remove("hide");
    var inputElement = document.getElementById("highScoreInput");
    if (inputElement && inputElement.value) {
        clearInterval(timeLeft = 0)
        header.classList.add("hide");
        finalScore.textContent = "Your final score is " +score;
}};

// This adds a click event to the submitInitials button and calls the displayHighscore function
submitInitials.addEventListener("click", function() {
    displayHighscore();
});

// displayHighscore function displays the highscoreScreen takes highscore and creates a new line for what is entered, establishes a click event to Clearhighscore and restartQuiz calling each function
function displayHighscore() {
    highscoreInitials.classList.add("hide");
    highscoreScreen.classList.remove("hide");
    for (var i = 0; i < highscores.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = highscores[i].initials + " - " + highscores[i].score;
        highscoreList.appendChild(listItem);
    }
    clearHighscores.addEventListener("click", eraseHighscore);
    quizRestart.addEventListener("click", restartQuiz);
};

// the eraseHighscore function does exactly that, grabs the highscore array and replaces it with an empty string
function eraseHighscore() {
    highscores = [];
    highscoreList.innerHTML = ""; 
};

// the restartQuiz function reloads the window reverting it back to the start page without refreshing the localStorage
function restartQuiz() {
    location.reload()
};