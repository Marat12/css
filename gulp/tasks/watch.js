var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();    

gulp.task('watch', function(){
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});

// gulp.task('watch', function(){
    
//     browserSync.init({
//         baseDir: "app"
//     });
//     watch('./app/index.html', function(){
//         browserSync.reloaded();
//     });
// });

// gulp.task('cssInject', ['styles'], function() {
//   return gulp.src('./app/temp/styles/styles.css')
//       .pipe(browserSync.stream());
// });