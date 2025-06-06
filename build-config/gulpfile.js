const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');

gulp.task('less', function () {
  return gulp
    .src('../components/**/index.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/es'))
    .pipe(gulp.dest('../dist/lib'));
});

// 新增：替换 JS 文件中的 .less 为 .css
gulp.task('replace-less-es', function () {
  return gulp
    .src(['../dist/es/**/*.js', '../dist/es/**/*.ts'])
    .pipe(replace(/\.less/g, '.css'))
    .pipe(gulp.dest('../dist/es'));
});

// 替换 CommonJS 中的 .less 为 .css
gulp.task('replace-less-lib', function () {
  return gulp
    .src('../dist/lib/**/*.js')
    .pipe(replace(/\.less/g, '.css'))
    .pipe(gulp.dest('../dist/lib'));
});

exports.default = gulp.series('less', 'replace-less-es', 'replace-less-lib');
