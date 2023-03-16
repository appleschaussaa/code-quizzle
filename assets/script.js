//button variables
var answersA = document.getElementById("buttonA");
var answersB = document.getElementById("buttonB");
var answersC = document.getElementById("buttonC");
var answersD = document.getElementById("buttonD");
var mainStart = document.querySelector(".start-button");
var buttonAnswers = document.querySelectorAll(".buttonAnswers");
// var highscoreInitials = document.getElementsByClassName("initials");
var submitInitials = document.querySelector(".button-initials");
var quizRestart = document.querySelector(".restart-quiz");
var clearHighscores = document.querySelector(".clear-highscores");


//other variables
var quizOver;
var timer;
var timeLeft;
var startQuestion = 0;
// var currentQuestion = document.querySelector(".questionArea");
var countdownInsert = document.querySelector(".countdown-timer");
var currentQuestion = document.getElementById("currentQuestions");
var mainScreen = document.querySelector(".homepageQuiz");
var quizSection = document.querySelector(".quiz-section");
var highscoreInitials = document.querySelector(".highscore-input");
var highscoreScreen = document.querySelector(".highscore-screen");
var header = document.querySelector(".header");

// function currentQuestion() {
var questions = [
    { 
        question: "Commonly used data types DO NOT include: ",
        answerOne: "strings",
        answerTwo: "booleans",
        answerThree: "alerts",
        answerFour: "numbers",
        // correct: questions.answerThree
    },
    { 
        question: "The condition in an if/else statement is enclosed within ___. ",
        answerOne: "quotes",
        answerTwo: "curly brackets",
        answerThree: "parenthesis",
        answerFour: "square brackets",
        // correct: answerTwo
    },
    { 
        question: "Arrays in JavaScript can be used to store ___. ",
        answerOne: "numbers and strings",
        answerTwo: "other arrays",
        answerThree: "booleans",
        answerFour: "all of the above",
        // correct: answerFour
    },
    { 
        question: "String values must be enclosed within ___ when being assigned to variables. ",
        answerOne: "commas",
        answerTwo: "curly brackets",
        answerThree: "quotes",
        answerFour: "parenthesis",
        // correct: answerThree
    },
    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answerOne: "Javascript",
        answerTwo: "terminal/bash",
        answerThree: "for loops",
        answerFour: "console.log",
        // correct: answerFour
    }
];

var finalQuestion = questions.length -1;

//     var correctAnswer1 = answerOne[3];
//     var correctAnswer2 = answerTwo[1];
//     var correctAnswer3 = answerThree[3];
//     var correctAnswer4 = answerFour[2];
//     var correctAnswer5 = answerFive[3]
// // };

// function correctAnswer () {
//     if (questionInsert[0].clickevent = correctAnswer1) {
//         console.log("correct")
//     } else {
//         console.log("incorrect")
//     };
//     if (questionInsert[1].clickevent = correctAnswer2) {
//         console.log("correct")
//     } else {
//         console.log("incorrect")
//     };
//     if (questionInsert[2].clickevent = correctAnswer3) {
//         console.log("correct")
//     } else {
//         console.log("incorrect")
//     };
//     if (questionInsert[3].clickevent = correctAnswer4) {
//         console.log("correct")
//     } else {
//         console.log("incorrect")
//     };
//     if (questionInsert[4].clickevent = correctAnswer5) {
//         console.log("correct")
//     } else {
//         console.log("incorrect")
//     };
// };

mainStart.addEventListener("click", startQuiz);

function startQuiz() {
    timeLeft = 75
    mainScreen.classList.add("hide");
    quizSection.classList.remove("hide");
    displayQuiz();
    countdownTimer();
};

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

function displayQuiz() {
    var questionDisplay = questions[startQuestion];
    currentQuestion.innerHTML = "<h1>" + questionDisplay.question + "<h1>";
    answersA.innerHTML = "1. " + questionDisplay.answerOne;
    answersB.innerHTML = "2. " +questionDisplay.answerTwo;
    answersC.innerHTML = "3. " +questionDisplay.answerThree;
    answersD.innerHTML = "4. " +questionDisplay.answerFour;
    buttonAnswers.forEach((btn) => {
        btn.addEventListener("click", nextQuestion);
    });
};

// buttonAnswers.forEach((btn) => {
//     btn.addEventListener("click", nextQuestion);
// });

function nextQuestion() {
    if (startQuestion < finalQuestion) {
        startQuestion++;
        return displayQuiz(startQuestion);
    } else {
        quizSection.classList.add("hide");
        // highscoreInitials.classList.remove("hide");
        return highScoreInput()
    }
    // return displayQuiz(startQuestion);
}

function highScoreInput() {
    timer = clearInterval(timeLeft = 0)
    header.classList.add("hide");
    highscoreInitials.classList.remove("hide");
    submitInitials.addEventListener("click", displayHighscore);
};

// submitInitials.addEventListener("click", displayHighscore);

function displayHighscore() {
    highscoreInitials.classList.add("hide");
    highscoreScreen.classList.remove("hide");
    clearHighscores.addEventListener("click", eraseHighscore);
    quizRestart.addEventListener("click", restartQuiz);
};

function eraseHighscore() {

};

function restartQuiz() {
    // highscoreScreen.classList.add("hide");
    // mainScreen.classList.remove("hide");
    // header.classList.remove("hide");
    // startQuestion = 0;
    // timer = 0;
    location.reload();
}