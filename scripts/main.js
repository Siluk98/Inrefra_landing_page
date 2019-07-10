$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('.nav-item-local').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.nav-item-local').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

    });

   // $('#pros').css('margin-top', $('.navbar').height + 10);

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    console.log($('.navbar .nav-item-local'));

    $('.navbar .nav-item-local').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar ul li .nav-item-local').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });

    var offset = $('.navbar').position.top;

    if (scrollPos >= offset) {
        $('.navbar').classList.add("navbar-subpage")
    } else {
        $('.navbar').classList.remove("navbar-subpage");
    }
}