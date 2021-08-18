$(document).ready(function() {
    $('[data-delay]').each(function() {
        $(this).css({
            'animation-delay': $(this).data('delay')
        });
    });

    $('#welcome').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    });

    var $nav = $('.navbar');
    var navTop = $nav.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= navTop) {
            $nav.addClass('fixed-top');
        } else {
            $nav.removeClass('fixed-top');
        }
    });

    $('#testimonial').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        autoplayHoverPause: true,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    });

    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        disableOn: 700,

    });

    // spy and scroll menu boogey
    $(".navbar ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 84
        }, 500);

    });

    function preloadImage(imgEntry, observer) {
        var $img = $(imgEntry.target);
        $img.attr('src', $img.data('src'));
        $img.css({
            opacity: 1
        });
        observer.unobserve(imgEntry.target);
    }
    var images = $('[data-src]');
    var options = {
        margin: '0px 0px 300px 0px',
        thresholds: 1
    }
    var observer = new IntersectionObserver(function(entries, ob) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                return;
            }
            preloadImage(entry, ob);
        });
    }, options);

    images.each(function() {
        observer.observe(this);
    });

    $('.nav-link').click(function() {
        if ($(window).outerWidth() <= 992) {
            $('.close-wrapper .navbar-toggler').click();
        }
    });
});