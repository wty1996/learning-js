var text = document.querySelector('.content')
var confirmButton = document.querySelector('.confirmButton')
function showMessage( ){
	var blank = document.querySelector('.blank')
	blank.innerText = text.value
}

confirmButton.addEventListener('click', showMessage, false)