let mix = require('laravel-mix');

let tailwindcss = require('tailwindcss');

mix.sass('resources/scss/style.scss', 'public/mixAssests/app.css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    });


mix.js('resources/js/app.js', 'public/mixAssests');
