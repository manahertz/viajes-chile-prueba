// SCROLL //
$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 50
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

// CAMBIO COLOR NAVBAR //
$(window).scroll(function(){
    $("nav").toggleClass("scrolled",$(this).scrollTop()>70);
});

// POPOVERS BOOTSTRAP // 
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// TOOLTIPS BOOTSTRAP //
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})