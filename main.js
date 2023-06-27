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

/*----- event listeners -----*/
// playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

//initialize all state then call render()
// function init(){

// }

//creating countdown timer 

// var time_limit = 30;

// var time_out = setInterval(() => {

//   if(time_limit == 0) {
    
//     $('#timer').html('Time Over');
        
//   } else {
    
//     if(time_limit < 10) {
//       time_limit = 0 + '' + time_limit;
//     }
    
//     $('#timer').html('00:' + time_limit);
    
//     time_limit -= 1;
    
//   }

// }, 1000);



// const countdownTime = 30;
// let time_out = setInterval(() => {
//         if(countdownTime === 0){
//                 `$(#timer).innerHTML("Time's up!)`;
//                 } else {
//                         `$(#timer).innerHTML('' + countdownTime)`;
//                         // countdownTime -=1;
//                 }

// }, 1000); 






// const countdownEl = document.getElementById('timer');

// const timerId = setInterval(countdown, 1000);

// function countdown(){
//         if (countdownTime <=0){
//             clearTimeout(timerId);
//             messageEl.innerText = "Time's up!";
//         } else {
//                 h3.innerHTML = timeLeft + ' seconds remaining';
//                 timeLeft--;
//         }
//       }


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