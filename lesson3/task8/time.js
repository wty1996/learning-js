let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let second = document.querySelector('.second')

setInterval(function() {
	var time = new Date()
	hour.innerText = time.getHours()
	min.innerText = time.getMinutes()
	second.innerText = time.getSeconds()
}, 1000)