
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

function flipCard () 
{ 
var clickedCard = this;
var cardId = clickedCard.getAttribute("data-id");


cardsInPlay.push(cards[cardId].rank);

// console.log("User flipped " + cards[cardId].rank);
// console.log("User flipped" + cards[cardId].suit);
// console.log("User flipped" + cards[cardId].cardImage);


console.log(cardsInPlay);

clickedCard.setAttribute("src", cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else{
		alert("sorry try again");
	}
}
}

function createBoard(){

for (var i = 0; i < cards.length; i++) {

	 var cardElement = document.createElement("img");
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click", flipCard);
		var gameBoard = document.getElementById("game-board");
		gameBoard.appendChild(cardElement);
		
	}

}

createBoard()
	



/*

Alright! Finally, when the user clicks a card, we want to display the image for the face of that card in place of the back of the card.

Right before the if statement where you are checking to see if two cards have been played, use the setAttribute method to update the src attribute to the image of the card that was just clicked (the image source is in the cardImage property in that card's object in the cards array).
HINT: How can you access the cardImage property? Take a look at the line where we were logging this property to the console in the last assignment for a hint:

console.log(cards[cardId].cardImage)

HINT: Just as we did in the last step, we can use the this keyword to access the element the user just clicked on. Except now instead of getting an attribute, we want to set the src attribute.

HINT: We'll want to make sure that there are no quotation marks surrounding the new value of the src attribute (cards[cardId].cardImage) when we use the setAttribute() method.

Earlier, we added a click event to each card. Now, when each card is clicked, the flipCard function will run. Before we can test things out, we'll need to make a few edits to our flipCard function.

Remove the cardId parameter from the flip card function. We no longer want to hard-code the index number of the card that should be flipped - it will be part of the cardElement that calls the click event.
On the first line inside the flipCard function, use the getAttribute method to get the data-id attribute of the card that was just clicked and store it in a variable cardId.
HINT: We can use the this keyword to access the card that was clicked: this.getAttribute('attribute-we-want-to-get-goes-here');

Instructions - Actually Creating the Board
Now, you have a function called createBoard which has all the cards in it. Great! What's left?

We have to actually call the createBoard function to create the board!

Delete the two lines of code where you are calling the flipCard function:
flipCard(0);
flipCard(2);
Instead, at the very end of your JavaScript file, invoke the createBoard function.
Make sure that you do this below where you define the function!

Instructions - Finalizing the Card
Next, use the addEventListener() method on the cardElement. Add a click event so that when a user clicks on a card, the flipCard function is called.
Now you have a complete game card, stored in cardElement! Great job.

As the last piece of the for loop, append the cardElement to the game board (which has an id of game-board).
Hint: use the appendChild() method to do this.


Instructions - Adding the Card Image and ID
Still in the loop, use the setAttribute() method on cardElement. We want to add a src attribute of "images/back.png". Now, the user will see the back of the card.
HINT: For reference, here's the syntax for setting an attribute:* cardElement.setAttribute('attributeName', 'attributeValue');

Next, use the setAttribute() method on cardElement once again. Set the card's 'data-id' attribute to be the current index of the card array, i (no quotes). Now, we can track which card it is.
NOTE: data- attributes are meant to store data about an element that is not tied to a style.




Instructions - Adding the Card Image and ID
Still in the loop, use the setAttribute() method on cardElement. We want to add a src attribute of "images/back.png". Now, the user will see the back of the card.
HINT: For reference, here's the syntax for setting an attribute:* cardElement.setAttribute('attributeName', 'attributeValue');

Next, use the setAttribute() method on cardElement once again. Set the card's 'data-id' attribute to be the current index of the card array, i (no quotes). Now, we can track which card it is.
NOTE: data- attributes are meant to store data about an element that is not tied to a style.
	
}



















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