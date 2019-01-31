const gulp = require( 'gulp' )
const clean_css = require( 'gulp-clean-css' )
const htmlmin = require( 'gulp-htmlmin' )
const tar = require( 'gulp-tar' )
const gzip = require( 'gulp-gzip' )

function default_task( call_on_finish ) {
    console.log( 'Moving all PDF\'s and Images to prod/' )
    gulp.src( 'files/*' )
        .pipe( gulp.dest( 'prod/files' ) )
    
    gulp.src( [ 'images/main-image-mobile.jpg', 'images/main-image.jpg', 'images/yolanda-image.jpeg' ] )
        .pipe( gulp.dest( 'prod/images' ) )
    gulp.src( 'favicon.ico' )
        .pipe( gulp.dest( 'prod' ) )    


    // console.log( 'Moving Fonts' )
    // gulp.src( 'open-sans/OpenSans-Regular.ttf' )
    //     .pipe( gulp.dest( 'prod/open-sans' ) )


    console.log( 'Moving and minifying CSS files' )
    // gulp.src( 'bootstrap/css/bootstrap.min.css' )
    //     .pipe( gulp.dest( 'prod/bootstrap/css' ) )
    
    gulp.src( 'presentation.css' )
        .pipe( clean_css( { compatibility: 'ie9' } ) )
        .pipe( gulp.dest( 'prod' ) )


    // console.log( 'Moving JS' )
    // gulp.src( 'jquery-3.3.1.min.js' )
    //     .pipe( gulp.dest( 'prod' ) )

    // gulp.src( 'bootstrap/js/bootstrap.min.js' )
    //     .pipe( gulp.dest( 'prod/bootstrap/js' ) )


    console.log( 'Moving and minifying HTML' )
    gulp.src( '*.html' )
        .pipe( htmlmin({ collapseWhitespace: true }) )
        .pipe( gulp.dest( 'prod' ) )

    call_on_finish()
}

function tar_and_gz( call_on_finish ) {
    console.log( 'Writing files in prod/ to weinbergerbowenworks.com.tar.gz' )
    gulp.src( 'prod/**' )
        .pipe( tar( 'weinbergerbowenworks.com.tar' ) )
        .pipe( gzip() )
        .pipe( gulp.dest( '.' ) )
    
    call_on_finish()
}

gulp.task( 'default', default_task )
gulp.task( tar_and_gz )
