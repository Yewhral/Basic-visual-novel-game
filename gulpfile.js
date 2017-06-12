var gulp = require('gulp');
var clean = require ('gulp-clean');
var inject = require ('gulp-inject');

// TODO prevent gulp from overwritting source files for safety reasons

var folders = [
    "./configs/*",
    "./fonts/*",
    "./images/**",
    "./libs/*",
    "./scripts/**",
    "./styles/*",
    "./index.html"
];


gulp.task('clear', function () {
    return gulp.src('./build')
        .pipe(clean())
});

gulp.task('injectGamestates', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./scripts/gamestates/**.js'], {read: false});

    return target.pipe(inject(sources,{relative:true}))
        .pipe(gulp.dest(''));
});


gulp.task('default', ['injectGamestates','clear'],function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});


