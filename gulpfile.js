const { src, dest, series } = require('gulp')
const chalk = require('chalk')
const log = console.log
const sass = require('gulp-dart-sass')
const del = require('del')

function test(done) {
  log(chalk.red('test'))
  done()
}

function clean() {
  return del('./dist')
}

function styles() {
  return src('./src/scss/**/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/', { sourcemaps: '.' }))
}

module.exports = {
  test,
  clean,
  default: series(styles)
}