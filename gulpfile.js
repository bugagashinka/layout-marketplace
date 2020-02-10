const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const gulpIf = require("gulp-if");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const wait = require("gulp-wait");
const del = require("del");

const isDev = process.env.NODE_ENV === "development";

const dirs = {
  src: "./src/",
  dest: "./build/"
};

const settings = {
  paths: {
    src: {
      root: dirs.src,
      styles: dirs.src + "styles/",
      scripts: dirs.src + "js/",
      images: {
        all: dirs.src + "img/"
      },
      fonts: dirs.src + "fonts/"
    },
    dest: {
      root: dirs.dest,
      styles: dirs.dest + "css/",
      scripts: dirs.dest + "js/",
      images: {
        all: dirs.dest + "img/"
      },
      fonts: dirs.dest + "fonts/"
    }
  },
  vendor: {
    styles: [
      "./node_modules/normalize.css/normalize.css",
      "./node_modules/magnific-popup/dist/magnific-popup.css",
      "./node_modules/slick-carousel/slick/slick.css"
    ],
    scripts: []
  }
};

function clean() {
  return del(settings.paths.dest.root);
}

function vendorScripts(done) {
  done();
}

function scripts(done) {
  done();
}

function vendorStyles() {
  return gulp
    .src(settings.vendor.styles)
    .pipe(concat("libs.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest(settings.paths.dest.styles));
}

function styles() {
  return gulp
    .src(`${settings.paths.src.styles}styles.scss`, { sorcmaps: true })
    .pipe(wait(200))
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", sass.logError)
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(autoprefixer())
    .pipe(
      gulpIf(
        isDev,
        gulp.dest(settings.paths.dest.styles, { sourcemaps: true }),
        gulp.dest(settings.paths.dest.styles)
      )
    )
    .pipe(gulpIf(isDev, browserSync.stream()));
}

function fonts(done) {
  done();
}
function images(done) {
  done();
}
function icons(done) {
  done();
}

function html() {
  return gulp
    .src(`${settings.paths.src.root}*.html`)
    .pipe(gulp.dest(settings.paths.dest.root));
}

function server(done) {
  browserSync.init({
    server: settings.paths.dest.root,
    reloadOnRestart: true
  });
  done();
}

function watch(done) {
  gulp
    .watch(`${settings.paths.src.root}*.html`)
    .on("all", gulp.series(html, browserSync.reload));
  gulp
    .watch(`${settings.paths.src.scripts}*.js`)
    .on("all", gulp.series(scripts, browserSync.reload));
  gulp
    .watch(`${settings.paths.src.styles}**/*.scss`)
    .on("all", gulp.series(styles, browserSync.reload));
  done();
}

function build(done) {
  return gulp.series(
    clean,
    gulp.parallel(
      fonts,
      html,
      vendorStyles,
      styles,
      vendorScripts,
      scripts,
      images,
      icons
    )
  )(done);
}

exports.default = gulp.series(build, server, watch);
