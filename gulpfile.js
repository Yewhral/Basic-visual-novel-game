let gulp = require('gulp');
let clean = require ('gulp-clean');
let concat = require('gulp-concat');
let inject = require ('gulp-inject'); // for dev version


let folders = [
    "./configs/*",
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
        .pipe(gulp.dest('build/scripts/gamestates'));
});

gulp.task('injectGamestates', function () {     // for dev version
    let target = gulp.src('index.html');
    let sources = gulp.src(['scripts/gamestates/*.js'], {read: false});

    return target.pipe(inject(sources,{relative:true}))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['clear', 'concatBuild'],function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});