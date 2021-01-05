scrollTop() >= "4rem";


$(window).scroll(function () {
    if ($(window).scrollTop() >= "4rem") {
        $('nav').addClass('fixed-header');

    }
    else {
        $('nav').removeClass('fixed-header');

    }
});
