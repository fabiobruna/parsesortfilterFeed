module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    secret: grunt.file.readJSON('secret.json'),
    jshint: {
      files: ['resources/app.js'],
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
              'jquery/jquery.js': 'jquery/dist/jquery.js',
              'jquery/jquery-ui.js': 'jquery-ui/jquery-ui.js',
              'jquery/sortable.js': 'jquery-ui/ui/widgets/sortable.js',
              'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
              'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
              'bootstrap/bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.css',
              'jquery/jquery-ui.css': 'jquery-ui/themes/base/jquery-ui.css',
              'moment/moment.js': 'moment/moment.js',
              'jquery/images/': 'jquery-ui/themes/base/images/*'
            }
        }
    },
    rsync: {
      options: {
        args: ["--verbose -arvO --no-o --no-g --no-p"],
        exclude: [".git*", "*.scss", "node_modules", "bower_components"],
        recursive: true
      },
      home: {
        options: {
          src: "/",
          dest: '<%= secret.path %>',
          host: '<%= secret.host %>',
          delete: true // Careful this option could cause data loss, read the docs!
        }
      },
      prod: {
        options: {
          src: "/",
          dest: '<%= secret.pathp %>',
          host: '<%= secret.hostp %>',
          delete: true // Careful this option could cause data loss, read the docs!
        }
      },
      lkl: {
        options: {
          src: '<%= secret.source %>',
          dest: '<%= secret.pathl %>',
          delete: true // Careful this option could cause data loss, read the docs!
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-rsync');

 // Publieke taken
  grunt.registerTask('deployHome', [
    'buildHome'
  ]);
  grunt.registerTask('deployProd', [
    'buildProd'
    //    'release'
  ]);
  grunt.registerTask('deployLkl', [
    'buildLokaal'
    //    'release'
  ]);

  grunt.registerTask('deployLkl', [
//    'prebuild',
    'jshint',
    'bowercopy',
    'rsync:lkl'
//    'postbuild'
  ]);

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('default', ['bowercopy']);

};