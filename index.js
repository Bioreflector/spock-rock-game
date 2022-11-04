let youScore = 0;
let computerScore = 0;

const palyerButtons = document.querySelectorAll('.player-butoon')
const youChoseOut = document.querySelector('.you-choise')
const comuterChoiseOut = document.querySelector('.computer-choise')

const valueGameArr =['rock' , 'paper' , 'scissors']

palyerButtons.forEach(button => button.addEventListener('click' , startGame))


function startGame(){
    const playerValue = this.id
    const computerValue = computerChose()
    console.log(computerValue)
    console.log(playerValue)
}

function random(max){
    return Math.floor(Math.random() * max)
}

function computerChose(){
    const computerValue = valueGameArr[random(valueGameArr.length)]
    comuterChoiseOut.innerText = computerValue
    return computerValue
}
