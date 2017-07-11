var gulp = require('gulp');
var appPath = {//提前声明好一些路径常量
    src:'src/',
    build:'build/',
    dist:'dist/'
};
gulp.task('move',function () {
    gulp.src(appPath.src+'**/*.html')
        .pipe(gulp.dest(appPath.build))
        .pipe(gulp.dest(appPath.dist))
})
