'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value =  14;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const scores = function(score){
    document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        // document.querySelector('.message').textContent = "⛔ No Number";
        displayMessage('⛔ No Number');
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // document.querySelector('.message').textContent = "🎉 Correct Number";
        displayMessage("🎉 Correct Number");

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.message').textContent = `${guess > secretNumber ?'📈 Too High!!!':'📉 Too Low!!!'}`;
            // document.querySelector('.score').textContent = score;
            scores(score);
        }else{
            score = 0;
            // document.querySelector('.score').textContent = score;
            scores(score);
            // document.querySelector('.message').textContent = "💥Game Over!!!";
            displayMessage("💥Game Over!!!");
        }
        
    }
    
    /*
    else if(guess > secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.message').textContent = "📈 Too High!!!";
            document.querySelector('.score').textContent = score;
        }else{
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "💥Game Over!!!";
        }

    }else if(guess < secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.message').textContent = "📉 Too Low!!!";
            document.querySelector('.score').textContent = score;
        }else{

            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "💥Game Over!!!";

        }
    }
*/
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.floor(Math.random()*20)+1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = "start guessing";
    displayMessage("start guessing");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; 
    // document.querySelector('.score').textContent = score;
    scores(score);
    document.querySelector('.highscore').textContent = highscore;

});