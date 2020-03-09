/*
$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y < $(".about").height()) {
        $('.soap').fadeOut();
    } else {
        $('.soap').fadeIn(3000);
    }

});

$(".soap").each(function(index) {
    $(this).delay(100*index).fadeIn(300);
});
*/

$(".mousearrow--A").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
    return false;
});

$('.soap').fadeOut()
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > $(".about").height() - 100) {
        $('.soap').each(function(index,i)
        {
            $(this).delay(index * 200).fadeIn(3000);
        });
    } 
});

$(window).scroll(function(){
    var scroll_position = $(window).scrollTop();
    $('.soap__box--bordertop').css({
        'background-position-x': + scroll_position + 'px',
    })
    $('.soap__box--borderbot').css({
        'background-position-x': + scroll_position + 'px',
    })
    $('.soap__box').css({
        'background-position-x': + scroll_position + 'px',
    })
})
