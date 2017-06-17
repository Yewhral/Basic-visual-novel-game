let gulp = require('gulp');
let clean = require ('gulp-clean');
let inject = require ('gulp-inject');

let uglify = require('gulp-uglify');    // TODO apply to .js files
//let pump = require('pump');

let concat = require('gulp-concat'); // TODO apply to gamestates

// TODO prevent gulp from overwritting source files for safety reasons

let folders = [
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
    let target = gulp.src('./index.html');
    let sources = gulp.src(['./scripts/gamestates/**.js'], {read: false});

    return target.pipe(inject(sources,{relative:true}))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['injectGamestates','clear'],function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});


/*
gulp.task('injectRelease',function(){
    let target = gulp.src('release/index.html');
    let sources = gulp.src(['release/scripts/*'], {read: false});

    return target.pipe(inject(sources,{relative:true}))
        .pipe(gulp.dest('release/index.html'));
});

gulp.task('clearRelease', function () {
    return gulp.src('./release')
        .pipe(clean())
});

gulp.task('moveRelease',function(){
  return gulp.src(folders,{base:'./'})
      .pipe(gulp.dest('release/'))
});

gulp.task('concatRelease', function(){
    return gulp.src('./scripts/gamestates/**')
        .pipe(concat('gamestates.min.js'))
        .pipe(gulp.dest('release/scripts/'));
});

gulp.task('release',['clearRelease','moveRelease','concatRelease' ],function(){

});

*/