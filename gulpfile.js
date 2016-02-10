'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require('./package.json');

function getTask(task) {
	return require('./gulp/tasks/' + task)(config, gulp, plugins);
}

/**
 * gulp subtasks definition
 */
gulp.task('jsvalidate',getTask('jsvalidate'));
gulp.task('jslint',['jsvalidate'],getTask('jslint'));
gulp.task('serve',getTask('webserver'));
/**
 * end gulp subtasks definition
 */

/**
 * gulp main tasks
 */
gulp.task('default',['jslint'],function(){

});