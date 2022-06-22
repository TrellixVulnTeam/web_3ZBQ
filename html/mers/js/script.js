$('.nav_bar').click(function(){
    $('body').toggleClass('active');
    $('.navbar_list').toggleClass('active');
    $('html').scrollTop(0);
})

$(document).ready(function(){
    $('.slider_inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
  });