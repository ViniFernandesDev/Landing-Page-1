// HEADER FIXA
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 120) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });


// MENU RESPONSIVO
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $(".overlay ul li a").click(function () {
        $("#toggle").removeClass("active");
        $("#overlay").removeClass("open");
    })

    $(document).ready(function() {
        $('.menu').click(function() {
            $(this).toggleClass("ativo");
        });
    });


// HEADER SCROLL
    $('.navigation a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 120
        }, 500);
    });


// MENU ATIVO
    $(function () {
        $('nav ul li a').on('click', function() {
            $('nav ul li a').removeClass('ativo');

            $(this).addClass('ativo');
        });

        (() => {
            const hash = window.location.hash;

            if(hash) {
                $(`.navigation nav ul li a[href="${hash}"]`).addClass('ativo');
            }
        })();
    });