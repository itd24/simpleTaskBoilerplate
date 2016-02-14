module.exports = function(config, gulp, plugins) {
	return function() {
		return gulp.src('./app/src/scss/**/*.scss')
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				outputStyle: 'compressed'
			}).on('error', plugins.sass.logError))
			.pipe(plugins.sourcemaps.write('./maps'))
			.pipe(gulp.dest('./app/dist/css'));
	};
};