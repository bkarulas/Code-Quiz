# Code-Quiz

This project is based on Javascript.

How the quiz works:

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

![code quiz](/screenshots/start.JPG)

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty of 10 seconds from the remaining time.
  
  * If the user gets a correct answer, the will get a "Correct" message followed by a "Ding" sound.

![code quiz](/screenshots/correct.JPG)
  
  * If the user gets a incorrect answer, the will get a "Wrong" message followed by a "Buzzer" sound.

![code quiz](/screenshots/incorrect.JPG)

  * Once the quiz is completed the users will hear a "Completed" sound.

![code quiz](/screenshots/completed.JPG)

  * When time runs out and/or all questions are answered, the user is presented with their final score (the time remianing) and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

  * Once the users clicks on "Submit" they will be taken to the high score screen to view all high scores. On the Highscore screen they will have the option to clear the highsocres from local storage or start the quiz again

![code quiz](/screenshots/highscores.JPG)

* This application is responsive, and adapts to multiple screen sizes.

![code quiz](/screenshots/responsive.JPG)


