/*
 |--------------------------------------------------------------------------
 |	Core & Plugins
 |--------------------------------------------------------------------------
 */

    var gulp        = require('gulp');
    var concat      = require('gulp-concat');
    var less        = require('gulp-less');
    var clean       = require('gulp-clean');



/*
 |--------------------------------------------------------------------------
 |	Vars & Locations
 |--------------------------------------------------------------------------
 */

    var biuldTeste      = './tests/';
    var biuldDist       = './dist/';
    var devDir          = './dev/';

/*
 |--------------------------------------------------------------------------
 |	Clean Task
 |--------------------------------------------------------------------------
 */

    gulp.task('cleanTest', function(){
        return gulp.src([biuldTeste])
            .pipe(clean());
    });

    gulp.task('cleanDist', function(){
        return gulp.src([biuldDist])
            .pipe(clean());
    });


/*
 |--------------------------------------------------------------------------
 |	Task teste pre-produção
 |--------------------------------------------------------------------------
 */

    gulp.task('less', function () {
        return gulp.src(devDir + 'LESS/_noClass.less')
            .pipe(concat('noclass.css'))
            .pipe(less())
            .pipe(gulp.dest('./tests/css'));
    });

    gulp.task('default', ['less']);
