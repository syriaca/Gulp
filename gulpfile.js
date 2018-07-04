'use strict';

var gulp =  require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('concat', function(){
    gulp.src([  
        'js/jquery.js', 
        'js/sticky/jquery.sticky.js', 
        'js/main.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', function() {
    gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['concat', 'minifyScripts'], function(){
    console.log('this is just a default task');
});

gulp.task