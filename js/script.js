$(document).ready(function() {
    $(".btn-hamburger").on("click",  function(){
        $("nav ul").toggleClass("nav-active");
    })
});

function myFunction(x) {
    x.classList.toggle("change");
  }
  

  $(document).ready(function () {
  
    $(".nav__link").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  