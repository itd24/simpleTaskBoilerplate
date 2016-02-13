module.exports = function(config, gulp, plugins) {

	return function() {
		return gulp.src("./app/src/scss/*.scss")
		.pipe(plugins.scssLint());
	};
};