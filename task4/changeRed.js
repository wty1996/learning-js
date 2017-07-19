var aaa = document.querySelector('.click2')
var div = document.querySelectorAll('.div')
function changeRed() {
	for (var i = 0; i < div.length; i++) {
		div[i].style.background = 'red'
	}
}

aaa.addEventListener('click', changeRed, false)
