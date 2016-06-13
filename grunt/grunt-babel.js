module.exports = function(grunt) {
  grunt.config('babel', {
      options: {
          sourceMap: true
      },
      dist: {
          files: [{
              expand: true,
              cwd: 'src',
              src: ['js/**/*.js', 'components/**/*.js'],
              dest: './build/'
          }]
      }
    });
};
