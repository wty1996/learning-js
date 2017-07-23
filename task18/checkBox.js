const same = document.querySelectorAll('.same')
const all = document.querySelector('.all')
const dif = document.querySelector('.dif')
const choose = document.querySelector('.choose')

function change() {
	for (var i = 0; i < same.length; i++) {
		same[i].checked = !same[i].checked
	}
  choose.className === 'choose' ? `${choose.className} no` : 'choose'
}

function change2() {
	for (var i = 0; i < same.length; i++) {
		same[i].checked = !same[i].checked
		all.checked = !all.checked
	}
	all.checked = !all.checked
	choose.className = choose.className === 'choose' ? `${choose.className} no` : 'choose'
}

all.addEventListener('click', change, false)
dif.addEventListener('click', change2, false)