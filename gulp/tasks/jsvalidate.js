module.exports = function(config, gulp, plugins) {
	return function() {
		return gulp.src('./app/src/js/*.js')
		.pipe(plugins.jsvalidate());
	};
};