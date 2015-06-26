module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: './assets/styles/',
            src: ['**/*.css', '!**/*.min.css'],
            dest: './assets/styles/',
            ext: '.min.css'
          }
        ]
      }
    }, // cssmin

    uglify: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: './assets/scripts/',
            src: ['**/*.js', '!**/*.min.js'],
            dest: './assets/scripts/',
            ext: '.min.js'
          }
        ]
      }

    }, // uglify

    imagemin: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: './assets/imgs/',
            src: ['**/*.png', '**/*.jpg', '**/*.gif'],
            dest: './assets/imgs/'
          }
        ]
      }
    }, // imagemin

    copy: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: './bower_components/',
            src: ['**/*.min.js', '**/*.min.map', '**/*.min.css', '**/fonts/*', '**/require.js', '!**/handlebars.*.min.js', '!**/jquery/src/**'],
            dest: './assets/vendor/'
          }
        ]
      }
    } // copy

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('csstask', ['cssmin']);
  grunt.registerTask('jstask', ['uglify']);
  grunt.registerTask('imgtask', ['imagemin']);
  grunt.registerTask('copytask', ['copy']);

  grunt.registerTask('default', ['csstask', 'jstask', 'imgtask', 'copytask']);
};