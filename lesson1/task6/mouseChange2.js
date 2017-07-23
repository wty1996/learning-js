var quary = document.querySelector('.quary')
var time = document.querySelector('.time')
var appear = document.querySelector('.appear')

function mouseover() {
	appear.className += " change"

}
quary.addEventListener('mouseover', mouseover, false)
time.addEventListener('mouseover', mouseover, false)

function mouseout() {
	appear.className = "appear"
}
quary.addEventListener('mouseout', mouseout, false)
time.addEventListener('mouseout', mouseout, false)