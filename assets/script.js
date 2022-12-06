//button variables
var answersA = document.getElementsByClassName("buttonA");
var answersB = document.getElementsByClassName("buttonB");
var answersC = document.getElementsByClassName("buttonC");
var answersD = document.getElementsByClassName("buttonD");
var mainStart = document.getElementsByClassName("start-button");
var highscoreInitials = document.getElementsByClassName("initials");

//other variables
var quizOver;
var countdownTimer;
var currentQuestion = document.querySelector(".questions");
var mainScreen = document.getElementsByClassName("start-screen");

//adding click event
answersA.addEventListener("click");
answersB.addEventListener("click");
answersC.addEventListener("click");
answersD.addEventListener("click");
highscoreInitials.addEventListener("click");
mainStart.addEventListener("click", startQuiz);

// begin by trying to give a click event to the start button
document.querySelector(".start-button").addEventListener("click", changePage);

// when the start button is pressed the start screen was supposed to be hidden
function changePage() {
    document.querySelector(".start-screen").style.display = "none";
};

function startQuiz() {
    mainScreen.classList.add('hide');

};

// create function to display new question and answers on each press until it cycles through or time runs out
// .sort(() => Math.random() is used somewhere in here from previous examples

// create function that randomly chooses questions and the answers that go with them

//create function that answers with correct or incorrect, if incorrect time will be subtracted

// create function that keeps track of corrct and incorrect and adds it to the highscore-input and makes the display for that visible

//create a function to clear all scores and a back button that goes back to the start screen, making it visible again while hiding the highscore screen

// will use to change question within class="questions"
function currentQuestion() {
    var questionInsert = ("Commonly used data types DO NOT include: " , "The condition in an if/else statement is enclosed within ___. ", "Arrays in JavaScript can be used to store ___. ", "String values must be enclosed within ___ when being assigned to variables. ", "A very useful tool used during development and debugging for printing content to the debugger is: ");
}
// will use to insert into each of the answer buttons
function allAnswers () {
    var answerOne = ("strings", "quotes", "numbers and strings", "commas", "JavaScript");
    var answerTwo = ("booleans", "curly brackets", "other arrays", "curly brackets", "terminal/bash");
    var answerThree = ("alerts", "parentheses", "booleans", "quotes", "for loops");
    var answerFour = ("numbers", "square brackets", "all of the above", "parentheses", "consol.log");
};

//