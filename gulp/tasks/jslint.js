module.exports = function(config, gulp, plugins) {

	return function() {
		return gulp.src("./app/src/js/*.js")
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'));
	};
};