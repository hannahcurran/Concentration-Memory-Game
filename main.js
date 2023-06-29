const cards = [
        { value: 'hand', image: 'css/card-library/images/hand.jpg' },
        { value: 'hand', image: 'css/card-library/images/hand.jpg' },
        { value: 'X', image: 'css/card-library/images/Xfiles.png' },
        { value: 'X', image: 'css/card-library/images/Xfiles.png' },
        { value: 'mulderScully', image: 'css/card-library/images/mulderAndScully.png' },
        { value: 'mulderScully', image: 'css/card-library/images/mulderAndScully.png' },
        { value: 'alienFace', image: 'css/card-library/images/alienFace.jpg' },
        { value: 'alienFace', image: 'css/card-library/images/alienFace.jpg' },
        { value: 'face', image: 'css/card-library/images/face.jpg' },
        { value: 'face', image: 'css/card-library/images/face.jpg' },
        { value: 'scullyBook', image: 'css/card-library/images/scullyBook.jpg' },
        { value: 'scullyBook', image: 'css/card-library/images/scullyBook.jpg' },
        { value: 'redAlien', image: 'css/card-library/images/redAlien.jpg' },
        { value: 'redAlien', image: 'css/card-library/images/redAlien.jpg' },
        { value: 'scullyFace', image: 'css/card-library/images/scullyFace.jpg' },
        { value: 'scullyFace', image: 'css/card-library/images/scullyFace.jpg' },


]

//constant variables
const cardEls = document.querySelectorAll('.card');
const messageEl = document.querySelector('h2');
const countdownEl = document.getElementById('timer');
const start = document.getElementById('start');

//getting cards to flip over and identify if they match
let time;
let firstGuess;
let matchCounter;
let gameTimer;

init();

cardEls.forEach(function (el, index) {
        el.addEventListener('click', function () {
                if (index === firstGuess) {
                        return; // prevent same card from being clicked on twice
                };

                let clickedCard = cards[index];

                el.setAttribute('src', clickedCard.image);
                if (firstGuess === null) {
                        firstGuess = index;
                } else {
                        if (cards[firstGuess].value === cards[index].value) {
                                matchCounter += 1; //want to add this to display on page
                                messageEl.innerText = 'Match!';
                                setTimeout(function () {
                                        messageEl.innerText = ''
                                }, 1000 * 0.75); //show message then disappear before next turn
                                firstGuess = null; //keep matched cards flipped over and re-set for next turn
                                checkWinningCondition();

                        } else {
                                messageEl.innerText = 'Wrong - try again!';
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



//initialize all state then call render()
function init() {
        time = 5; //change back to 30 seconds for final version 
        firstGuess = null;
        matchCounter = 0;

        cardEls.forEach((card) => card.setAttribute('src', 'css/card-library/images/spaceship.jpg'));
        shuffle(cards);
}


//play button which begins countdown

start.addEventListener('click', function () {
        init();
        start.style.visibility = 'hidden'; //hides play button
        gameTimer = setInterval(function () {
                time--;
                countdownEl.innerHTML = `${time} seconds left`; //shows countdown 

                checkWinningCondition();
        }, 1000);

})


function checkWinningCondition() {
        if (matchCounter === cards.length / 2) {
                clearInterval(gameTimer)
                countdownEl.innerHTML = "Congratulations! You matched all the cards!";
                start.style.visibility = 'visible';
                start.innerHTML = 'Play Again!';
        }
        if (time <= 0) {
                clearInterval(gameTimer);
                countdownEl.innerHTML = "Time's up! The truth is still out there...";
                start.style.visibility = 'visible';
                start.innerHTML = 'Play Again!';
        }
}

function shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
                const newPosition = Math.floor((i + 1) * Math.random());
                const temp = array[newPosition];
                array[newPosition] = array[i];
                array[i] = temp;
        }
        return array;
}
const shuffleCards = shuffle(cards);
