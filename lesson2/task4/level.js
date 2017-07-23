var button = document.querySelector('.out')
var two = document.querySelector('.two')
var close = document.querySelector('.close')

function warning() {
	if (two.className === "two") {
		two.className += " change"
	} else {
		two.className = "two"
	}
}

button.addEventListener('click', warning, false)

function hidden() {
	two.className = "two"
}

close.addEventListener('click', hidden, false)