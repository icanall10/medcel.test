(function ($) {

    let windowScrollTop = $(window).scrollTop() || 0;

    function behaviors() {

        $('.menu .parent > a')
            .once('parent')
            .click(function (e) {
                e.preventDefault();

                let $this = $(this);
                let li = $this.closest('.parent')

                $this
                    .closest('ul')
                    .children('.parent')
                    .not(li)
                    .removeClass('open');

                li.toggleClass('open');
            });


        $('.header-block')
            .once('fixed')
            .on('checkFixed', function () {
                let scrollTop = $(window).scrollTop();
                let $this = $(this);

                (scrollTop > 0) ? $this.addClass('fixed') : $this.removeClass('fixed');
            })
            .trigger('checkFixed');


        $('.resume-form input[name="file"]')
            .once('file')
            .change(function () {
                let $this = $(this);
                let wrapper = $this.closest('.form-group');
                let nameDiv = wrapper.find('.file-name');

                nameDiv.text($this.val().split('\\').pop());
            });


        $('.videos-block .owl-carousel')
            .once('carousel')
            .owlCarousel({
                nav: false, dots: true, margin: 50, responsive: {
                    0: {
                        margin: 16, items: 1,
                    }, 1200: {
                        margin: 50, items: 3,
                    },
                },
            });


        $('.reviews-block .owl-carousel')
            .once('carousel')
            .owlCarousel({
                items: 3, nav: false, dots: true, margin: 50, responsive: {
                    0: {
                        margin: 16, items: 1,
                    }, 1200: {
                        margin: 50, items: 3,
                    },
                },
            });


        $('.reviews-grid-item .header .avatar')
            .once('color', function () {
                let $this = $(this);

                let colors = ['#FF0000', // Красный
                    '#FF9900', // Оранжевый
                    '#00FF00', // Зеленый
                    '#00FFFF', // Бирюзовый
                    '#0000FF', // Синий
                    '#CC00FF', // Фиолетовый
                    '#FF00FF', // Розовый
                    '#FF66CC', // Светло-розовый
                    '#FF6699', // Ярко-розовый
                    '#FF6666', // Ярко-красный
                    '#FF9966', // Светло-оранжевый
                    '#FFCC99', // Бежевый
                    '#99CC00', // Ярко-зеленый
                    '#CCFF00', // Ярко-желто-зеленый
                    '#66CCCC', // Светло-голубой
                    '#6699FF', // Ярко-голубой
                    '#9966FF', // Светло-фиолетовый
                    '#FF99FF'  // Ярко-розовый
                ];

                let color = colors[Math.floor(Math.random() * colors.length)];

                $this.css('background', color);
            });


        $('#back-2-top')
            .once('back-2-top')
            .click(function (e) {
                e.preventDefault();

                $('html, body').animate({
                    scrollTop: 0,
                }, 500);
            })
            .on('checkVisible', function () {
                let $this = $(this);

                ($(window).scrollTop() > 100) ? $this.addClass('visible') : $this.removeClass('visible');
            })
            .trigger('checkVisible');


        $('[data-mobile-menu-toggle]')
            .once('mobile-menu-toggle')
            .click(function (e) {
                e.preventDefault();

                $('[data-mobile-menu-block]').toggleClass('visible');
            });


        $('.menu > ul > li.parent > a').once('parent').click(function (e) {
            e.preventDefault();

            $(this)
                .closest('li')
                .toggleClass('open');
        });


        $('.take-care-block [data-doctor]')
            .once('doctor')
            .click(function (e) {
                e.preventDefault();

                let $this = $(this);

                let id = $this.attr('data-doctor');
                let slider = $this.closest('[data-slider]');
                let doctors = slider.find('.doctors .doctor');
                let details = slider.find('.detail .doctor');

                doctors.removeClass('active');
                $this.addClass('active');

                details.removeClass('active');
                details.filter('[data-detail="' + id + '"]').addClass('active');
            });


        $('[data-tooltip]')
            .once('tooltip', function () {
                let $this = $(this);

                tippy(this, {
                    content: $this.attr('data-tooltip'),
                    theme: 'light',
                });
            });


        $('.works-block .toggle')
            .once()
            .click(function (e) {
                e.preventDefault();

                $(this)
                    .closest('.work')
                    .toggleClass('visible');
            });

    }


    $(window).scroll(function () {
        $('.header-block').trigger('checkFixed');
        $('#back-2-top').trigger('checkVisible');

        if ($(window).scrollTop() > 30) {
            $('[data-float-menu-link]').addClass('visible');
        } else {
            $('[data-float-menu-link]').removeClass('visible');
        }

        if ($(window).scrollTop() < windowScrollTop) {
            $('[data-mobile-footer-block]').addClass('visible');
        } else {
            $('[data-mobile-footer-block]').removeClass('visible');
        }

        windowScrollTop = $(window).scrollTop();
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);