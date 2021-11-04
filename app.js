const min = 1;
const max = 10;
let lifeRemained = 3;
let winningNumber = getWinningNumber(min, max);

const UImin = document.querySelector(".min");
const UImax = document.querySelector(".max");
const UImessage = document.querySelector('.message');
const inputNumber = document.querySelector('.input-number');
const submitNumber = document.querySelector('#submit-number');


submitNumber.addEventListener('click', function(){
    
    let numberIntroduced = parseInt(inputNumber.value);

  
    if (isNaN(numberIntroduced) || numberIntroduced < min || numberIntroduced > max) {
        setMessage(`Enter a number between ${min} and ${max}`, 'red');
    }
    else { // 
        setMessage('', ''); 

        lifeRemained -= 1; 

        if (winningNumber == numberIntroduced){
            gameOver(true, `You win! The correct number was ${winningNumber}.`);
        }
        else if ( lifeRemained == 0) {
            gameOver(false, `You lost! The correct number was ${winningNumber}`);
        }        
    }clearInput();
});

document.querySelector('body').addEventListener('mousedown', function(object){
    if (object.target.className == 'play-again') {
        window.location.reload();
    }
});

function gameOver (won , msg) {
    let color;

    won == true ? color = 'green' : color = 'red';

    setMessage(msg, color);

    inputNumber.disabled = true;

    submitNumber.value = 'Play Again';
    submitNumber.className += 'play-again';
}

function getWinningNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

function setMessage (msg, color) {
    UImessage.textContent = msg;
    UImessage.style.color = color;
}

function clearInput() {
    inputNumber.value = '';
    inputNumber.placeholder = '';
    console.log("clear the input value and placeholder");
}