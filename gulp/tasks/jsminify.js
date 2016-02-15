module.exports = function(config, gulp, plugins) {

	return function() {

    return gulp.src('./app/src/js/*.js')
    	.pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('plugin.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./maps'))
		.pipe(gulp.dest('./app/dist/js'));

	};

};