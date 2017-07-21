let para = document.querySelectorAll('.para')

function warning(e) {
	alert(e.target.innerHTML)
}
for (var i = 0; i < para.length; i++) {
	para[i].addEventListener('click', warning, false)
}