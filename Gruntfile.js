module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'resources/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    bowercopy: {
        default: {
            options: {
                destPrefix: 'resources'
            },
            files: {
                // Keys are destinations (prefixed with `options.destPrefix`)
                // Values are sources (prefixed with `options.srcPrefix`); One source per destination
                // e.g. 'bower_components/chai/lib/chai.js' will be copied to 'test/js/libs/chai.js'
              'js/jquery.js': 'jquery/dist/jquery.js',
              'js/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
              'css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
              'css/bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.css'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('default', ['bowercopy']);

};