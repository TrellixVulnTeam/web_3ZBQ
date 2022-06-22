$('a.link_arrow').click(function(){
    let a = $('section.places').offset().top + 'px';
    $('html, body').animate({scrollTop: a}, 800)
});

$('div.suggestions_box').click(function(){
    let style = $(this).attr("style").split(' ')[1];
    let title = $(this).attr("title");   
    let text = $(this).attr("text"); 
    let price = $(this).attr("price");  

    $('div.sec-card').toggleClass('visible');
    $('body').toggleClass('overflow');
    $('div.sec-card .sec-card_title').html(title);
    $('div.sec-card .sec-card_image').css('background-image', style)
    $('div.sec-card .sec-card_text').html(text);
    $('div.sec-card .sec-card_price').html(price);
});
$('.sec-card .cross').click(function(){
    $('div.sec-card').removeClass('visible');
    $('body').removeClass('overflow');
});
