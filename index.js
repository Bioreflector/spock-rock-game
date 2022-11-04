let youScore = 0;
let computerScore = 0;
const palyerButtons = document.querySelectorAll('.player-butoon')
const youChoseOut = document.querySelector('.you-choise')
const comuterChoiseOut = document.querySelector('.computer-choise')
const playerScoreOut = document.querySelector('.player-score')
const computerScoreOut = document.querySelector('.computer-score')
const massage = document.querySelector('.massage')
const computerButtons = document.querySelectorAll('.computer-button')
palyerButtons.forEach(button => button.addEventListener('click' , startGame))
// palyerButtons.forEach(button => button.addEventListener('click' , toogleClassSelected))

function startGame(event){
    const {target} = event
    const playerBtn = target
    const computerBtm = computerChose()
    const playerValue = target.title
    const computerValue = computerChose().title
    toogleClassSelected(playerBtn , computerBtm)
    game(playerValue , computerValue)
    outResult(playerValue , computerValue)
}
function toogleClassSelected(playerBtn , computerBtm){
    palyerButtons.forEach(button => button.classList.remove('selected'))
    playerBtn.classList.add('selected')
    computerButtons.forEach(button => button.classList.remove('selected'))
    computerBtm.classList.add('selected')   
}
function outResult(playerValue , computerValue){
    youChoseOut.innerText = ` --- ${playerValue}`
    playerScoreOut.innerText = youScore
    comuterChoiseOut.innerText = `---${computerValue}`
    computerScoreOut.innerText = computerScore
}
function game(playerValue , computerValue){
    if(playerValue == 'Rock' && computerValue == 'Scissors'||
        playerValue == 'Paper' && computerValue == 'Rock' ||
        playerValue == 'Scissors' && computerValue == 'Paper'){
        youScore++
        massage.innerText = 'You Win'
    }
    else if(playerValue == 'Rock' && computerValue == 'Rock'||
             playerValue == 'Paper' && computerValue == 'Paper'||
             playerValue == 'Scissors' && computerValue == 'Scissors'){
        massage.innerText = 'Oo'
    }
    else{
        computerScore++
        massage.innerText = 'You Lose'
    }
}

function random(max){
    return Math.floor(Math.random() * max)
}
function computerChose(){
    const randomElement = computerButtons[random(computerButtons.length)]
    return randomElement
}
