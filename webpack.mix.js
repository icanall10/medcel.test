const mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
});

mix.copy('resources/img/', 'public/img/')

mix
    .less('resources/less/reset.less', 'resources/css/')
    .less('resources/less/variables.less', 'resources/css/')
    .less('resources/less/fonts.less', 'resources/css/')
    .less('resources/less/icons.less', 'resources/css/')
    .less('resources/less/style.less', 'resources/css/')
    .less('resources/less/mobile.less', 'resources/css/');

mix.styles([
    'resources/css/reset.css',
    'resources/css/variables.css',
    'resources/css/fonts.css',
    'resources/css/icons.css',
    'resources/vendor/jquery-ui-1.13.1.custom/jquery-ui.structure.min.css',
    'resources/vendor/owl-carousel/assets/owl.carousel.min.css',
    'resources/vendor/fancybox/fancybox.css',
    'resources/css/style.css',
    'resources/css/mobile.css'
], 'public/css/all.css');

mix.scripts([
    'resources/vendor/jquery-3.5.1.min.js',
    'resources/vendor/select2/select2.js',
    'resources/vendor/jquery-ui-1.13.1.custom/jquery-ui.min.js',
    'resources/vendor/owl-carousel/owl.carousel.min.js',
    'resources/vendor/fancybox/fancybox.umd.js',
    'resources/vendor/tippy/popper.min.js',
    'resources/vendor/tippy/tippy.min.js',
    'resources/js/helpers.js',
    'resources/js/modal.js',
    'resources/js/js.js',
], 'public/js/all.js');

