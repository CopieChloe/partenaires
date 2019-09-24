$(document).ready(function () {
    // menu links
    $("#menu_item1").click(function () {
        document.querySelector('#project').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item2").click(function () {
        document.querySelector('#search').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item3").click(function () {
        document.querySelector('#tech').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item4").click(function () {
        document.querySelector('#eco').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item5").click(function () {
        document.querySelector('#values').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item6").click(function () {
        document.querySelector('#team').scrollIntoView({
            behavior: 'smooth'
        });
        $('.menu_mobile').hide();
    });
    $("#menu_item7").click(function () {
        document.querySelector('#partner').scrollIntoView({
            behavior: 'smooth'
        });

        $('.menu_mobile').hide();
    });
    $("#menu_item8").click(function () {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });

        $('.menu_mobile').hide();
    });

    // menu open and close
    $(".menu_icon_img").click(function () {
        $(".menu_mobile").slideDown();
    });
    $(".close_menu_btn>i").click(function () {
        $(".menu_mobile").slideUp();
    });

    // links inside document
    $(".jumbo_btn").click(function () {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    $(".up").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    $(".form_link").click(function () {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    $(".values_link").click(function () {
        document.querySelector('#values').scrollIntoView({
            behavior: 'smooth'
        });
    });

    $(".partner_link").click(function () {
        document.querySelector('#partner').scrollIntoView({
            behavior: 'smooth'
        });
    });





    // au scroll
    $(function () {

        $(window).scroll(function () {
            let projectElementTop = $('.project_intro').offset().top;
            let ecoElementTop = $('.eco_content').offset().top;
            let searchElementTop = $('.search_intro').offset().top;
            let valuesElementTop = $('.values_large_container').offset().top;
            let bottom_of_screen = $(window).scrollTop() + $(window).height();
            if ((bottom_of_screen > (projectElementTop + 200))) {
                $('.project_intro').addClass('scroll_translateY_top');
            }
            if ((bottom_of_screen > (ecoElementTop + 200))) {
                $('.eco_content').addClass('scroll_translateY_top');
            }
            if ((bottom_of_screen > (searchElementTop + 350))) {
                $('.search_intro>.bold').addClass('pulse');
            }
            if ((bottom_of_screen > (valuesElementTop + 200))) {
                $('.values_img_container').addClass('scroll_translateY_bottom');
            }
            $('.value_li').each(function (index) {
                $(this).addClass("value_li" + index);
                let valueElementTop = $('.value_li' + index).offset().top;
                let bottom_of_screen = $(window).scrollTop() + $(window).height();
                if ((bottom_of_screen > (valueElementTop + 200))) {
                    $(".value_li" + index).addClass('scroll_translateY_top');
                }
            });

        });
    });  
});  
