''
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('compilar-script',function(){
    return gulp.src('js/*.js')//enderecos dos scripts
      .pipe(concat('script.js'))//juntar todos os scripts
      .pipe(uglify())//minificar o JavaScript
      .pipe(gulp.dest('minify'))//onde vai ser criado o arquivo compilado
})

gulp.task('compilar-css',function(){
    return gulp.src('css/*.css')
    .pipe(concat('styles.css'))//juntar todos os arquivos de css
    .pipe(gulp.dest('minify.css'))
     
})
