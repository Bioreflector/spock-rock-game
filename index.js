let youScore = 0;
let computerScore = 0;

const palyerButtons = document.querySelectorAll('.player-butoon')
const youChoseOut = document.querySelector('.you-choise')
const comuterChoiseOut = document.querySelector('.computer-choise')
const playerScoreOut = document.querySelector('.player-score')
const computerScoreOut = document.querySelector('.computer-score')
const massage = document.querySelector('.massage')
console.log(massage)

const valueGameArr =['rock' , 'paper' , 'scissors']

palyerButtons.forEach(button => button.addEventListener('click' , startGame))


function startGame(){
    const playerValue = this.id
    youChoseOut.innerText = this.id
    const computerValue = computerChose()
    game(playerValue , computerValue)
}

function game(playerValue , computerValue){
    if(playerValue == 'rock' && computerValue == 'scissors'){
        youScore++
        playerScoreOut.innerText = youScore
        massage.innerText = 'You Win'
    }
    else if(playerValue == 'paper' && computerValue == 'rock'){
        youScore++
        playerScoreOut.innerText = youScore
        massage.innerText = 'You Win'
    }
    else if(playerValue == 'scissors' && computerValue == 'paper'){
        youScore++
        playerScoreOut.innerText = youScore
        massage.innerText = 'You Win'
    }
    else if(playerValue == 'rock' && computerValue == 'rock'){
        massage.innerText = 'Oo'
    }
    else if(playerValue == 'paper' && computerValue == 'paper'){
        massage.innerText = 'Oo'
    }
    else if(playerValue == 'scissors' && computerValue == 'scissors'){
        massage.innerText = 'Oo'
    }
    else{
        computerScore++
        computerScoreOut.innerText = computerScore
        massage.innerText = 'You Lose'
    }
}

function random(max){
    return Math.floor(Math.random() * max)
}
function computerChose(){
    const computerValue = valueGameArr[random(valueGameArr.length)]
    comuterChoiseOut.innerText = computerValue
    return computerValue
}
