//Global variables
var questionDiv = document.getElementById("question");
var startDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var endDiv = document.getElementById("end");
var highScoreDiv = document.getElementById("hightScore");
var resultDiv = document.getElementById("result");
var subScore = document.getElementById("initalBtn");
var i = 0;
var userScore = 0;
var count = 0;

/*The page is broken up into 4 major DIV tags:
    1. START - the strating screen
    2. QUIZ - the actual quiz
    3. END - after the quiz is completed
    4. HIGHSCORE - the high scores*/
quizDiv.style.display = "none"; //hides the quiz div section
endDiv.style.display = "none"; //hides the end div section
highScoreDiv.style.display = "none"; //hides the highScore div section

//after the user click on Start Quiz
function startQuiz (){
    count = 75; //sets the timer to 75
    timer (); //calls the timer function
    quiz (); //calls the quiz funtion
    quizDiv.style.display = "block"; //displays the quiz div section 
    startDiv.style.display = "none"; //hides the start dev section
    endDiv.style.display = "none";//hides the end div section
    highScoreDiv.style.display = "none";//hides the highScore div section
}

//the questions
function quiz (){
    if (i < questions.length){
        questionDiv.textContent = questions[i].title;
        document.getElementById("cb0").textContent = questions[i].choices[0];
        document.getElementById("cb1").textContent = questions[i].choices[1];
        document.getElementById("cb2").textContent = questions[i].choices[2];
        document.getElementById("cb3").textContent = questions[i].choices[3];
    }
    //once the quiz is done, it calls the endQuiz function
    else{
        endQuiz ();
    }
}

//once the user clicks on an answer, it checks to see if they are correct
function check (a){
    var audioWrong = new Audio("assets/audio/wrong.mp3");
    var audioCorrect = new Audio("assets/audio/correct.mp3");
    //if the are correct it will display a "Correct" message and play a ding sound
    if (questions[i].choices[a] === questions[i].answer){
        resultDiv.textContent = "Correct";
        audioCorrect.play();
    }
    //if the user is incorrect it will display an "Incorrect" message and play a buzz sound and takes 10 seconds off the users score
    else{
        resultDiv.textContent = "Wrong";
        count = count-10;
        audioWrong.play();
    }
    //increase i to the next number -->next question
    i++;
    //calls the quiz function with the new value of i
   quiz ();
}

// after the las question is completed
function endQuiz (countInter){
    var audioDone = new Audio("assets/audio/tada.mp3");
    //sets the users score to what their final time was
    userScore = count;
    //resets the timer to 0
    count = 0;
    //plays a completed sound clip
    audioDone.play();
    scoreDiv = document.getElementById("score");
    quizDiv.style.display = "none"; //hides the quiz div section
    endDiv.style.display = "block"; //displays the end div section
    clearInterval(countInter);
    scoreDiv.textContent = "Your Final score is: " + userScore;
    return userScore;
}

//once the users enters their initials the submit their score to local storage
subScore.onclick = function(){
    var inputInital = document.getElementById("initial");
    var key = userScore;
    var value = inputInital.value;
    if (value){
        localStorage.setItem(key, value);
        key = "";
        value = "";
    }
    //then calls the highscore function to display all highscores
    highScore();
}


//function to display all highscores
function highScore(){
    var scoresDispalyDiv = document.getElementById("scoresDispaly");
    scoresDispalyDiv.innerHTML = "";
    startDiv.style.display = "none";
    endDiv.style.display = "none";
    highScoreDiv.style.display = "block"; //displays highScore div
    //call all highscores from local storage to display them
    for (var c = 0; c <localStorage.length; c++){
        var key = localStorage.key(c);
        var value = localStorage.getItem(key);
        var newScoreP = document.createElement("p");
        newScoreP.textContent = value + " - " + key;
        scoresDispalyDiv.appendChild(newScoreP);

    }
}

//timer functon
function timer (){
    //changes the interval of the counter ever 1000 milliseconds or 1 second
    var countInter = setInterval(counter, 1000);
    var timerDiv = document.getElementById("timer");
    timerDiv.textContent = count;
    function counter (){
        //makes the counter count down
        count--;
        timerDiv.textContent = count;
        //once the timer hits 0 it stops it from going to negative numbers
        if (count<=0){
            clearInterval(countInter);
        }
    }
    
}

//the function to reset the game, and go back to the strat screen with out refreshing the page
function restart(){
    i = 0;
    userScore = 0;
    count = 0;
    quizDiv.style.display = "none"; //hides the quiz div section
    endDiv.style.display = "none"; //hides the end div section
    highScoreDiv.style.display = "none"; //hides the highScore div section
    startDiv.style.display = "block"; //shows the start dev section
    }

 //reloads the page
reStart.onclick = function(){
    restart ();
}

//clears everything in local storage
clearScores.onclick = function(){
    localStorage.clear();
    document.getElementById("scoresDispaly").textContent = "";
    

}

