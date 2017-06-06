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


gulp.task('createBuild', function(){
    return gulp.src(folders,{base:'./'})
        .pipe(gulp.dest('./build/'))

});


gulp.task('default', function() {









});