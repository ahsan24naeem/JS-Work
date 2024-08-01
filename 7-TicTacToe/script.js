const boxes = document.querySelectorAll(".cell")
const status = document.querySelector("#gameStatus")
const newButton = document.querySelector("#newGame")
let playGame = true
console.log("Welcome to the Game");
const sign = ['O','X']
let turn = Math.floor(Math.random()*2)
console.log(sign[turn]);
let turnCount = 0
const winningPossibilties = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8],[6,4,2]] 


if(playGame){
    boxes.forEach(function(cell){
        cell.addEventListener("click", function (e) {
            if (playGame == false) return;
            console.log("cell id = ", cell.id);
            if (cell.textContent === "") {
                turnCount++
                cell.textContent = sign[turn]
                changePlayer()
                Draw()
                checkWinner()
            }
        })
    })
}

newButton.addEventListener('click', function (){
    playGame = true
    turnCount = 0
    boxes.forEach(function (e) {
        e.innerHTML = ''
    })
    status.innerHTML = "Start Game"
})
function checkWinner() {
    
   for (let i = 0; i < winningPossibilties.length; i++) {
    const line = winningPossibilties[i];
    const box1 = boxes[line[0]].innerHTML
    const box2 = boxes[line[1]].innerHTML
    const box3 = boxes[line[2]].innerHTML
    if (box1 === '' || box2 === '' || box3 === ''){
        continue
    }
    else if (box1 === box2 && box2 === box3){
        playGame = false
        status.textContent = `Player ${box1} wins! 🎊`
        turnCount = 0
        break
    }
    }
}
function Draw() {
    
    if(turnCount === 9){
        status.textContent = `It's a draw!`
        playGame = false
    }
}

function changePlayer() {
    if (sign[turn] === 'O'){
        sign[turn] = 'X'
        status.innerHTML = `Player 'X' Turn`
    }
    else{
        sign[turn] = 'O'
        status.innerHTML = `Player 'O' Turn`
    }
}