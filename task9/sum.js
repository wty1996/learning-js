var sum = document.querySelector('.sum').value.split(',')
var plus = document.querySelector('.plus')
var a = 0
function resq() {
  for (var i = 0; i < sum.length; i++) {
    a += Number(sum[i])
  }
	document.querySelector('.finish').innerText = a
	a = 0
}

plus.addEventListener('click',resq, false)
