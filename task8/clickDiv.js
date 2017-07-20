var paraOne =document.querySelector('.paraOne')
var paraTwo =document.querySelector('.paraTwo')
var paraThree =document.querySelector('.paraThree')
var paraFour =document.querySelector('.paraFour')

function warning() {
  var one =document.querySelector('.one')
  alert  ('one.innerHtml')
}
paraOne.addEventListener('click', warning, false)

function warning2() {
  var two =document.querySelector('.two')
  alert  ('two.innerHtml')
}
paraTwo.addEventListener('click', warning2, false)

function warning3() {
  var three =document.querySelector('.three')
  alert  ('three.innerHtml')
}
paraThree.addEventListener('click', warning3, false)

function warning4() {
  var four =document.querySelector('.four')
  alert  ('four.innerHtml')
}
paraFour.addEventListener('click', warning4, false)
