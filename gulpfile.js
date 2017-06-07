var gulp = require('gulp');
var clean = require ('gulp-clean');

var folders = [
    "./configs/*",
    "./fonts/*",
    "./images/*",
    "./libs/*",
    "./scripts/**",
    "./styles/*",
    "./index.html"
];


gulp.task('clear', function () {
    return gulp.src('./build')
        .pipe(clean())
});


gulp.task('default', ['clear'],function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});


