var gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    cssnano = require("gulp-cssnano"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    notify = require("gulp-notify");

/* build */
// npm init
//npm i gulp gulp-concat gulp-autoprefixer gulp-sass gulp-uglify gulp-notify gulp-sourcemaps --save-dev

//
// SASS - Compile SASS files into CSS
//
gulp.task("sass", function() {
    return gulp
        .src("html/assets/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix("last 3 version"))
        .pipe(concat("style.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("html/assets/css"));
});


//
// Gulp Watch and Tasks
//
//
gulp.task("watch", function(done) {
    gulp.watch("html/assets/scss/**/*.scss", gulp.series("sass"));

    done();
});

//
// CSS minifier copy vendor - merges and minifies the below given list of Front libraries into one vendor.min.css
//
gulp.task("mergeCSSVendor", function() {
    return gulp
        .src("html/assets/css/vendor/*.css")
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("html/assets/css"))
        .pipe(notify("CSS merge Done"));
});

gulp.task("minCSSVendor", function() {
    return gulp
        .src("html/assets/css/vendor.css")
        .pipe(cssnano())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("html/assets/css/"))
        .pipe(notify("CSS Vendor Minify Done"));
});

//
// JavaSript minifier - merges and minifies the below given list of Front libraries into one vendor.min.js
//

gulp.task("mergeJSVendor", function() {
    return gulp
        .src(
            "html/assets/js/vendor/*.js",
            "!html/assets/js/vendor/jquery-3.4.1.min.js",
            "!html/assets/js/vendor/jquery-migrate-1.4.1.min.js"
        )
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("html/assets/js"))
        .pipe(notify("JS merge Done"));
});

gulp.task("minJSVendor", function() {
    return gulp
        .src("html/assets/js/vendor.js")
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("html/assets/js/"))
        .pipe(notify("JS Vendor Minify Done"));
});

//
// Gulp Build Assets
//
gulp.task(
    "dist",
    gulp.series(
        "mergeCSSVendor",
        "minCSSVendor",
        "mergeJSVendor",
        "minJSVendor",
    )
);


gulp.task("default", gulp.series("watch"));
