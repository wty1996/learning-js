let one = document.querySelector('.one')
let fi = document.querySelector('.fi')
let content = document.querySelector('.content')
let three = document.querySelector('.three')
let th = document.querySelector('.th')
let two = document.querySelector('.two')
let se = document.querySelector('.se')

function chooseChange() {
	fi.style.display = 'block'
	se.style.display = 'none'
	th.style.display = 'none'
	one.className += " changeOne"
	two.className = 'two'
	three.className = 'three'
}

function chooseChange2() {
	se.style.display = 'block'
	fi.style.display = 'none'
	th.style.display = 'none'
	one.className = "one"
	two.className += " changeOne"
	three.className = 'three'
}

function chooseChange3() {
	th.style.display = 'block'
	fi.style.display = 'none'
	se.style.display = 'none'
	three.className += " changeOne"
	one.className = "one"
	two.className = 'two'
}

one.addEventListener('mouseover', chooseChange, false)
two.addEventListener('mouseover', chooseChange2, false)
three.addEventListener('mouseover', chooseChange3, false)