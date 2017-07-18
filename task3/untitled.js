var red =document.querySelector('.red')
function changeSkin () {
	var list = document.querySelector('.list')
	list.style.background = 'red'
	body.style.background = 'pink'
}

red.addEventListener('click', changeSkin, false)

var green =document.querySelector('.green')
function changeSkin2 () {
	var list = document.querySelector('.list')
	list.style.background = 'green'
	body.style.background = 'pale green'
}

green.addEventListener('click', changeSkin2, false)

var black =document.querySelector('.black')
function changeSkin3 () {
	var list = document.querySelector('.list')
	list.style.background = 'black'
	body.style.background = 'gray'
}

black.addEventListener('click', changeSkin3, false)
