var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    svgmin       = require('gulp-svgmin'),  // Минификация svg изображений
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок   
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/main.scss') // Берем источник
        .pipe(sass({outputStyle: 'compressed'})) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(autoprefixer(['last 15 versions', '> 2%', 'ie 8', 'ie 9'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/libs/js/jquery-3.2.1.min.js', // Берем jQuery
        'app/libs/js/fm.revealator.jquery.js',
        'app/libs/js/jquery.browser-plugin.js',
        'app/libs/js/jquery.validate.min.js', // Валидация форм
        'app/libs/js/jquery.maskedinput.min.js', // Маска поля
        'app/libs/js/slick.min.js', // Карусель slick
        'app/libs/js/lightbox.js',
        'app/libs/js/ireject.js',
        'app/libs/js/jquery.shorten.1.0.js' // Читать далее
    ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/libs')); // Выгружаем в папку app/libs
});
gulp.task('sass-libs', function(){ // Создаем таск Sass
    return gulp.src([ // Берем все необходимые библиотеки
       'app/sass/vendors/slick.scss',
       'app/sass/vendors/slick-theme.scss',
       'app/sass/vendors/irejetc.scss',
       'app/sass/vendors/lightbox.scss',
       'app/sass/vendors/fm.revealator.jquery.scss'
    ])
        .pipe(sass({outputStyle: 'compressed'})) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/libs')) // Выгружаем в папку app/libs
});



gulp.task('svgmin', function () {  // Минификация свг изображений
    return gulp.src('app/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('app/img'));
});

gulp.task('watch', ['browser-sync', 'scripts', 'svgmin', 'sass-libs'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});


gulp.task('build', ['clean', 'sass', 'scripts'], function() {

    var buildLib = gulp.src([ // Переносим библиотеки в продакшен
        'app/libs/*'
    ])
        .pipe(gulp.dest('dist/libs'));


    var buildCss = gulp.src([ // Переносим css в продакшен
        'app/css/main.min.css'
    ])
        .pipe(gulp.dest('dist/css'));


    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/**/*') // Переносим изображения в продакшен
        .pipe(gulp.dest('dist/img/'));

});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);
