// generate random number

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// set image based on number

document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1 +".png");

document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2 +".png");


// change h1 to show which user won or if there was a draw

if (randomNumber1 > randomNumber2) {
var h1 = document.querySelector("h1");
h1.innerHTML = "Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
var h1 = document.querySelector("h1");
h1.innerHTML = "Player 2 Wins!"; 

} else { (randomNumber1 === randomNumber2)
var h1 = document.querySelector("h1");
h1.innerHTML = "It's a Draw"; 
}


