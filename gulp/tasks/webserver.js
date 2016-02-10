module.exports = function(config, gulp, plugins) {
	return function() {
		return gulp.src("./")
			.pipe(plugins.serverLivereload({
				livereload: true,
				directoryListing: true,
				open: true
			}));
	};
};