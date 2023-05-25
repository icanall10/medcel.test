(function ($) {

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
                items: 3,
                nav: false,
                dots: true,
                margin: 50,
            });


        $('.reviews-block .owl-carousel')
            .once('carousel')
            .owlCarousel({
                items: 3,
                nav: false,
                dots: true,
                margin: 50,
            });


        $('.reviews-grid-item .header .avatar')
            .once('color', function () {
                let $this = $(this);

                let colors = [
                    '#FF0000', // Красный
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

    }


    $(window).scroll(function () {
        $('.header-block').trigger('checkFixed');
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);