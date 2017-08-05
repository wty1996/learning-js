const min = document.querySelector('.min')
const second = document.querySelector('.second')
const start = document.querySelector('.start')
const appear = document.querySelector('.appear')
const hidden = document.querySelector('.hidden')
const end = document.querySelector('.end')

function change() {
	if (start.className === 'start') {
		start.className += ' end'
		start.style.background = 'green'
		appear.style.visibility = 'visible'
		hidden.style.visibility = 'hidden'
		clearInterval(function() {
			second.innerText -= 0
			if (second.innerText <= 0) {
				min.innerText = 00
				second.innerText = 00
			}
		})
	} else {
		start.className = 'start'
		start.style.background = 'red'
		appear.style.visibility = 'hidden'
		hidden.style.visibility = 'visible'
	}
	setInterval(function() {
		second.innerText -= 1
		if (second.innerText <= 0) {
			min.innerText = 00
			second.innerText = 00
		}
	}, 1000)
}

start.addEventListener('click', change, false)
