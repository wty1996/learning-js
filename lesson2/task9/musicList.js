var list = document.querySelector('.row')
var singList = document.querySelector('.singList')

function hidden() {
	if (singList.className === 'singList') {
		singList.className += ' disappeare'
	} else {
		singList.className = 'singList'
	}
}

list.addEventListener('click', hidden, false)
