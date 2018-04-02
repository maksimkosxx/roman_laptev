$(document).ready(function () {

    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.wrapper-popup').fadeIn(400, function () {
            $('body').css('overflow', 'hidden');
            $('.wrapper-header').addClass('active').animate({opacity: 1}, 200)
        })
    });
    $('.header-close, .wrapper-popup').on('click', function () {
        $('body').css('overflow', 'auto');
        $('.wrapper-header').animate({opacity: 0}, 200, function () {
            $(this).removeClass('active');
            $('.wrapper-popup').fadeOut(400)
        })
    });

    function navScroll() {
        if ($(window).width() > 1024) {

            var lastId, topMenu = $(".header-nav"), topMenuHeight = topMenu.height() - 15,
                menuItems = topMenu.find("a"), scrollItems = menuItems.map(function () {
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        return item
                    }
                });
            menuItems.click(function (e) {

                if($('.wrapper-header').hasClass('sticky')) {
                    var topMenuHeight = topMenu.height() - 15;
                } else {
                    var topMenuHeight = topMenu.height() - 30;
                }

                var href = $(this).attr("href"), offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
                $('html, body').stop().animate({scrollTop: offsetTop}, 500);
                e.preventDefault()
            });
            $(window).scroll(function () {
                var fromTop = $(this).scrollTop() + topMenuHeight;
                var cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop) return this
                });
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";
                if (lastId !== id) {
                    lastId = id;
                    menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active")
                }
            })
        }
    }
    navScroll();

    if ($(window).width() < 1024) {

            $('.header-nav > li a').on('click', function () {
            $('.wrapper-header').animate({opacity: 0}, 200, function () {
                $('.wrapper-header').removeClass('active');
                $('.wrapper-popup').fadeOut(400);
                $('body').css('overflow', 'auto')
            });

            $('.header-nav li a').removeClass('active');
            $(this).addClass('active');
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length > 0) {
                $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1500)
            }
            return false
            });
        }

    $(window).scroll(function () {
        if ($(window).width() < 1024) {
            if ($(this).scrollTop() > 100) {
                $('.btn-menu').addClass('sticky');
                $('.sticky').animate({opacity: 1}, 1500);
                $('.scroll-top').addClass('active')
            } else {
                $('.btn-menu').removeClass('sticky');
                $('.scroll-top').removeClass('active')
            }
        }
        if ($(window).width() > 1024) {
            if ($(this).scrollTop() > 80) {
                $('.wrapper-header').addClass('sticky');
                $('.sticky').animate({opacity: 1}, 1500)
            } else {
                $('.wrapper-header').removeClass('sticky')
            }
        }
    });
    $('.scroll-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 600);
        return false
    });

    $('.hero-content__link').on('click', function () {
        $('html, body').animate({scrollTop: $('#video').offset().top}, 1500);
        return false
    });


    // Youtube

    $(function () {
        $('.youtube').each(function () {
            $(this).css('background-image', 'url(../img/video-posters/' + this.id + '.jpg)');
            $(this).append($('<div/>', {'class': 'play'}));
            $('.youtube .play').on('click', function () {
                $(this).parents().addClass('active')
            });
            $(document).delegate('#' + this.id, 'click', function () {
                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
                var iframe = $('<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'width': $(this).width(),
                    'height': $(this).height()
                });

                $(this).replaceWith(iframe);

                if($(this).get(0).pause()) {
                    $(this).css('background-image', 'url(../img/video-posters/' + this.id + '.jpg)');
                    $(this).append($('<div/>', {'class': 'play'}));
                } else {
                    $(this).replaceWith(iframe);
                }
            })


        })
    });


    // Sliders

    $('.reviews-slider, .reviews-slider--second').slick({
        arrows: true,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.reviews-tabs__button').on('click', function () {
        var click_id = $(this).attr('id');
        var item = '#item_' + click_id;
        $('.reviews-tabs__button').removeClass('active');
        $('.reviews-tabs__content').removeClass('active');
        $(this).addClass('active');
        $(item).addClass('active');

    });


    // Show more text

    if ($(window).width() <= 1024) {
        $('.reviews-slider__description').shorten({
            "showChars": 206,
            "moreText": "Читать далее",
            "ellipsesText": "...",
            "lessText": "Скрыть текст"
        })
    }
    if ($(window).width() < 768) {
        $('.popup--policy .text').shorten({
            "showChars": 400,
            "moreText": "Читать далее",
            "ellipsesText": "...",
            "lessText": "Скрыть текст"
        })
    }

    // Advantages mobile slider

    $('.advantages-content').slick({
        dots: false,
        infinite: false,
        arrows: false,
        responsive: [{breakpoint: 9999, settings: "unslick"}, {
            breakpoint: 768,
            settings: {slidesToShow: 1, slidesToScroll: 1, speed: 300, dots: true, arrows: true}
        }]
    });

    function portfolio() {
        $('.portfolio-item').slice(4).fadeOut();
        $('.portfolio-btn').on('click', function () {
            if ($(this).hasClass('show')) {
                $('.portfolio-item').slice(4).fadeIn();
                $(this).removeClass('show').addClass('hide').html('<span>Скрыть</span>');
                $('html,body').animate({scrollTop: $(this).offset().bottom}, 1500)
            } else {
                $(this).removeClass('hide').addClass('show').html('<span>Смотреть еще</span>');
                $('.portfolio-item').slice(4).fadeOut();
                $('html, body').animate({scrollTop: $('.portfolio').offset().top}, 1500)
            }
        })
    }
    portfolio();

    function popups() {
        var btn = $('.btn-special');
        btn.on('click', function (e) {
            e.preventDefault();
            $('.wrapper-popup').fadeIn(400, function () {
                $('body').css('overflow', 'hidden');
                $('.popup--order').css('display', 'block').animate({opacity: 1}, 200)
            })
        });
        $('.footer-policy').on('click', function (e) {
            e.preventDefault();
            $('.wrapper-popup').fadeIn(400, function () {
                $('body').css('overflow', 'hidden');
                $('.popup--policy').css('display', 'block').animate({opacity: 1}, 200)
            })
        });
        $('.popup-close, .btn-close, .wrapper-popup').on('click', function () {
            $('body').css('overflow', 'auto');
            $('.popup').animate({opacity: 0}, 200, function () {
                $(this).css('display', 'none');
                $('.wrapper-popup').fadeOut(400)
            })
        })
    }
    popups();

    if ($(window).width() < 1024) {
        $('.offers-item__title').on('click', function () {
            $(this).toggleClass('active').siblings('.offers-item__list').slideToggle()
        })
    }
    $(function () {
        $("input[name='tel']").mask("8(999) 999-9999");
        $("input[name='date']").mask("99.99.9999", {placeholder: "дд.мм.гггг"})
    });


    // Post type form

    $('.btn-order').on('click', function () {
        var thisType = $(this).attr('data-type');
        $(".popup--order input[name='type']").val(thisType);
    });


    $("input[name='name']").on('change', function () {
        var inputName = $(this).val(), titleText = 'Спасибо, ' + inputName + '!';
        if (inputName.length == '') {
            $('.popup--thanks .title').html('Спасибо!')
        } else {
            $('.popup--thanks .title').html(titleText)
        }
    });
    $('form:not(".form-special")').each(function () {
        var $form = $(this);
        $form.validate({
            errorPlacement: function () {
            }, submitHandler: function () {
                $.ajax({
                    type: "POST", url: "mail.php", data: $form.serialize(), success: function () {
                        $('.wrapper-popup').fadeIn(400, function () {
                            $('body').css('overflow', 'hidden');
                            $('.popup').css('display', 'none').animate({opacity: 1}, 200);
                            $('.popup--thanks').css('display', 'block').animate({opacity: 1}, 200);
                            $('.popup--thanks .text').html('Ваши данные отправлены, я свяжусь с вами в ближайшее время');
                            $('.field').val('')
                        })
                    }, error: function () {
                        alert('Данные заполнены некорректно')
                    }
                });
                return false
            }
        })
    });
    $('.form-special').each(function () {
        var $form = $(this);
        $form.validate({
            errorPlacement: function () {
            }, submitHandler: function () {
                $.ajax({
                    type: "POST", url: "mail.php", data: $form.serialize(), success: function () {
                        $('.wrapper-popup').fadeIn(400, function () {
                            $('body').css('overflow', 'hidden');
                            $('.popup').css('display', 'none').animate({opacity: 1}, 200);
                            $('.popup--thanks').css('display', 'block').animate({opacity: 1}, 200);
                            $('.popup--thanks .text').html('Ваши данные отправлены, я вышлю статью в ближайшее время');
                            $('.field').val('')
                        })
                    }, error: function () {
                        alert('Данные заполнены некорректно')
                    }
                });
                return false
            }
        })
    });

    $(function () {
        $.reject({
            reject: {
                safari: false,
                chrome: false,
                firefox: false,
                firefox1: true,
                firefox2: true,
                msie6: true,
                msie7: true,
                msie8: true,
                msie9: true
            }
        })
    });

});
