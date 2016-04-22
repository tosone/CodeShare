var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var jsonminify = require('gulp-jsonminify');
var config = require('./config');
var path = require('path');
gulp.task("default", function() {
    gulp.src('./css/content.less').pipe(less()).pipe(minifyCSS()).pipe(gulp.dest(path.join(config.releaseDir, 'css')));
    gulp.src('./js/config.json').pipe(jsonminify()).pipe(gulp.dest(path.join(config.releaseDir, 'js')));
    gulp.src('./js/' + config.databaseFileName + '.json').pipe(jsonminify()).pipe(gulp.dest(path.join(config.releaseDir, 'js')));
    gulp.src("./js/*.js").pipe(uglify()).pipe(gulp.dest(path.join(config.releaseDir, 'js')));
    gulp.src(["./server.js", "./config.js", "./app.js", "./favicon.ico"]).pipe(gulp.dest(config.releaseDir));
    gulp.src(["./img/*.ico", "./img/*.png", "./img/*.jpg"]).pipe(gulp.dest(path.join(config.releaseDir, 'img')));
    gulp.src('index.html').pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(config.releaseDir));
    gulp.src(config.markdownFileDir + "/**/*").pipe(gulp.dest(path.join(config.releaseDir, config.markdownFileDir)));
    gulp.src('./newgulp.js').pipe(rename('gulpfile.js')).pipe(gulp.dest(config.releaseDir));
});