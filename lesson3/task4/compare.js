const change = document.querySelector('.change')


function compare() {
	let a = document.querySelector('.one').value
	let b = document.querySelector('.two').value
	if (!a || !b) {
		alert('请输入数字!')
		return
	}
	if (parseInt(a) > parseInt(b)) {
		document.querySelector('.number').innerText = parseInt(a)
	} else {
		document.querySelector('.number').innerText = parseInt(b)
	}
}

change.addEventListener('click', compare, false)