
const cards = [ 


{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},


{	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},


{	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
},

];


var cardsInPlay = [];

function flipCard (cardId) 
{ 

var cardOne = cards[0];

cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cards[cardId].rank);
console.log("User flipped" + cards[cardId].suit);
console.log("User flipped" + cards[cardId].cardImage);


console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else{
		alert("sorry try again");
	}
}
}

flipCard (0)

flipCard (2)
/*

Instructions
Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
HINT: You'll want to use the rank property like we did in the last step.

Now let's add a bit of new code so that we can "see" the cards that are flipped in our console. Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.

Save your main.js file, open the project in Chrome and open the console. Make sure that the "User flipped queen" and "User flipped king" messages are still displayed. You should now also see the image paths and suits displayed.























First let's add some extra information to each card by storing an object for each card in our cards array. Open the memory_game folder in Sublime, then open the main.js file you worked on in the last assignment and complete the following steps:

Delete the four strings from the cards array.
In the cards array, create four objects, one for each card.
HINT: Here's the syntax for creating an array that contains objects:

var myArray = [
{
color: 'red',
flower: 'rose',
petals: 20
},
{
color: 'blue',
flower: 'violet',
petals: 6
}
];
Here are the values each object should hold:
rank	suit	cardImage
"queen"	"hearts"	"images/queen-of-hearts.png"
"queen"	"diamonds"	"images/queen-of-diamonds.png"
"king"	"hearts"	"images/king-of-hearts.png"
"king"	"diamonds"	"images/king-of-diamonds.png"


 */


/*


var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen";
*/