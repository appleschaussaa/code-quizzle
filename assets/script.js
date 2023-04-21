//button variables
var answersA = document.getElementById("buttonA");
var answersB = document.getElementById("buttonB");
var answersC = document.getElementById("buttonC");
var answersD = document.getElementById("buttonD");
var finalScore = document.getElementById("displayScore");
var mainStart = document.querySelector(".start-button");
var buttonAnswers = document.querySelectorAll(".buttonAnswers");
var submitInitials = document.querySelector(".button-initials");
var quizRestart = document.querySelector(".restart-quiz");
var clearHighscores = document.querySelector(".clear-highscores");
var addInitials = document.querySelector(".highscore-list");

var quizOver;
var timer;
var timeLeft;
var startQuestion = 0;
var score = 0;
var initials = "";
var highscores = [];
var countdownInsert = document.querySelector(".countdown-timer");
var currentQuestion = document.getElementById("currentQuestions");
var highscoreList = document.getElementById("highscore-list");
var mainScreen = document.querySelector(".homepageQuiz");
var quizSection = document.querySelector(".quiz-section");
var highscoreInitials = document.querySelector(".highscore-input");
var highscoreScreen = document.querySelector(".highscore-screen");
var header = document.querySelector(".header");

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

var finalQuestion = questions.length -1;

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
    currentQuestion.innerHTML = "<h1>" + questionDisplay.question + "</h1>";
    answersA.innerHTML = "1. " + questionDisplay.answerOne;
    answersB.innerHTML = "2. " +questionDisplay.answerTwo;
    answersC.innerHTML = "3. " +questionDisplay.answerThree;
    answersD.innerHTML = "4. " +questionDisplay.answerFour;
    // buttonAnswers.forEach((btn) => {
    //     btn.addEventListener("click", nextQuestion);
    // });
};

buttonAnswers.forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

var selectedAnswer = buttonAnswers.textContent;

function nextQuestion(event) {
    if (startQuestion < finalQuestion) {
        startQuestion++;
        answerChoice(event);
    } else {
        quizSection.classList.add("hide");
        highScoreInput();
    }
};

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

function highScoreInput() {
    highscoreInitials.classList.remove("hide");
    var inputElement = document.getElementById("highScoreInput");
    if (inputElement && inputElement.value) {
        var initials = inputElement.value;
        clearInterval(timeLeft = 0)
        header.classList.add("hide");
        finalScore.textContent = "Your final score is " +score;
    // var initials = document.getElementById("initials").value;
    // highscoreList.innerHTML += "<p> " + initials + " - " + score + " </p>";
        highscores.push({ initials: initials, score: score });
        highscores.sort(function(a, b) {
            return b.score - a.score;
        });
        // submitInitials.addEventListener("click", function() {
        //     displayHighscore();
        // });
    };
};

// function displayHighscore() {
//     // var initials = document.getElementById("initials").value;
//     // highscoreList.innerHTML += "<p> " + initials + " - " + score + " </p>";
//     highscoreInitials.classList.add("hide");
//     highscoreScreen.classList.remove("hide");
//     highscoreList.innerHTML = "";
//     for (var i = 0; i < highscores.length; i++) {
//         var highscore = highscores[i];
//         highscoreList.innerHTML += "<p>" + highscore.initials + " - " + highscore.score + "</p>";
//     }
//     // highscoreList.innerHTML += "<p> " + initials + " - " + score + " </p>";
//     clearHighscores.addEventListener("click", eraseHighscore);
//     quizRestart.addEventListener("click", restartQuiz);
// };

submitInitials.addEventListener("click", function() {
    displayHighscore();
});

function displayHighscore() {
    highscoreInitials.classList.add("hide");
    highscoreScreen.classList.remove("hide");
    highscoreList.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = highscores[i].initials + " - " + highscores[i].score;
        highscoreList.appendChild(listItem);
    }
    clearHighscores.addEventListener("click", eraseHighscore);
    quizRestart.addEventListener("click", restartQuiz);
};

// submitInitials.addEventListener("click", function() {
//     displayHighscore();
// });

function eraseHighscore() {
    highscores = [];
    highscoreList.innerHTML = ""; 
};

function restartQuiz() {
    location.reload()
    // startQuestion = 0;
    // score = 0;
    // highscores = [];
    // highscoreList.innerHTML = "";
    // timeLeft = 75;
    // mainScreen.classList.remove("hide");
    // quizSection.classList.add("hide");
    // highscoreInitials.classList.add("hide");
    // highscoreScreen.classList.add("hide");
    // header.classList.remove("hide");
    // clearInterval(timer);
    // countdownInsert.textContent = "";
};