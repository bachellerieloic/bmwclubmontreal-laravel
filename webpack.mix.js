let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var plugin =  'resources/assets/plugins/';

mix.js('resources/assets/js/app.js', 'public/js/app.js')
  .combine([
      plugin + 'jquery/jquery.min.js',
      plugin + 'popper/popper.min.js',
      plugin + 'bootstrap/bootstrap.min.js',
      plugin + 'bootstrap-datepicker/bootstrap-datepicker.min.js',
      plugin + 'bootstrap-notify/bootstrap-notify.min.js',
      plugin + 'bootstrap-tagsinput/bootstrap-tagsinput.min.js',
      plugin + 'chart.js/Chart.min.js',
      plugin + 'chart.js/Chart.extension.js',
      plugin + 'clipboard/clipboard.min.js',
      plugin + 'dropzone/dropzone.min.js',
      plugin + 'jquery.scrollbar/jquery.scrollbar.min.js',
      plugin + 'jquery-scroll-lock/jquery-scrollLock.min.js',
      plugin + 'js-cookie/js.cookie.js',
      plugin + 'jvectormap-next/jquery-jvectormap.min.js',
      plugin + 'list.js/list.min.js',
      plugin + 'moment/moment.min.js',
      plugin + 'nouislider/nouislider.min.js',
      plugin + 'quill/quill.min.js',
      plugin + 'select2/select2.min.js',
      plugin + 'sweetalert2/dist/sweetalert2.all.min.js',
      plugin + 'toastr/toastr.min.js',
      plugin + 'slimscroll/jquery.slimscroll.js',
      plugin + 'waves/waves.js',
      plugin + 'sidebarmenu.js',
      plugin + 'sticky-kit/sticky-kit.min.js',
      'resources/assets/js/argon.min.js',
      'resources/assets/js/custom.js',
      'public/js/app.js',
  ],'public/js/bundle.min.js')
    .sass('resources/assets/sass/style.scss', 'public/css')
    .browserSync('laravue');
