let gulp = require('gulp');
let clean = require ('gulp-clean');
let inject = require ('gulp-inject');

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


