/*----- constants -----*/

// let cards = [
//     {value: '2', image: './images/diamonds/diamonds-A.svg' },
//     {value: '2', image: './images/diamonds/diamonds-A.svg' },
//     {value: '3', image: './images/diamonds/diamonds-r03.svg'},
//     {value: '3', image: './images/diamonds/diamonds-r03.svg'},
//     {value: '4', image: './images/diamonds/diamonds-r04.svg'},
//     {value: '4', image: './images/diamonds/diamonds-r04.svg'},
//     {value: '5', image: './images/diamonds/diamonds-r05.svg'},
//     {value: '5', image: './images/diamonds/diamonds-r05.svg'},
//     {value: '6', image: './images/diamonds/diamonds-r06.svg'},
//     {value: '6', image: './images/diamonds/diamonds-r06.svg'},
//     {value: 'Ace', image: './images/diamonds/diamonds-A.svg' },
//     {value: 'Ace', image: './images/diamonds/diamonds-A.svg' },]

let cards = [
        {value: '2', image: './images/diamonds/diamonds-A.svg' },
        {value: '2', image: './images/diamonds/diamonds-A.svg' },
        {value: '3', image: './images/diamonds/diamonds-r03.svg'},
        {value: '3', image: './images/diamonds/diamonds-r03.svg'},
        {value: '4', image: './images/diamonds/diamonds-r04.svg'},
        {value: '4', image: './images/diamonds/diamonds-r04.svg'},
        {value: '5', image: './images/diamonds/diamonds-r05.svg'},
        {value: '5', image: './images/diamonds/diamonds-r05.svg'},
        {value: '6', image: './images/diamonds/diamonds-r06.svg'},
        {value: '6', image: './images/diamonds/diamonds-r06.svg'},
        {value: 'Ace', image: './images/diamonds/diamonds-A.svg' },
        {value: 'Ace', image: './images/diamonds/diamonds-A.svg' },]

let cardEls = document.querySelectorAll('.card');
let firstGuess = null;

shuffle(cards);

cardEls.forEach(function (el, index) {
        el.addEventListener('click', function( {
                let clickedCard = cards[index]
                el.setAttribvute('src', clickedCard.image)

                if (firstGuess === null) {
                        firstGuess = index;
                        }else {
                                if(cards[firstGuess].value === cards[index].value){
                                        alert('Matched Pair!')
                                }else {
                                        alert('Not a Match')

                                }
                        }
        }))
})
/*----- app's state (variables) - the variables that need to be global to the application and accessible to other functions we write-----*/
//use arrays and objects


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/