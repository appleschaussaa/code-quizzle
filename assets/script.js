// create button to start quiz
// create a click function for each of the 4 provided answers
// view highscores should lead to highscore page
// create button function for Submit, go back and highscore
// have correct or wrong show up depending on answer

//button variables
var answersA = document.querySelector(".buttonA");
var answersB = document.querySelector(".buttonB");
var answersC = document.querySelector(".buttonC");
var answersD = document.querySelector(".buttonD");
var startScreen = document.querySelector(".start-button");
var highscoreInitials = document.querySelector(".initials");

//other variables
var currentQuestion = document.querySelector(".questions")
var quizOver;
var countdownTimer;

startScreen.addEventListener("click", startQuiz);
answersA.addEventListener("click");
answersB.addEventListener("click");
answersC.addEventListener("click");
answersD.addEventListener("click");
highscoreInitials.addEventListener("click");

document.querySelector(".start-button").addEventListener("click", disappear);

function disappear() {
    document.querySelector(".start-screen").style.display = "none";
}

function currentQuestion() {
    "Commonly used data types DO NOT include: " , "The condition in an if/else statement is enclosed within ___. ", "Arrays in JavaScript can be used to store ___. ", "String values must be enclosed within ___ when being assigned to variables. ", "A very useful tool used during development and debugging for printing content to the debugger is: "
}

function answerOne () {
    "strings", "quotes", "numbers and strings", "commas", "JavaScript"
}
function answerTwo () {
    "booleans", "curly brackets", "other arrays", "curly brackets", "terminal/bash"
}
function answersThree () {
    "alerts", "parentheses", "booleans", "quotes", "for loops"
}
function answersFour () {
    "numbers", "square brackets", "all of the above", "parentheses", "consol.log"
}