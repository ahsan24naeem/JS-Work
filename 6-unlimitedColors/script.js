const getColourfunction = function(){

    const hex = '0123456789ABCDEF'
    let colour = '#'

    for (let i = 0; i < 6; i++) {

        let rand = Math.floor(Math.random() * 16)
        colour += hex[ rand ];
    }
    return colour;
}
let intervalID
function startChanging(){

    intervalID = setInterval(function(){
        let colour = getColourfunction()
        document.body.style.backgroundColor = colour
    }, 4000)

}

function endChanging(){
    clearInterval(intervalID)
    intervalID = null
}

const start = document.querySelector('#start').addEventListener('click', startChanging)
const end = document.querySelector('#stop').addEventListener('click', endChanging)