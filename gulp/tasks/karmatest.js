module.exports = function(config, gulp, plugins) {

	return function(done) {

		var useSingleRun = (config && config.singleRun) ? true : false;
		var Server = require('karma').Server; //karma doesn't have the 'gulp-' prefix, ergo the plugin loader doesn't load it



		return new Server({
			configFile: __dirname+'/../karma.conf.js',
			singleRun: useSingleRun
		}, function(){
			done();
		}).start();
	};
};