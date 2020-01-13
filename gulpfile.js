var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");

var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");

var server = require("browser-sync").create();


gulp.task("css", function () {
 return gulp.src("source/less/style.less")
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(less())
  .pipe(postcss([autoprefixer()]))
  .pipe(csso())
  .pipe(rename("style.min.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("source/css"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([imagemin.optipng({optimizationLevel: 7}),
    imagemin.jpegtran({progressive: true})]))
  .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
 return gulp.src("source/img/**/*.{png,jpg}")
 .pipe(webp({quality: 90}))
 .pipe(gulp.dest("source/img"))
});

gulp.task("copy", function () {
 return gulp.src([
 "source/fonts/**/*.{woff,woff2}",
 "source/img/**/*.webp",
 "source/css/**",
 "source/js/**",
 "source/*.ico",
 "source/*.pdf",
 "source/*.html"
 ], {
 base: "source"
 })
 .pipe(gulp.dest("dist"));
});


gulp.task("server", function () {
  server.init({server: "source/" });

  gulp.watch("source/less/**/*.less", gulp.series("css", server.reload));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));


gulp.task("product", gulp.series("css", "images", "webp", "copy"));
