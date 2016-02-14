module.exports = function(config, gulp, plugins) {

	return function() {

    return gulp.src('./app/dist/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./app/dist/css/*.min.css'));

	};

};