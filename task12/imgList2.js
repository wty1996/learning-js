var one = document.querySelectorAll('.one')

function on(e) {
  e.currentTarget.className = "one"
} 

function out(e) {
  e.currentTarget.className += " changeOne"
} 

for (var i = 0; i < one.length; i++) {
one[i].addEventListener('mouseover', out, false)
one[i].addEventListener('mouseout',on, false)
}	
