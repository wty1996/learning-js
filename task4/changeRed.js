var click2 =document.querySelector('.click2')
var div =document.querySelectorAll('.div')
function changeRed() {
	for (var i = 0; i < div.length; i++) {
		div[i].style.background = 'red'
	}
}	

click2.addEventListener('click', changeRed, false)
