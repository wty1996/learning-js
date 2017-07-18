var changeWidth = document.querySelector('.changeWidth')
var box = document.querySelector('.box')
function change (){
    box.style.width = '120px'
}
changeWidth.addEventListener('click', change, false)


var changeHeight = document.querySelector('.changeHeight')
function change2 (){
    box.style.height = '120px'
}
changeHeight.addEventListener('click', change2, false)


var changeColor = document.querySelector('.changeColor')
function change3 (){
    box.style.background = 'red'
}
changeColor.addEventListener('click', change3, false)


var hidden = document.querySelector('.hidden')
function change4 (){
    box.style.visibility = 'hidden'
}
hidden.addEventListener('click', change4, false)


var reset = document.querySelector('.reset')
function change5 (){
    box.style = 'reset'
}
reset.addEventListener('click', change5, false)
