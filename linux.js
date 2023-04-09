// let navbar = document.getElementById("items");
// window.onscroll = function(){
//     if(window.pageYOffset>=navbar.offsetHeight){
//         navbar.classList.add("sticky");
//     }
//     else{
//         navbar.classList.remove("sticky");
//     }
// }
var navbar = document.getElementById("navbar");
var floating1 =document.getElementById("floating");


window.onscroll = function () {
  if (window.pageYOffset >= navbar.offsetHeight) {
    navbar.classList.add("sticky");
    floating1.classList.add("floating1");
} else {
    navbar.classList.remove("sticky");
    floating1.classList.remove("floating1");
  }
};
