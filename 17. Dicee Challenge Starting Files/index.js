var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img1Element = document.querySelector(".img1");
var img2Element = document.querySelector(".img2");
var h1Element = document.querySelector("h1");
console.log(h1Element);

img1Element.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
img2Element.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

function whoWon(randomNumber1, randomNumber2){
    if(randomNumber1 > randomNumber2){
        return "Player 1 wins!";
    }
    else if(randomNumber1 < randomNumber2){
        return "Player 2 wins!";
    }
    else{
        return "Draw!";
    }
}

h1Element.innerHTML = whoWon(randomNumber1, randomNumber2);


