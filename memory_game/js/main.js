
console.log("Up and running!");






const cards = ["queen","queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[0];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);
console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else{
		alert("sorry try again");
	}
}

/*


Use console.log() to display the card that the user flipped

The message that is displayed in the console should say "User flipped king".
After saving the changes you made to main.js, open the index.html file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your main.js file.
Next we'll add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards.

Write an if statement that checks to see if the length of the cardsInPlay array is 2.
For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.

console.log("User flipped " + cardThree);

For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly.

Use console.log() to display the card that the user flipped
The message that is displayed in the console should say "User flipped queen".
After saving the changes you made to main.js, open the index.html file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console in Chrome and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your main.js file.
Now create a variable to represent the second card that the user flipped.

Create a variable cardTwo.
Store the third item in the cards array in the variable cardTwo.
Now we'll want to add this second card to the cardsInPlay array.

Use the push() method to add cardTwo to the end of the cardsInPlay array.


Next up, you'll create a variable to represent the first card that the user flipped.
Create a variable cardOne.
Store the first item in the cards array in the variable cardOne.
HINT: Use the array name, square brackets, and the index number to retrieve this card from the array.

Now we'll want to add this first card to the cardsInPlay array.
Use the push() method to add cardOne to the end of the cardsInPlay array.
Here's an example of the push() method if you need a syntax refresher:
ghosts.push('clyde');
Open the memory_game folder in Sublime and open the main.js file. You'll be writing code to work through the following steps in Sublime Text.

In your main.js file, create an array to store the four cards.

Create an array cards.
The array should hold four strings - one for each of our cards.
The strings should be "queen", "queen", "king", and "king".
After creating the cards array, you can delete the variables you created in the last unit's project.
Next we'll want to create an empty array. This will eventually hold the cards that are in play.

Create an array cardsInPlay.
Set its value to an empty array [] */


/*


var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen";
*/