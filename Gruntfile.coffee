module.exports = (grunt) =>

	grunt.initConfig

		pkg: grunt.file.readJSON('package.json')

		inlinecss:
			main:
				options: [
					webResources: {images: false}
				],
				files: [
					expand: true,
					cwd: 'out/emails/',
					src: ['*.html'],
					dest: 'src/files/emails/inlined/'
				]

		watch:
			files: ['out/emails/*.html'],
			tasks: ['inlinecss']


	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-inline-css'

	grunt.registerTask 'default', ['inlinecss', 'watch']
