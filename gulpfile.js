'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require('package.json');

function getTask(task) {
	return require('./tasks/' + task)(config, gulp, plugins);
}