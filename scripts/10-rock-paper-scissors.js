let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//display the score
updateScoreElement();



//we can also use !score here and default operator on the top.
/*if (score === null) {
score = {
    wins: 0,
    losses: 0,
    ties: 0
}
}

*/

//instead of always 0, we can parse it back into JS object and use it in the score. **para dili mag start og 0 if i refresh

//console.log(JSON.parse(localStorage.getItem('score')));

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    const message = `You picked ${playerMove}. Computer picked ${computerMove}.`;
    let result = '';


    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose!';

        } else if (computerMove === 'paper') {
            result = 'You win!';
            
        } else {
            result = 'It\'s a tie!';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win!';
        
        } else if (computerMove === 'paper') {
            result = 'It\'s a tie!';
            
        } else {
            result = 'You lose!';
        }

    } else {
        if (computerMove === 'rock') {
            result = 'It\'s a tie!';

        } else if (computerMove === 'paper') {
            result = 'You lose!';
            
        } else {
            result = 'You win!';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;

    }else if (result === 'You lose!') {
        score.losses +=1;

    }else {
        score.ties +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));




//display and update the score
updateScoreElement();

document.querySelector('.js-result')
    .innerHTML = result;

document.querySelector('.js-move')
    .innerHTML = message;


document.querySelector('.js-move')
    .innerHTML = ` You
    <img class="move-icon" src="assets/${playerMove}-emoji.png" alt="rock"> 
    :
    <img class="move-icon" src="assets/${computerMove}-emoji.png" alt="scissors">
    Computer`;

// alert(`${message} ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}

function showResult() {
    document.querySelector('.js-result')
        .innerHTML = `Hello ${result}`;
}


function pickComputerMove() {
    let computerMove;
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;

}