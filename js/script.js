$(document).ready(function() {
    $(".btn-hamburger").on("click",  function(){
        $("nav ul").toggleClass("nav-active");
    })
});

function myFunction(x) {
    x.classList.toggle("change");
  }
  
  