const judgement = document.querySelector('.judgement')

function length() {
	const one = document.querySelector('.one').value
	if (!one) {
		alert('请输入数值!')
		return
	}
	const c = one.length
	alert(`这是一个${c}位数!`)
}
judgement.addEventListener('click', length, false)