const out = document.querySelector('.out')


function plus() {
	let sum1 = document.querySelector('.one').value
	let sum2 = document.querySelector('.two').value
	if (!sum1 || !sum2 === '') {
		alert('请输入数字!')
	} else {
		document.querySelector('.number').innerText = Number(sum1) + Number(sum2)
	}
}

out.addEventListener('click', plus, false)