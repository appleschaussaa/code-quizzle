//button variables
var answersA = document.getElementById("buttonA");
var answersB = document.getElementById("buttonB");
var answersC = document.getElementById("buttonC");
var answersD = document.getElementById("buttonD");
var mainStart = document.querySelector(".start-button");
var buttonAnswers = document.querySelectorAll(".buttonAnswers");
var highscoreInitials = document.getElementsByClassName("initials");

//other variables
var quizOver;
var countdownTimer;
var startQuestion = 0;
var finalQuestion = 6;
// var currentQuestion = document.querySelector(".questionArea");
var currentQuestion = document.getElementById("currentQuestions");
var mainScreen = document.querySelector(".homepageQuiz");
var quizSection = document.querySelector(".quiz-section");

// function currentQuestion() {
var questions = [
    { 
        question: "Commonly used data types DO NOT include: ",
        answerOne: "1. strings",
        answerTwo: "2. booleans",
        answerThree: "3. alerts",
        answerFour: "4. numbers",
    },
    { 
        question: "The condition in an if/else statement is enclosed within ___. ",
        answerOne: "1. quotes",
        answerTwo: "2. curly brckets",
        answerThree: "3. parenthesis",
        answerFour: "4. square brackets",
    },
    { 
        question: "Arrays in JavaScript can be used to store ___. ",
        answerOne: "1. numbers and strings",
        answerTwo: "2. other arrays",
        answerThree: "3. booleans",
        answerFour: "4. all of the above",
    },
    { 
        question: "String values must be enclosed within ___ when being assigned to variables. ",
        answerOne: "1. commas",
        answerTwo: "2. curly brackets",
        answerThree: "3. quotes",
        answerFour: "4. parenthesis",
    },
    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answerOne: "1. Javascript",
        answerTwo: "2. terminal/bash",
        answerThree: "3. for loops",
        answerFour: "4. console.log",
    }
];

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

// function nextQuestion() {

// };

mainStart.addEventListener("click", startQuiz);
// buttonAnswers.addEventListener("click", nextQuestion);

function startQuiz() {
    mainScreen.classList.add("hide");
    quizSection.classList.remove("hide");
    displayQuiz();
};

function displayQuiz() {
    var questionDisplay = questions[startQuestion]
    currentQuestion.innerHTML = "<h3>" + questionDisplay.question + "<h3>";
    answersA.innerHTML =  questionDisplay.answerOne;
    answersB.innerHTML = questionDisplay.answerTwo;
    answersC.innerHTML = questionDisplay.answerThree;
    answersD.innerHTML = questionDisplay.answerFour;
    // buttonAnswers.addEventListener("click", nextQuestion());
};

buttonAnswers.forEach((btn) => {
    btn.addEventListener("click", nextQuestion);
});

function nextQuestion() {
    if (startQuestion < finalQuestion) {
        startQuestion++;
        // displayQuiz();
    }
    return displayQuiz(startQuestion);
}

// function highScore() {

// };