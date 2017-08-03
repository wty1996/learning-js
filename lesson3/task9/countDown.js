let min = document.querySelector('.min')
let second = document.querySelector('.second')
let start = document.querySelector('.start')
let appear = document.querySelector('.appear')
let hidden = document.querySelector('.hidden')


function change() {
	if (start.className === 'start') {
		start.className += ' end'
		start.style.background = 'green'
		appear.style.visibility = 'visible'
		hidden.style.visibility = 'hidden'
	} else {
		start.className = 'start'
		start.style.background = 'red'
		appear.style.visibility = 'hidden'
		hidden.style.visibility = 'visible'
	}
}


setInterval(function() {
	second.innerText -= 1
	if (second.innerText <= 0) {
		min.innerText = 00
		second.innerText = 00
	}
}, 1000)
start.addEventListener('click', change, false)