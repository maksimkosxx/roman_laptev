// $(document).ready(function () {
//
//
//     // Tabs
//
//     $('.tabs-nav li').on('click', function () {
//
//         var click_id = $(this).attr('id');
//         var item = '#item_' + click_id;
//
//         $('.tabs-nav li').removeClass('active');
//         $('.tab-content__item').removeClass('active');
//         $(this).addClass('active');
//         $(item).addClass('active');
//     });
//
//     // Toggle Examples content
//
//     $('.examples-slider__btn').on('click', function (e) {
//
//         e.preventDefault();
//         $(this).toggleClass('active');
//
//         if($(this).hasClass('active')) {
//             $(this).html('Свернуть');
//             $(this).siblings('.content').slideToggle(350);
//         } else {
//             $(this).html('Развернуть');
//             $(this).siblings('.content').slideUp(350)
//         }
//
//     });
//
//     // POPUPS open
//     function popups() {
//
//         var btn = $('span[data-btn]');
//
//         btn.on('click',function (e) {
//             e.preventDefault();
//
//             $('.wrapper-popup').fadeIn(400,
//                 function () {
//                     $('body').css('overflow', 'hidden');
//                     $('.popup')
//                         .css('display', 'block')
//                         .animate({opacity: 1}, 200);
//                 });
//
//         });
//
//         // POPUPS close
//
//         $('.popup-close, .wrapper-popup').on('click', function () {
//             $('body').css('overflow', 'auto');
//             $('.popup')
//                 .animate({opacity: 0}, 200,
//                     function () {
//                         $(this).css('display', 'none');
//                         $('.wrapper-popup').fadeOut(400);
//                     }
//                 );
//         });
//     }
//

    // VALIDATION

    // $('form').each(function () {
    //     $(this).validate({
    //         errorPlacement: function () {
    //             return false;
    //         },
    //         submitHandler: function (form) {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "/mail.php",
    //                 data: $(form).serialize(),
    //                 success: function() {
    //                     document.location.href="/thanks.php";
    //                 },
    //                 error: function() {
    //                     alert('Данные заполнены некорректно');
    //                 }
    //             });
    //             return false;
    //         }
    //     });
    // });

    // Width Select

    // $('#city').on('change', function() {
    //
    //     if($(this).val() == 'spb') {
    //         $('#city').css('width', '128px');
    //     } else {
    //         $('#city').css('width', '60px');
    //     }
    // });

    // MOBILE MENU

    // $('.mobile-btn').on('click', function () {
    //     $('.nav').slideToggle();
    //     $(this).toggleClass('active');
    // });


    // ADVANTAGES DESCRIPTION

    // $('.advantages-item__more').on('click', function () {
    //     $(this).hide();
    //     $(this).siblings('.advantages-item__description').slideDown();
    // });


    // NAVIGATION SCROLL

    // $('.nav > li a').on('click', function () {
    //     var scroll_el = $(this).attr('href');
    //     if ($(scroll_el).length != 0) {
    //         $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
    //     }
    //     return false;
    // });

    // MENU MOBILE

    // $('.nav-mobile').on('click', function () {
    //     $(this).toggleClass('active');
    //     $('.nav-main').slideToggle();
    // });

    // PHONE MASK

    // $(function () {
    //     $('input[name=phone]').inputmask("+7 (999) 999-99-99");
    // });


    // VALIDATION
    // $('form').each(function () {
    //     $(this).validate({
    //         errorPlacement: function () {
    //             return false;
    //         },
    //         submitHandler: function (form) {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "/mail.php",
    //                 data: $(form).serialize(),
    //                 success: function() {
    //                     document.location.href="/thanks.php";
    //                 },
    //                 error: function() {
    //                     alert('Данные заполнены некорректно');
    //                 }
    //             });
    //             return false;
    //         }
    //     });
    // });




// });

