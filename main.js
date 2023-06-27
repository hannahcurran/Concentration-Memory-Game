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

//getting cards to flip over and identify if they match

const cardEls = document.querySelectorAll('.card');
const messageEl = document.querySelector('h2');

let firstGuess = null;

cardEls.forEach(function (el, index) {
        el.addEventListener('click', function() {
         if(index === firstGuess){
        return; // prevent same card from being clicked on twice
         };       
        
        let clickedCard = cards[index];
                
        el.setAttribute('src', clickedCard.image);
           if (firstGuess === null) {
            firstGuess = index;  
        }else {
            if(cards[firstGuess].value === cards[index].value){
                messageEl.innerText = 'Match!';
                setTimeout(function(){
                   messageEl.innerText = ''}, 1000*0.75); //show message then disappear before next turn
                 firstGuess = null; //keep matched cards flipped over and re-set for next turn
        }else {
                messageEl.innerText = 'Wrong - try again!';
                setTimeout(function(){
                cardEls[firstGuess].setAttribute('src', 'css/card-library/images/red.svg');
                cardEls[index].setAttribute('src', 'css/card-library/images/red.svg');
                messageEl.innerText = ''; 
                firstGuess= null;
                }, 1000*0.75);//turn both cards back if not a match
                }
                }
        })
        });   

/*----- app's state (variables) - the variables that need to be global to the application and accessible to other functions we write-----*/
//use arrays and objects


/*----- cached element references -----*/
const playAgainBtn = document.querySelector('button');

const countdownEl = document.getElementById('countdown').addEventListener('click', function(){
        let timeleft = 30; 
})

/*----- event listeners -----*/
// playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

//initialize all state then call render()
// function init(){

// }

// function render(){
//         //renderCountdown()
//         //renderButton();
//         }


// 
// }
// }
// const countdown = 30;
// function countdownTimer(){
// countdown--;
// if(countdown >= 0){
//         console.log(countdown);
// }else {
//         clearInterval(timerId);
// }
// }

// const timerId = setInterval(countdownTimer, 1000);

//  function renderCountdown(cb){
//       let count = 30;
//        countdownEl.style.visibility = 'visible';
//        countdownEl.innerText = count;
//        const timerId = setInterval(function(){
//                  count --;
//                  if (count) {
//                          countdownEl.innerText = count; 
//                          }else{
//                         clearInterval(timerId);
//                          countdownEl.style.visbility= 'hidden';
//                          cb();
//                       }
//          }, 1000);
// }