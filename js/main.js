$(function(){
    $('.hands__0').on('click', function (e) {
        e.preventDefault();

        $('.hands__0').removeClass('hands__active')
        $(this).addClass('hands__active');

        //$('.hands__selector__info').removeClass('hands__selector__info__active');
        //$($(this).attr('href')).addClass('hands__selector__info__active');
    })

    $('.courusele__flex').slick({
        dots:true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,


    });

});