var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },
    {
        title:"Arrays in JavaScript can be used to store",
        choices: ["Numbers & Strings", "Other Arrays", "Boolians", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title:"String vaules must be enclosed within _____ when being assigned to variables",
        choices: ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title:"A very useful tool used during development and debuging for printing conent to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.Log"],
        answer: "Console.Log"
    },
  ];
var questionDiv = document.getElementById("question");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");
var choiceBtn0 = document.getElementById("cb0");
var choiceBtn1 = document.getElementById("cb1");
var choiceBtn2 = document.getElementById("cb2");
var choiceBtn3 = document.getElementById("cb3");
var i = 0;
var k = 0;
correctAnswewrs = 0;
quizDiv.style.display = "none";
endDiv.style.display = "none";

function startQuiz (){
    quizDiv.style.display = "block";
    startDiv.style.display = "none";
    console.log(i);
    console.log(questions.length);
    if (i < questions.length){
        console.log("The quiz Has started");
        questionDiv.textContent = questions[i].title;
        choiceBtn0.textContent = questions[i].choices[0];
        choiceBtn1.textContent = questions[i].choices[1];
        choiceBtn2.textContent = questions[i].choices[2];
        choiceBtn3.textContent = questions[i].choices[3];
    }
    else{
        endQuiz ();
    }
}

var resultDiv = document.getElementById("result");
function check (a){
    if (questions[i].choices[a] === questions[i].answer){
        resultDiv.textContent = "Correct";
        correctAnswewrs++;

    }
    else{
        resultDiv.textContent = "Wrong";
    }
    i++;
    startQuiz (i);
}

function endQuiz (){
    quizDiv.style.display = "none";
    endDiv.style.display = "block";
}



