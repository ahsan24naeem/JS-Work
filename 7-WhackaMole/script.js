

let board = document.getElementById("gameBoard")
let score = document.querySelector('#score')
let playGameButton = document.querySelector('#newButton')
let currentPlant = ''
let currentMole = ''

let missSound = new Audio('fail.mp3')

function makeDivs() {
    for (let i = 0; i < 9; i++) {
        let temp = document.createElement("div")
        temp.id = i.toString()
        board.appendChild(temp)
    }
}
makeDivs()

let moleinterval;
let plantinterval;
let playButton = document.getElementById("playButton")
let playGame = false
function startGame() {
    moleinterval = setInterval(setMole, 1000);
    plantinterval = setInterval(setPlant,2000)
    playButton.setAttribute("disabled", true)
    if(!playGame){
    board.childNodes.forEach(function (e) {
        e.addEventListener("click", function () {
            checkTile(e)
        })
    })
}
    playGame = true
    score.innerHTML = '0'
    resetGameButton.removeAttribute("disabled")
}
playButton.addEventListener("click", startGame)

let resetGameButton = document.getElementById("newButton")
resetGameButton.addEventListener("click", function () {
    clearInterval(moleinterval)
    clearInterval(plantinterval)
    board.childNodes.forEach(function (e) {
        e.innerHTML = ''
    })
    score.innerHTML = '0'
    playButton.removeAttribute('disabled');
    currentMole = ''
    currentPlant = ''
    resetGameButton.setAttribute("disabled", true)
})

function checkTile(e) {
    
    if (e.id === currentMole.id){
        let x = parseInt(score.innerHTML)
        score.innerHTML = `${x+=10}`
    }
    else if (e.id === currentPlant.id){
        gameOver()
        missSound.play()
    }
    else{
        return
    }
}

function gameOver() {
    let temp = score.innerHTML
    score.innerHTML = `Game Over. Score = ${temp}`
    clearInterval(moleinterval)
    clearInterval(plantinterval)

    board.childNodes.forEach(function (e) {
        e.innerHTML = ''
    })
    currentMole = ''
    currentPlant = ''
    }

function getRandomTile() {
    return Math.floor(Math.random()*9).toString()
}

function setMole() {
    
    let mole = document.createElement("img")
    mole.src = "Mole.png"
    let rand = getRandomTile()

    if(rand === currentPlant.id ){
        return
    }

    if (currentMole != ''){
        if (currentMole.id === rand){
            return
        }
        currentMole.innerHTML = ''
    }

    currentMole = document.getElementById(`${rand}`)
    currentMole.appendChild(mole)
}

function setPlant() {
    
    let plant = document.createElement("img")
    plant.src = "plant.png"

    let rand = getRandomTile()
    
    if(rand === currentMole.id){
        return
    }

    if (currentPlant != ''){
        if (currentPlant.id === rand){
            return
        }
        currentPlant.innerHTML = ''
    }

    currentPlant = document.getElementById(`${rand}`)
    currentPlant.appendChild(plant)
}

function newGame() {
    score.innerHTML = '0'
}