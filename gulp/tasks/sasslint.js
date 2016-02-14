module.exports = function(config, gulp, plugins) {

		var useEndless = (config && config.endless) ? true : false;

	return function() {
		return gulp.src("./app/src/scss/*.scss")
			.pipe(plugins.scssLint({
				'reporterOutput': './app/reports/scss.xml',
				'reporterOutputFormat': 'Checkstyle',
				'endless':useEndless,
				
			}));
	};
};