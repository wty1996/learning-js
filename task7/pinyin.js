var button = document.querySelector('.input')
var choose = document.querySelector('.choose')
function hidden() {
  choose.className = "choose"
}

button.addEventListener('click', hidden, false)

function appear() {
  choose.className += " appear"
}

button.addEventListener('click', appear, false)

function repeat() {
  choose.className += " chooseAgain"
}

button.addEventListener('click', repeat, false)
