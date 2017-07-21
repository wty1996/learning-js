var textOne = document.querySelector('.textOne').value

var ok = document.querySelector('.ok')
var res = document.querySelector('.res')
var box = document.querySelector('.box')

function first() {
	var textTwo = document.querySelector('.textTwo').value
	box.style[textOne] = textTwo
}
ok.addEventListener('click',first, false)
function second() {
	box.style = 'reset'
}
res.addEventListener('click',second, false)
