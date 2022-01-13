
var header= document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight
//Open/close moible menu
mobileMenu.onclick = function name() {
  var isClose = header.clientHeight === headerHeight
  if(isClose){
    header.style.height= 'auto'
  }
  else{
    header.style.height= null
  }
  
}
// Close menu 
var navItems =document.querySelectorAll('#nav li a[href*="#"]')
// var navItems =document.querySelectorAll('.nav-items')
console.log(navItems)
for(var i=0; i< navItems.length;i++){
  
  var navItem = navItems[i]
  navItem.onclick= function name() {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParentMenu){
      event.preventDefault();
    }
    
    else{
      
      header.style.height = null
    }
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500); 
}

var buyBtns = document.querySelectorAll('.js-buy-ticket')
var buySection = document.querySelector('.js-modal')
var modalCoontainer =document.querySelector('.modal-container')
var closeModalBtn = document.querySelector('.js-model-close')
function buyTicket(){
    buySection.classList.add('open')

}
function HideBuyTicket(){
    buySection.classList.remove('open')
   

}

for(var buyBtn of buyBtns){
    buyBtn.addEventListener('click', buyTicket)
}
closeModalBtn.addEventListener('click', HideBuyTicket)
buySection.addEventListener('click',HideBuyTicket)
modalCoontainer.addEventListener('click', function (event) {
    event.stopPropagation();
    
})



