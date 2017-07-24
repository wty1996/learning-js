const button = document.querySelector('.button')
let i = 0

function warning() {
	i += 1
	alert(i)
	document.querySelector('.one').innerText = i
}

button.addEventListener('click', warning, false)
