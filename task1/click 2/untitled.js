var changeWidth = document.querySelector('.changeWidth')
function change (){
    var box = document.querySelector('.box')
    box.style.width = '120px'
}
changeWidth.addEventListener('click', change, false)


var changeHeight = document.querySelector('.changeHeight')
function change2 (){
    var box = document.querySelector('.box')
    box.style.height = '120px'
}
changeHeight.addEventListener('click', change2, false)


var changeColor = document.querySelector('.changeColor')
function change3 (){
    var box = document.querySelector('.box')
    box.style.background = 'red'
}
changeColor.addEventListener('click', change3, false)


var hidden = document.querySelector('.hidden')
function change4 (){
    var box = document.querySelector('.box')
    box.style.visibility = 'hidden'
}
hidden.addEventListener('click', change4, false)


var reset = document.querySelector('.reset')
function change5 (){
    var box = document.querySelector('.box')
    box.style = 'reset'
}
reset.addEventListener('click', change5, false)
