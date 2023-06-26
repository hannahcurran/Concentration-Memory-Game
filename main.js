/*----- constants -----*/

const cards = [
        {value: '2', image: 'css/card-library/images/diamonds/diamonds-A.svg'},
        {value: '2', image: 'css/card-library/images/diamonds/diamonds-A.svg'},
        {value: '3', image: 'css/card-library/images/diamonds/diamonds-r03.svg'},
        {value: '3', image: 'css/card-library/images/diamonds/diamonds-r03.svg'},
        {value: '4', image: 'css/card-library/images/diamonds/diamonds-r04.svg'},
        {value: '4', image: 'css/card-library/images/diamonds/diamonds-r04.svg'},
        {value: '5', image: 'css/card-library/images/diamonds/diamonds-r05.svg'},
        {value: '5', image: 'css/card-library/images/diamonds/diamonds-r05.svg'},
        {value: '6', image: 'css/card-library/images/diamonds/diamonds-r06.svg'},
        {value: '6', image: 'css/card-library/images/diamonds/diamonds-r06.svg'},
        {value: 'Ace', image: 'css/card-library/images/diamonds/diamonds-A.svg'},
        {value: 'Ace', image: 'css/card-library/images/diamonds/diamonds-A.svg'},]

 const cardEls = document.querySelectorAll('.card');

let firstGuess = null;

cardEls.forEach(function (el, index) {
        el.addEventListener('click', function() {
                let clickedCard = cards[index]
                el.setAttribute('src', clickedCard.image)
                if (firstGuess === null) {
                firstGuess = index;
                }else {
                if(cards[firstGuess].value === cards[index].value){
                alert('Matched Pair!')
                }else {
                alert('Not a Match')
                       }
                       }
        })});   

/*----- app's state (variables) - the variables that need to be global to the application and accessible to other functions we write-----*/
//use arrays and objects


/*----- cached element references -----*/
const playAgainBtn = document.querySelector('button');

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

//initialize all state then call render()
function init(){

}

function renderCard(cb){
//first all cards face down
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