// переключатель для туристической программы по дням
$(document).ready(function() {
    $('.days li').click(function() {
        if (!$(this).hasClass('current')) {
            $('.days li').removeClass('current');
            $(this).addClass('current');
            var f = $(this).attr('filter');
            $('.shedule').hide(300);
            $('.shedule[filter = ' + f + ']').show(300);
            //                $('.block-programm>.img>.img1').css('background-image', 'url(img/program-' + f + '.jpg)');
            $('.block-programm>.img>.img1').animate({
                'opacity': '0'
            }, 150, function() {
                $('.block-programm>.img>.img1').css('background-image', 'url(img/program-' + f + '.jpg)');
                $('.block-programm>.img>.img1').animate({
                    'opacity': '1'
                }, 150);
            });
        }
    })
    //  подключаем слайдер для фото
    $('.slick1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        appendArrows: '.arrow1',
        prevArrow: '<a class = "pre"></a>',
        nextArrow: '<a class = "next"></a>'
    });
    $('.slick2').slick({
        infinite: true,
        appendArrows: '.arrow2',
        prevArrow: '<a class = "pre"></a>',
        nextArrow: '<a class = "next"></a>',
        rows: 1
    });
});
//отправка формы
function send() {
    if ($('input[name="name"]').val() != '' && $('input[name="contact"]').val() != '') {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $('form').serialize(),
            success: function(result) {
                alert(result);
            }
        })
        window.location = '#';
        $('input[type="text"]').val('');
    }
}