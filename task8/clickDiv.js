let para = document.querySelectorAll('.para')

function warning(e) {
  for (var i = 0; i < para.length; i++) {
	para[i].style = alert
	}	
	alert(e.target.innerHTML)  
}
para.addEventListener('click', warning, false)
