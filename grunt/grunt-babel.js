module.exports = function(grunt) {
  grunt.config('babel', {
      options: {
          sourceMap: true
      },
      dist: {
          files: [{
              expand: true,
              cwd: 'src',
              src: ['components/**/*.js'],
              dest: './build/'
          }]
      }
    });
};
