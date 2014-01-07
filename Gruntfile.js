module.exports = function(grunt) {

	// A very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});
};