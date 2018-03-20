$(document).ready(function () {


    if ($(window).width() > 1180) {

        $('.wrapper-hero__image').fadeIn(800);
        $('.hero-content h1').fadeIn(1500);
        $('.hero-content__text').fadeIn(1500).css('display', 'inline-block');
        $('.hero-content__description').fadeIn(2000);
        $('.hero-content__link').fadeIn(3000).css('display', 'block');
    }



    // MOBILE MENU

    $('.btn-menu').on('click', function (e) {
        e.preventDefault();

        $('.wrapper-popup').fadeIn(400,
            function () {
                $('body').css('overflow', 'hidden');
                $('.wrapper-header')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });
    $('.header-close, .wrapper-popup').on('click', function () {
        $('body').css('overflow', 'auto');
        $('.wrapper-header')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.wrapper-popup').fadeOut(400);
                }
            );
    });


    // Navigation Scroll Spy

    function navScroll() {

        "use strict";

        var lastId,
            topMenu = $(".header-nav"),
            topMenuHeight = topMenu.outerHeight()+15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

// Bind click handler to menu items
// so we can get a fancy scroll animation
        menuItems.click(function(e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
        $('.header-nav li:last-of-type').on('click', function () {
            $(this).addClass('active')
        });

// Bind to scroll
        $(window).scroll(function(){
            // Get container scroll position
            var fromTop = $(this).scrollTop()+topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#"+id+"']").parent().addClass("active");
            }
        });
    }
    navScroll();

    // STICKY HEADER

    $(window).scroll(function () {

        if ($(window).width() > 768) {

            if ($(this).scrollTop() > 50
            ) {
                $('.wrapper-header').addClass('sticky');
                $('.sticky').animate({
                    opacity: 1
                }, 1500);
            }
            else {
                $('.wrapper-header').removeClass('sticky');
            }

        }
        if ($(this).scrollTop() > 50
        ) {
            $('.btn-menu').addClass('sticky');
            $('.sticky').animate({
                opacity: 1
            }, 1500);
        }
        else {
            $('.btn-menu').removeClass('sticky');
        }

    });


    // NAVIGATION SCROLL


    $('.header-nav > li a').on('click', function () {


        if ($(window).width() < 768) {

            $('.wrapper-header')
                .animate({opacity: 0}, 200,
                    function () {
                        $('.wrapper-header').css('display', 'none');
                        $('.wrapper-popup').fadeOut(400);
                        $('body').css('overflow', 'auto');
                    }
                );
        }

        $('.header-nav li a').removeClass('active');
        $(this).addClass('active');

        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length > 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1500);
        }
        return false;
    });


    // Scroll to video

    $('.hero-content__link').on('click', function () {

        $('html, body').animate({scrollTop: $('#video').offset().top}, 1500);

        return false;
    });

    // VIDEO youtube

    $(function () {
        $('.youtube').each(function () {
            // По YouTube ID, находим превью картинку
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

            // Добавляем кнопку play
            $(this).append($('<div/>', {'class': 'play'}));

            $('.youtube .play').on('click', function () {

                $(this).parents().addClass('active');
            });

            $(document).delegate('#' + this.id, 'click', function () {
                // Создаем iFrame с параметром autoplay
                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

                var iframe = $('<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'width': $(this).width(),
                    'height': $(this).height()
                });

                $(this).replaceWith(iframe);
            });
        });
    });

    // Slick

    $('.reviews-slider').slick({
        arrows: true,
        dots: true,
        // infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.advantages-content').slick({
        dots: false,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300,
                    dots: true,
                    arrows: true

                }
            }

        ]
    });


    // Reviews tabs

    $('.reviews-tabs__button').on('click', function () {

        var click_id = $(this).attr('id');
        var item = '#item_' + click_id;

        $('.reviews-tabs__button').removeClass('active');
        $('.reviews-tabs__content').css('display', 'none').removeClass('active');
        $(this).addClass('active');
        $(item).css('display', 'block').addClass('active');
    });


    // Read more review

    if ($(window).width() < 1024) {

        $('.reviews-slider__description').shorten({
            "showChars": 180,              // - длина текста в символах.
            "moreText": "Читать далее",      // - текст "читать далее".
            "ellipsesText": "...",         // - вместо многоточия можно вписать к примеру и "[...]".
            "lessText": "Скрыть текст"   // - текст возврата в исходное состояние.
        });

    }
    if ($(window).width() < 768) {

        $('.popup--policy .text').shorten({
            "showChars": 400,              // - длина текста в символах.
            "moreText": "Читать далее",      // - текст "читать далее".
            "ellipsesText": "...",         // - вместо многоточия можно вписать к примеру и "[...]".
            "lessText": "Скрыть текст"   // - текст возврата в исходное состояние.
        });
    }


    // Hide portfolio

    function portfolio() {

        $('.portfolio-item').slice(4).fadeOut();

        $('.portfolio-btn').on('click', function () {

            if ($(this).hasClass('show')) {
                $('.portfolio-item').slice(4).fadeIn();
                $(this).removeClass('show').addClass('hide').html('Скрыть');
                $('html,body').animate({
                    scrollTop: $(this).offset().bottom
                }, 1500);
            } else {
                $(this).removeClass('hide').addClass('show').html('Смотреть еще');
                $('.portfolio-item').slice(4).fadeOut();

                $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 1500);
            }
        });
    }

    portfolio();


    // POPUPS open
    function popups() {

        var btn = $('.btn--order');

        btn.on('click', function (e) {
            e.preventDefault();

            $('.wrapper-popup').fadeIn(400,
                function () {
                    $('body').css('overflow', 'hidden');
                    $('.popup--order')
                        .css('display', 'block')
                        .animate({opacity: 1}, 200);
                });
        });

        $('.footer-policy').on('click', function (e) {
            e.preventDefault();

            $('.wrapper-popup').fadeIn(400,
                function () {
                    $('body').css('overflow', 'hidden');
                    $('.popup--policy')
                        .css('display', 'block')
                        .animate({opacity: 1}, 200);
                });
        });

        // POPUPS close

        $('.popup-close, .btn-close, .wrapper-popup').on('click', function () {
            $('body').css('overflow', 'auto');
            $('.popup')
                .animate({opacity: 0}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('.wrapper-popup').fadeOut(400);
                    }
                );
        });
    }

    popups();

    // Accordeon

    $('.offers-item__title').on('click', function () {
        $(this)
            .toggleClass('active')
            .siblings('.offers-item__list').slideToggle();
    });


    // VALIDATION

    $('form').each(function () {
        $(this).validate({
            errorPlacement: function () {

            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "/mail.php",
                    data: $(form).serialize(),
                    success: function () {

                        var inputName = $('input[name="name"]').val(),
                            titleText = 'Спасибо, ' + inputName + '!';

                        if (inputName.length === 0) {

                            $('.popup--thanks .title').html('Спасибо!');
                        }
                        else {
                            $('.popup--thanks .title').html(titleText);
                        }

                        $('.wrapper-popup').fadeIn(400,
                            function () {
                                $('body').css('overflow', 'hidden');
                                $('.popup')
                                    .css('display', 'none')
                                    .animate({opacity: 1}, 200);
                                $('.popup--thanks')
                                    .css('display', 'block')
                                    .animate({opacity: 1}, 200);
                            });


                    },
                    error: function () {
                        alert('Данные заполнены некорректно');
                    }
                });
                return false;
            }
        });
    });


    // Mask field

    $(function(){
        $("input[name='tel']").mask("8(999) 999-9999");
        $("input[name='date']").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
        $("input[name='mail']").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
    });


    // Old Browsers


    $.reject({
        reject: {
            msie6: true,
            msie7: true,
            msie8: true,
            msie9: true,
            msie10: true,
            firefox2: true
        }
    });


    // PHONE MASK

    // $(function () {
    //     $('input[name=phone]').inputmask("+7 (999) 999-99-99");
    // });


});
