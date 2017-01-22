var gulp = require('gulp')
var less = require('gulp-less')
var rename = require('gulp-rename')
var cleanCSS = require('gulp-clean-css')

var SRC = 'src'
var DIST = 'dist'

gulp.task('build', function () {
    return gulp.src(SRC + '/765.less')
    .pipe(less())
    .pipe(gulp.dest(DIST))
})

gulp.task('minify', function() {
  return gulp.src(DIST + '/765.css')
    .pipe(cleanCSS())
    .pipe(rename((path) => {
    	path.basename += ".min";
  	}))
    .pipe(gulp.dest(DIST));
});

gulp.task('watch', function () {
    gulp.watch(SRC + '/*.less', ['build'])
    gulp.watch(DIST + '/765.css', ['minify'])
})

gulp.task('default', ['build', 'minify', 'watch'])
