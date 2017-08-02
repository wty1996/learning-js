var num = document.querySelectorAll('.num')
var res = document.querySelectorAll('.res')
var sym = document.querySelectorAll('.sym')
var equ = document.querySelectorAll('.equ')
var screen = document.querySelector('.screen').innerText


function appear() {
	for (var i = 0; i < num.length; i++) {
		a = Number(num[i])
	}
	screen = a
	num.addEventListener('click', appear, false)


	if (screen === a) {
		screen = a
	} else {
		screen = b
	}


}

function count() {
	for (var i = 0; i < sym.length; i++) {
		b = Number(sym[i])
	}
	screen = b
	sym.addEventListener('click', count, false)
}

function eq() {
	c = Number(equ[i])
	screen = c
	equ.addEventListener('click', eq, false)
}


function reset() {
	screen = "0"
	res.addEventListener('click', reset, false)
}
