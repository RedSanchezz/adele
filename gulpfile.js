var gulp = require('gulp');
let browserSync = require('browser-sync');
let scss = require('gulp-sass');
let concat = require('gulp-concat');

gulp.task("watch", function() {
    gulp.watch('./app/*.html', gulp.parallel('html'));
    gulp.watch('./app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('./app/js/**/*.js', gulp.parallel('js'));
});

gulp.task('html', function() {
    return gulp.src('app/*.html').pipe(browserSync.reload({ stream: true }));
});

gulp.task('scss', function() {
    return gulp.src("app/scss/**/*.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({ stream: true }));
});


gulp.task("css", function() {
    return gulp.src("./node_modules/normalize.css/normalize.css").pipe();
});


gulp.task('js', function() {
    return gulp.src("app/js/**/*.js")
        .pipe(browserSync.reload({ stream: true }));
});


gulp.task("bs", function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task("lib", function() {
    gulp.src(["./node_modules/jquery/dist/jquery.min.js", "./node_modules/slick-carousel/slick/slick.min.js"])
        .pipe(concat("lib.js"))
        .pipe(gulp.dest("./app/js/libs"));
    gulp.src(["./node_modules/slick-carousel/slick/slick.css", "./node_modules/normalize.css/normalize.css"])
        .pipe(concat("libs.css"))
        .pipe(gulp.dest("./app/css/libs"));
});
gulp.task("dest", function() {
    gulp.src("./app/css/**").pipe(gulp.dest("./docs/css"));
    gulp.src("./app/*.html").pipe(gulp.dest("./docs/"));
    gulp.src("./app/js/**").pipe(gulp.dest("./docs/js"));
    gulp.src("./app/img/**").pipe(gulp.dest("./docs/img"));
});
gulp.task("default", gulp.parallel('bs', 'scss', 'watch'));