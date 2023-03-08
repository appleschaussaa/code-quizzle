//button variables
var answersA = document.getElementById("#buttonA");
var answersB = document.getElementById("#buttonB");
var answersC = document.getElementById("#buttonC");
var answersD = document.getElementById("#buttonD");
// var mainStart = document.getElementsByClassName("start-button");
var mainStart = document.querySelector(".start-button");
var highscoreInitials = document.getElementsByClassName("initials");

//other variables
var quizOver;
var countdownTimer;
var currentQuestion = document.querySelector(".questionArea");
// var currentQuestion = document.querySelector("#currentQuestions");
var mainScreen = document.querySelector(".homepageQuiz");
var quizSection = document.querySelector(".quiz-section");

//adding click event
// answersA.addEventListener("click");
// answersB.addEventListener("click");
// answersC.addEventListener("click");
// answersD.addEventListener("click");
// highscoreInitials.addEventListener("click");
// mainStart.addEventListener("click", startQuiz);

// begin by trying to give a click event to the start button
// document.getElementsById(".start-button").addEventListener("click", startQuiz);

// when the start button is pressed the start screen was supposed to be hidden
// function changePage() {
//     document.querySelector(".start-screen").style.display = "none";
// };

// mainStart.addEventListener("click", startQuiz);

// function startQuiz() {
//     mainScreen.classList.add("hide");
//     quizSection.classList.remove("hide");
//     displayQuiz;
// };

// console.log(startQuiz);

// function currentQuestion() {
var questionInsert = [
        // question1 = 
        "Commonly used data types DO NOT include: ",
        "The condition in an if/else statement is enclosed within ___. ",

        // { question: "The condition in an if/else statement is enclosed within ___. "},

        // { question: "Arrays in JavaScript can be used to store ___. "},

        // { question: "String values must be enclosed within ___ when being assigned to variables. "},
        // { question: "A very useful tool used during development and debugging for printing content to the debugger is: "}
];

// function startQuiz() {
//     mainScreen.classList.add('hide');
//     quizSection.classList.remove('hide');
//     displayQuiz;
// };

// function displayQuiz() {
//     currentQuestion.innerHTML = questionInsert.question[0];

// };

    var answerOne = [{ text: "strings"}, { text: "booleans"}, { text: "alerts"}, { text: "numbers"}];
    var answerTwo = [{ text: "quotes"}, { text: "curly brckets"}, { text: "parenthesis"}, { text: "square brackets"}];
    var answerThree = [{ text: "numbers and strings"}, { text: "other arrays"}, { text: "booleans"}, { text: "all of the above"}];
    var answerFour = [{ text: "commas"}, { text: "curly brackets"}, { text: "quotes"}, { text: "parenthesis"}];
    var answerFive = [{ text: "Javascript"}, { text: "terminal/bash"}, { text: "for loops"}, { text: "console.log"}]
    var correctAnswer1 = answerOne[3];
    var correctAnswer2 = answerTwo[1];
    var correctAnswer3 = answerThree[3];
    var correctAnswer4 = answerFour[2];
    var correctAnswer5 = answerFive[3]
// };

function correctAnswer () {
    if (questionInsert[0].clickevent = correctAnswer1) {
        console.log("correct")
    } else {
        console.log("incorrect")
    };
    if (questionInsert[1].clickevent = correctAnswer2) {
        console.log("correct")
    } else {
        console.log("incorrect")
    };
    if (questionInsert[2].clickevent = correctAnswer3) {
        console.log("correct")
    } else {
        console.log("incorrect")
    };
    if (questionInsert[3].clickevent = correctAnswer4) {
        console.log("correct")
    } else {
        console.log("incorrect")
    };
    if (questionInsert[4].clickevent = correctAnswer5) {
        console.log("correct")
    } else {
        console.log("incorrect")
    };
};

function nextQuestion() {

};

mainStart.addEventListener("click", startQuiz);

function startQuiz() {
    mainScreen.classList.add("hide");
    quizSection.classList.remove("hide");
    displayQuiz;
};

function displayQuiz() {
        currentQuestion.innerHTML = questionInsert[0];
    
    };

    console.log(displayQuiz());
// function displayQuiz() {
//     currentQuestion.innerHTML += questionInsert[0];
// };

// function startQuiz() {
//     mainScreen.classList.add('hide');
//     quizSection.classList.remove('hide');
//     displayQuiz;
// };

// mainStart.addEventListener("click", startQuiz);

// init();

// function quizOver() {

// };