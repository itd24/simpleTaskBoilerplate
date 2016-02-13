// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      '../app/vendor/jquery/dist/jquery.min.js',
      '../app/src/js/**/*.js',
      '../app/tests/**/*.spec.js'
    ]
  });
};