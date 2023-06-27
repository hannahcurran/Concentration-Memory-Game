/*----- constants -----*/

const cards = [
        {value: '2', image: 'css/card-library/images/diamonds/diamonds-r02.svg'},
        {value: '3', image: 'css/card-library/images/diamonds/diamonds-r03.svg'},
        {value: '4', image: 'css/card-library/images/diamonds/diamonds-r04.svg'},
        {value: '2', image: 'css/card-library/images/diamonds/diamonds-r02.svg'},
        {value: '5', image: 'css/card-library/images/diamonds/diamonds-r05.svg'},
        {value: 'Ace', image: 'css/card-library/images/diamonds/diamonds-A.svg'},
        {value: '5', image: 'css/card-library/images/diamonds/diamonds-r05.svg'},
        {value: '4', image: 'css/card-library/images/diamonds/diamonds-r04.svg'},
        {value: '6', image: 'css/card-library/images/diamonds/diamonds-r06.svg'},
        {value: '3', image: 'css/card-library/images/diamonds/diamonds-r03.svg'},
        {value: '6', image: 'css/card-library/images/diamonds/diamonds-r06.svg'},
        {value: 'Ace', image: 'css/card-library/images/diamonds/diamonds-A.svg'},
       ]


 const cardEls = document.querySelectorAll('.card');

 //getting cards to flip over and identify if they match

let firstGuess = null;

cardEls.forEach(function (el, guess) {
        el.addEventListener('click', function() {
         if(guess === firstGuess){
        return;
         };       
        let clickedCard = cards[guess];
                
        el.setAttribute('src', clickedCard.image);
           if (firstGuess === null) {
            firstGuess = guess;
            }else {
            if(cards[firstGuess].value === cards[guess].value){
                alert('Matched Pair!') // need matched cards to stay turned over and next turn to begin.
            }else {
            setTimeout(function(){
                cardEls[firstGuess].setAttribute('src', 'css/card-library/images/red.svg');
                cardEls[guess].setAttribute('src', 'css/card-library/images/red.svg');
                firstGuess= null;
                }, 0750)
                }
                }
        })
        });   

/*----- app's state (variables) - the variables that need to be global to the application and accessible to other functions we write-----*/
//use arrays and objects


/*----- cached element references -----*/
const playAgainBtn = document.querySelector('button');
const countdownEl = document.getElementById('countdown'); 

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

//initialize all state then call render()
// function init(){

// }

function render(){
        renderCountdown(function(){
        renderResults();
        })
}

 function renderCountdown(cb){
      let count = 30;
       countdownEl.style.visibility = 'visible';
       countdownEl.innerText = count;
       const timerId = setInterval(function(){
                 count --;
                 if (count) {
                         countdownEl.innerText = count; 
                         }else{
                        clearInterval(timerId);
                         countdownEl.style.visbility= 'hidden';
                         cb();
                      }
         }, 1000);
}

// function shuffle(array) {
//         let currentIndex= array.length, randomIndex;
//         while (currentIndex !=0){
//                 randomIndex = Math.floor(Math.random()* currentIndex);
//                 currentIndex--;
//              [array[currentIndex], array[randomIndex]] = [
//                 array[randomIndex], array[currentIndex]];
        
//         }
//         return array;
// }

// shuffle(cards);