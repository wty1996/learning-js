var button = document.querySelector('.input')
var choose = document.querySelector('.choose')

function hidden() {
	if(choose.className === "choose") {
  choose.className += " appear"
  } else {
	choose.className = "choose"
  }
}
button.addEventListener('click', hidden, false)

var shut = document.querySelector('.close')

function close() {
  choose.className = "choose"
}
shut.addEventListener('click', close, false)