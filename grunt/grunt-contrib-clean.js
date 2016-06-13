module.exports = function(grunt) {
  grunt.config('clean', {
      js: ['build/js'],
      html: ['build/html'],
      components: ['build/components'],
      all: ['build']
  });
};
