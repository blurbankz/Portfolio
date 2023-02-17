
// NavBar
$(document).ready(function () {
  $(".btn-hamburger").on("click", function () {
    $("nav ul").toggleClass("nav-active");
  })
});


// ScrollReveal Animations
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.home .content', { origin: "left", delay: 500 });
ScrollReveal().reveal('.home .image', { origin: "right", delay: 500 });
ScrollReveal().reveal('.about .row, .skills .row, .portfolio .row, .contact .row', { origin: "bottom", delay: 500 })