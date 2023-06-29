//constant variables

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
const cardEls = document.querySelectorAll('.card');
const messageEl = document.querySelector('h2');
const countdownEl = document.getElementById('timer');
const start = document.getElementById('start');

let time;
let firstGuess;
let matchCounter;
let gameTimer;
init();

//to get cards to flip over and identify if they match:
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

//functions

function init() {
        time = 60; 
        firstGuess = null;
        matchCounter = 0;
        cardEls.forEach((card) => card.setAttribute('src', 'css/card-library/images/spaceship.jpg'));
        shuffle(cards);
}
//play button which begins countdown
start.addEventListener('click', function () {
        init();
        start.style.visibility = 'hidden'; 
        gameTimer = setInterval(function () {
                time--;
                countdownEl.innerHTML = `${time} seconds left`; 
                checkWinningCondition();
        }, 1000);

})

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
