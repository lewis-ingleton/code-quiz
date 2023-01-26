# Pseudocode for quiz game


## Linking JS files to components on html
 * init() function. in order to initialise the game 
 * Look at word guessing game (previous task) on how to initialise game and start countdown timer (and other)
 * Maybe look at reset button to go back to start of game (return) 

## Start button 
 * Button press starts countdown timer 
 * Will link to ID in html 
 * First question appears - pushed in by JS 
 * setInterval for countdown timer 


## Questions logic 
 * When they complete quiz: display message with score + store score in highscores 


## View highscores logic 
 * Code to store previous scores in local storage 
 * let highScores = localStorage.getItem("highScore") [example]
 * 


## Countdown timer logic 



### Other 

 * function rednerBlanks()
 * we need init function  
 * we need getter and setter function 
 * if (timerCount === 0) {
    return;
 } - this stops 