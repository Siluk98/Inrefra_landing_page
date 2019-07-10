$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('.nav-item-local').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.nav-item-local').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.childNodes[1].hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

    });

    if ($('#pros').length) {
        var heightValue = $('.navbar').height() + 31;
        $('#pros').css('padding-top', heightValue);
    }

});

function onScroll(event) {
    var scrollPos = $(window).scrollTop();

    $('.navbar .nav-item-local .nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
            $(this).parent().removeClass("active");
            currLink.parent().addClass("active");
        } else {
            currLink.parent().removeClass("active");
        }
    });

    if ($('#offer').length) {
        var offset = $('#offer').offset().top;

        if (scrollPos >= offset) {
            $('.navbar').addClass("navbar-subpage")
        } else {
            $('.navbar').removeClass("navbar-subpage");
        }
    }
}