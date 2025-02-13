
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js
    const typed = new Typed('.auto-type', {
        strings: ['Vhinz Axl C. Baja', 'a front-end developer.'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });
 
 
 $(document).ready(function(){
 
    $('#menu').click(function(){
     $(this).toggleClass('fa-times');
     $('header').toggleClass('toggle');
    }); 
 
    $(window).on('scroll load',function(){
 
     $('#menu').removeClass('fa-times');
     $('header').removeClass('toggle');
 
    });
 
 
    $('a[href*="#"]').on('click',function(e){
 
       e.preventDefault();
 
       $('html, body').animate({
 
          scrollTop : $($(this).attr('href')).offset().top,
 
 
       },
          500,
          'linear'
       );
 
    });
 
 });
 
 });