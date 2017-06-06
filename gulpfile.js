var gulp = require('gulp');

var folders = [
    "./configs/*",
    "./fonts/*",
    "./images/*",
    "./libs/*",
    "./scripts/*",
    "./styles/*",
    "./index.html"
];


gulp.task('default', function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});


