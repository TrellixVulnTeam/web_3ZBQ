$('.bar').click(function(){
    $('nav ul').toggleClass('active');
    $('body').toggleClass('active');
    $('html').scrollTop(0);
});