// step 2
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var isGameOn = false;
var level = 0;
var userTries = 0;


function nextSequence(){
    // step 7
    level++;
    $("h1").html("Level " + level);

    // step 2
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // step 3
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// step 4
$(".btn").click(function(event){
    var userChosenColour = event.target.getAttribute("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if(isGameOn === true){
        userClickedPattern.push(userChosenColour);
        checkAnswer(level);
    }
});

// step 5
function playSound(name){
    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

// step 6
function animatePress(currentColour){
    $("." + currentColour).toggleClass("pressed");
    setTimeout(function(){
        $("." + currentColour).toggleClass("pressed");
    }, 100);
}

$(document).keydown(function(){
    if(isGameOn === false){
        isGameOn = true;
        userTries = 0;
        nextSequence()
    }
})

function checkAnswer(correntLevel){
    if(userClickedPattern[userTries] === gamePattern[userTries]){
        console.log("success");
        userTries++;
    }
    else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").toggleClass("game-over");
        setTimeout(function(){
            $("body").toggleClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }

    if(userClickedPattern.length === correntLevel)
    {
        userClickedPattern = [];
        userTries = 0;
        setTimeout(function(){
            nextSequence()
        }, 1000);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = []
    isGameOn = false;
    userTries = 0;
}
