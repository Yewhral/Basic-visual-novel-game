let gulp = require('gulp');
let clean = require ('gulp-clean');
let concat = require('gulp-concat');
let inject = require ('gulp-inject'); // for dev version
let cleanCSS = require('gulp-clean-css');

let folders = [
    "./fonts/*",
    "./images/**",
    "./libs/*",
    "./scripts/game.js",
    "./styles/*",
    "./index.html"
];

gulp.task('clear', function () {
    return gulp.src('./build')
        .pipe(clean())
});

gulp.task('concatBuild', function(){
    return gulp.src('./scripts/gamestates/**')
        .pipe(concat('gamestates.min.js'))
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('injectGamestates', function () {     // for dev version
    let target = gulp.src('index.html');
    let sources = gulp.src(['scripts/gamestates/*.js'], {read: false});

    return target.pipe(inject(sources,{relative:true}))
        .pipe(gulp.dest(''));
});

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/styles'));
});

gulp.task('concatOptim',function(){
    return gulp.src('configs/**')
        .pipe(concat('configs.min.js'))
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('optim',['minify-css', 'concatOptim'],function(){

});

gulp.task('default', ['clear', 'concatBuild'],function(){       // kind of dev build
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))
});