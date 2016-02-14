module.exports = function(config, gulp, plugins) {

	var del = require('del');

	return function() {
		return del('./app/dist/**/*');
	};
};