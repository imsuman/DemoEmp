'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
        dir:{
        	webapp: 'WebContent',
        	dist: 'dist'
        },        
        copy:{
        	dist: {
        		files:[{
        			expand: true,
        			cwd: '<%=dir.WebContent%>',
        			src: [
        				'**',
        				'!test/**'
        			],
        			dest: '<%= dir.dist %>'
        		}]
        	}
        },
        
        clean: {
        	dist: '<%= dir.dist %>/'
        },

		openui5_preload: {
			component: {
				options: {
					resources: {
						cwd: 'WebContent',
						prefix: 'WebContent',
						src: [
							'**/*.js',
							'**/*.fragment.html',
							'**/*.fragment.json',
							'**/*.fragment.xml',
							'**/*.view.html',
							'**/*.view.json',
							'**/*.view.xml',
							'**/*.properties',
							'manifest.json',
							'!test/**'
						]
					},
					dest: 'dist'
				},
				components: 'WebContent'
			}
		}

	});

	// These plugins provide necessary tasks.
	//grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-openui5');
	//grunt.loadNpmTasks('grunt-eslint');
	//grunt.loadNpmTasks('grunt-karma');

	// Server task
//	grunt.registerTask('serve', function(target) {
//		grunt.task.run('openui5_connect:' + (target || 'src') + ':keepalive');
//	});

	// Linting task
//	grunt.registerTask('lint', ['eslint']);

	// Test tasks
	//grunt.registerTask('test', ['clean:coverage', 'openui5_connect:src', 'karma:ci']);
	//grunt.registerTask('watch', ['openui5_connect:src', 'karma:watch']);
	//grunt.registerTask('coverage', ['clean:coverage', 'openui5_connect:src', 'karma:coverage']);

	// Build task
	grunt.registerTask('build', ['clean:dist', 'openui5_preload', 'copy']);

	// Default task
	grunt.registerTask('default', ['clean', 'build']);
};