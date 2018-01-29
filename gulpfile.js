var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

var plumber = require("gulp-plumber");
var notify = require("gulp-notify");

gulp.task("sass", function() {
  gulp
    .src("scss/**/*.scss")
    .pipe(
      plumber({
        errorHandler: function(err) {
          notify.onError({
            title: "Gulp error in " + err.plugin,
            message: err.toString()
          })(err);
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
        errLogToConsole: true
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "watch"]);
