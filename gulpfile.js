'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require('./package.json');

/**
 * global required tasks, like deleting the content of the dist folder
 */
var globalDependencies = ['clear'];

/**
 * helper functions
 */

function getTask(task, options) {
	options = options || {};
	var configuration = _.extend({}, config, options);
	return require('./gulp/tasks/' + task)(configuration, gulp, plugins);
}

function gulpTask(taskname, task, dependencies, options) {
	dependencies = dependencies || [];
	options = options || {};

	task = task || taskname;

	dependencies = _.concat(dependencies,globalDependencies);

	dependencies = _.filter(dependencies, function(a) {
		return a != taskname;
	});

	gulp.task(taskname,dependencies,getTask(task,options));
}



/**
 * gulp subtasks definition
 */
gulpTask('jsvalidate');
gulpTask('jslint','jslint',['jsvalidate']);
gulpTask('serve','webserver');
gulpTask('karma','karma',[],{
	singleRun: true
});
gulpTask('karmarun','karma',[],{
	singleRun: false 
});
gulpTask('sasslint');
gulpTask('sass','sass',['sasslint']);
gulpTask('clear');
gulpTask('jsminify','jsminify',['jslint']);
/**
 * end gulp subtasks definition
 */

/**
 * gulp main tasks
 */
gulp.task('default', ['jsminify'], function() {

});