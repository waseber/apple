'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series(function() {
	return gulp.src(['./src/css/sass/**/*.scss', '!./src/css/sass/helpers/*.scss', '!./src/css/sass/components/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('./src/css'));
}));


gulp.task('watch', gulp.series(function() {
    gulp.watch('./src/css/sass/**/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series('watch'));
