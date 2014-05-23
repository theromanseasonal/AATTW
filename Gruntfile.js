module.exports = function(grunt) {


	grunt.initConfig({
		clean: ['./dist'],
		copy: {
        	release: {
            	files: [ { src: './**', dest: './dist/' } ]
        	}
    	}
	});


	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['clean', 'copy']);

};