const li = document.querySelectorAll('li')

function change(e) {
	e.currentTarget.querySelector('.one').style.display = 'block'
  e.currentTarget.querySelector('p').style.display = 'none'

	}

function change2(e) {
	e.currentTarget.querySelector('.one').style.display = 'none'
	e.currentTarget.querySelector('p').style.display = 'block'

}

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('mouseover', change, false)
	li[i].addEventListener('mouseout', change2, false)
}
