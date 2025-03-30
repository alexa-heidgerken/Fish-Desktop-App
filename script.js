const hearts = document.querySelectorAll('.heart');
const fish = document.getElementById("fish-animate")
const livesContainer = document.querySelector('.lives');

let lives = 3;
let timer;
function startTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        loseLive();
    }, 3);
}

function loseLife() {
    if (lives > 0) {
        lives -=1;
        const heart = livesContainer.querySelectorAll('.heart')[lives];
        heart.src = 'emptyheart.PNG';
    }

    if (lives === 0) {
        gameOver();
    } else {
        startTimer();
    }
}

function gameOver() {
    clearTimeout(timer);
    document.getElementById("fish-animate").style.animation = "deadFishAnimation 20s steps(1)";
    //document.getElementsByClassName("feeding-button").disabled = true;
}

function feedingTime(){
    fish.style.animation = "feedingFishAnimation 20s steps(1)";
    fish.addEventListener('animationend', () => {
        //alert("have been fed");
        fish.style.animation = "idleFishAnimation 20s steps(1) infinite";
    }, {once: true });
//alert("feed");
startTimer(); //resets 3hr counter timer
}