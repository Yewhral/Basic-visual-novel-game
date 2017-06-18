const gulp = require('gulp');
const clean = require ('gulp-clean');
const concat = require('gulp-concat');
const inject = require ('gulp-inject'); // for dev version
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');


const uglify = require('gulp-uglify');
const pump = require('pump');

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

gulp.task('babelize', () => {
    gulp.src('build/scripts/gamestates.min.js')
        .pipe(babel({
            presets: ['es2015-without-strict']
        }))
        .pipe(gulp.dest('build/scripts/'));
});

gulp.task('default', ['clear', 'concatBuild'],function(){       // kind of dev build
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))
});

gulp.task('optim',['minify-css', 'concatOptim', 'babelize'],function(){

});

gulp.task('ugly', function (cb) {
    pump([
            gulp.src('build/scripts/gamestates.min.js'),
            uglify(),
            gulp.dest('build/scripts')
        ],
        cb
    );
});

