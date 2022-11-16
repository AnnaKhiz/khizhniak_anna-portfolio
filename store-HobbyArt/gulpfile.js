var gulp = require('gulp')
var rigger = require('gulp-rigger');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

//функция сборки для html файла
gulp.task('html:build', function () {
    gulp.src('build/html/**/*.html') //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest('./')) //Вернем в корневую папку
});

//функция преобразования sass в css
gulp.task('sass', function(done) {
    gulp.src("sass/*.sass") 
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });



    gulp.watch("sass/*.sass", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();
});
gulp.task('default', gulp.series('sass', 'serve'));





