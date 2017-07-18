var button = document.querySelector('.button')
function showMessage() {
	var text2 = document.querySelector('.text2')
	var text1 = document.querySelector('.text1')
	alert(text1.value)
	alert(text2.value)
}

button.addEventListener('click', showMessage, false)
