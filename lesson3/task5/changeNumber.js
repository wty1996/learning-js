const changeNumber = document.querySelector('.changeNumber')
let i = 0

function change() {
	changeNumber.innerText = ++i
}
setInterval(change, 1000)