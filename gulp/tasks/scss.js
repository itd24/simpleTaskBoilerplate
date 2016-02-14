module.exports = function(config, gulp, plugins) {

	return function() {
		return gulp.src(['./app/src/scss/**/*.scss', '!./app/src/scss/**/_*.scss'])
		.pipe(plugins.scss(
            {
            	"bundleExec": false,
            	"tmpPath":'./tmp/scss'
            }
        )).pipe(gulp.dest("./app/dist/css"));
	};

};