module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          "css/rootego.css": "less/rootego.less"
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: ['less/**/*.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};