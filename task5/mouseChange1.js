var box =document.querySelector('.box')

function mouseover() {
  box.className += " red"
} 
box.addEventListener('mouseover',mouseover, false)

function mouseout() {
	box.className = "box"
}
box.addEventListener('mouseout',mouseout, false)	
