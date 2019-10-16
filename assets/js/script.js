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
var highScoreDiv = document.getElementById("hightScore");
var choiceBtn0 = document.getElementById("cb0");
var choiceBtn1 = document.getElementById("cb1");
var choiceBtn2 = document.getElementById("cb2");
var choiceBtn3 = document.getElementById("cb3");
var i = 0;
var correctAnswewrs = 0;
var userScore = 0;
var count = 0;

quizDiv.style.display = "none";
endDiv.style.display = "none";
highScoreDiv.style.display = "none";

function startQuiz (){
    count = 60;
    timer ();
    quiz ();
    quizDiv.style.display = "block";
    startDiv.style.display = "none";
    endDiv.style.display = "none";
    highScoreDiv.style.display = "none";
}

function quiz (){
    if (i < questions.length){
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
        count = count-10;
    }
    i++;
   quiz ();
}

function endQuiz (countInter){
    userScore = count;
    count = 0;
    scoreDiv = document.getElementById("score");
    quizDiv.style.display = "none";
    endDiv.style.display = "block";
    clearInterval(countInter);
    scoreDiv.textContent = "Your Final score is: " + userScore;
    return userScore;
}
var inputInital = document.getElementById("initial");
var subScore = document.getElementById("initalBtn");
subScore.onclick = function(){
    var key = inputInital.value;
    var value = userScore;
    if (key){
        localStorage.setItem(key, value);
    }
    highScore();
}



function highScore(){
    var scoresDispalyDiv = document.getElementById("scoresDispaly");
    endDiv.style.display = "none";
    highScoreDiv.style.display = "block";
        for (var c = 0; c <localStorage.length; c++){
        var key = localStorage.key(c);
        var value = localStorage.getItem(key);
        var newScoreP = document.createElement("p");
        newScoreP.textContent = key + " - " + value;
        scoresDispalyDiv.appendChild(newScoreP);
    }
}

function timer (){
    var countInter = setInterval(counter, 1000);
    var timerDiv = document.getElementById("timer");
    timerDiv.textContent = count;
    function counter (){
        count--;
        timerDiv.textContent = count;
        if (count<=0){
            clearInterval(countInter);
        }
    }
    
}

reStart.onclick = function(){
    location.reload();
}

clearScores.onclick = function(){
    localStorage.clear();
    document.getElementById("scoresDispaly").textContent = "";
    

}

