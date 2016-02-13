'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require('./package.json');

function getTask(task,options) {
	options = options || {};
	var configuration = _.extend({},config,options);
	return require('./gulp/tasks/' + task)(configuration, gulp, plugins);
}

/**
 * gulp subtasks definition
 */
gulp.task('jsvalidate',getTask('jsvalidate'));
gulp.task('jslint',['jsvalidate'],getTask('jslint'));
gulp.task('sasslint',getTask('sasslint'));
gulp.task('serve',getTask('webserver'));
gulp.task('karma',getTask('karmatest',{singleRun:true}));
gulp.task('karmarun',getTask('karmatest',{singleRun:false}));
/**
 * end gulp subtasks definition
 */

/**
 * gulp main tasks
 */
gulp.task('default',['sasslint'],function(){

});