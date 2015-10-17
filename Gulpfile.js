var gulp = require('gulp');

var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function (){
	gulp.src("./styles/sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./styles/css/"));
});

gulp.task('concatCss', function (){
	gulp.src("./styles/css/**/*.css")
		.pipe(concatCss('main.css'))
		.pipe(gulp.dest('styles/'));
});

gulp.task('minifyCss', function (){
	gulp.src('styles/main.css')
		.pipe(minifyCss())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest("styles/"));
});


gulp.task('css', ['sass', 'concatCss', 'minifyCss']);