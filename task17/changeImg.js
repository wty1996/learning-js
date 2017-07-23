const same =document.querySelectorAll('.same')
const a = document.querySelector('.big')
function change(e) {
	a.src = e.target.src
}

for (var i = 0; i < same.length; i++) {
	same[i].addEventListener('mouseover', change , false)
}