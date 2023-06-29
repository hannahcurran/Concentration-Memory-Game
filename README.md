**Project Concentration**

**How this game works:** <br>
Concentration is a memory game where images are hidden and during each turn the player is able to flip over two images. If the player flips over two matching images then the images remain visible. <br>Otherwise, the images will flip back over again and be hidden. <br>
There is a game board with sixteen X-files themed images arranged randomly in a grid face down. The images consist of eight matching pairs.The object of the game is to flip over all of the pairs of matching images before the 60 second timer runs out. 

![screenshot of concentration](https://github.com/hannahcurran/Concentration-Memory-Game/assets/122492241/1d9ef73e-5961-4553-851d-28d0bca0856f)


**Deployment link:** <br>
https://hannahcurran.github.io/Concentration-Memory-Game/ 


**Installation & user requirements:** <br>
All you need to play is a web browser and internet connectivity! 


**Timeframe**: <br>
I had one week to work independently and complete the project. It was early on within the SEI bootcamp and felt like a quick jump into planning and building a game solo. 


**Technologies Used:** <br>
☐ HTML <br>
☐ CSS<br>
☐ JavaScript<br>
☐ Github<br>
☐ Visual Studio Code<br>
☐ Google Chrome Developer Tools<br>
☐ Google Fonts <br>
☐ Draw.io (wireframing and planning)<br>


**Brief:** <br>
☐ Render a game in the browser.<br>
☐ Include win/loss logic and render win/loss messages in HTML. Popup alerts using the alert() method are okay during development, but not production.<br>
☐ Include separate HTML, CSS & JavaScript files.<br>
☐ Use vanilla JavaScript, not jQuery.<br>
☐ Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.<br>
☐ No remaining unused and/or commented out code (code that will never be called) .<br>
☐ Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.<br>
☐ Be coded in a consistent manner. For example, choose between your preference for function declarations vs. function expressions.<br>
☐ Be deployed online using GitHub Pages so that the rest of the world can play your game!<br>


**Planning:** <br> 

For the project  planning, I used draw.io to design a wireframe, plan and write the pseudo code. This helped to keep all my thoughts and ideas in one place. 

![wireframe for concentration](https://github.com/hannahcurran/Concentration-Memory-Game/assets/122492241/7dd93fbe-152f-4e2b-87a9-e50489243ad4)

  
![pseudo code for concentration](https://github.com/hannahcurran/Concentration-Memory-Game/assets/122492241/753707a9-e60f-4cfe-b666-f12b14259005)



**Build/Code Process:** <br>
I've highlighted a few snippets of code from the game which help to show my thinking and how I've implemented it:


```
cardEls.forEach(function (el, index) {
        el.addEventListener('click', function () {
                if (index === firstGuess) {
                        return; 
                };

                let clickedCard = cards[index];

                el.setAttribute('src', clickedCard.image);
                if (firstGuess === null) {
                        firstGuess = index;
                } else {
                        if (cards[firstGuess].value === cards[index].value) {
                                matchCounter += 1; 
                                messageEl.innerText = 'Match!';
                                setTimeout(function () {
                                        messageEl.innerText = '';
                                }, 1000 * 0.75); 
                                firstGuess = null; //keep matched cards flipped over and re-set for next turn
                                checkWinningCondition();

                        } else {
                                messageEl.innerText = 'Wrong - try again';
                                setTimeout(function () {
                                        cardEls[firstGuess].setAttribute('src', 'css/card-library/images/spaceship.jpg');
                                        cardEls[index].setAttribute('src', 'css/card-library/images/spaceship.jpg');
                                        messageEl.innerText = '';
                                        firstGuess = null;
                                }, 1000 * 0.75);//turn both cards back if not a match
                        }
                }
        })
});
```

I started out writing this piece of code - it iterates over the collection of card elements (cardEls) using the forEach method. For each card (image), it adds a click event listener. When a card is clicked, the images flip over for the player. This checks if the clicked card's index is the same as the index stored in firstGuess. If they are the same, it exits the function immediately using return. The cards will stay flipped over. <br>

It gets the card object (clickedCard) associated with the clicked card's index from the cards array and sets the src attribute of the clicked card element to the image of the clickedCard. If firstGuess is null, it means this is the first card clicked in this turn. So, it stores the index of the clicked card in firstGuess for comparison with the next clicked card.<br>

If firstGuess is not null, it means this is the second card clicked in this turn. It compares the value of the first clicked card (cards[firstGuess]) and the second clicked card (cards[index]). If the values of the two cards are the same, it means the cards are a match. It increments matchCounter, briefly displays a "Match!" message, and clears the message. It also resets firstGuess to null for the next turn and checks if the winning condition is met by calling checkWinningCondition(). <br>

If the values of the two cards are not the same, it means the cards are not a match. It briefly displays a "Wrong - try again" message, flips both cards back to their original image, clears the message, and resets firstGuess to null for the next turn.<br>


```
start.addEventListener('click', function () {
init();
start.style.visibility = 'hidden';
gameTimer = setInterval(function () {
time--;
countdownEl.innerHTML = `${time} seconds left`;
checkWinningCondition();
}, 1000);
```

This function adds an event listener onto the button HTML element identified by the variable start. When this button is clicked, the following actions occur:<br>
The init() function is called which sets up the state for the game (sets timer to 60 seconds, sets the firstGuess to null, matchCounter to 0 and flips all cards back around). <br>
Once clicked, the button is then hidden from view. <br>
A timer is set up to call a function every 1000 milliseconds, or every second. This function does the following:<br>
☐ Decrements the time variable by one.<br>
☐ Updates an HTML element identified by countdownEl to display the remaining time in seconds.<br>
☐ Calls a function checkWinningCondition() which checks if the winning condition for the game has been met (all pairs matched).<br>


```
function checkWinningCondition() {
if (matchCounter === cards.length / 2) {
clearInterval(gameTimer)
countdownEl.innerHTML = "Congratulations! You matched them all!";
start.style.visibility = 'visible';
start.innerHTML = 'Play Again';
}
if (time <= 0) {
clearInterval(gameTimer);
countdownEl.innerHTML = "Time's up! The truth is still out there...";
start.style.visibility = 'visible';
start.innerHTML = 'Play Again';
}
}
```
This function checks if the condition for winning the game has been met. The winning condition is met if the matchCounter (which counts the number of matches made by the player) is equal to half the length of the cards array. If all cards have been matched (i.e., if all pairs have been found), the game is won.<br>
If this winning condition is met, the game timer is stopped (clearInterval(gameTimer)), a congratulatory message is displayed, and a 'Play Again' button is made visible.<br>
The function also checks whether the game's time limit has been reached (if time is less than or equal to 0).<br>
If time is up, the game timer is stopped, a "Time's up" message is displayed, and a 'Play Again' button is made visible, similar to the actions performed when the winning condition is met.<br>



**Wins:**<br>
The game works(!), I’ve met the project requirements and the game has a fun theme. I also think I’ve managed to keep the code relatively concise and DRY.<br>



**Key Learnings/Takeaways:** <br>
Overall, it’s been a positive experience for my first project - I’m feeling more confident with JavaScript and I’ve been developing key skills in effective questions and researching to overcome obstacles along the way. 



**Future Improvements:** <br>
If I had a bit more time, there’s some additional features I’d like to have including: <br>
☐ The X-files theme tune to play as the timer countdown;<br>
☐ Sound effects when there is a ‘match’ or ‘wrong’ turn;<br>
☐ CSS animation on the images to have them floating around or some movement rather than being still on the page;<br>
☐ To have the option for two players to compete. 

