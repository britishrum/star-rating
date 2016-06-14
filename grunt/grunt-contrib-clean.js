module.exports = function(grunt) {
  grunt.config('clean', {
      html: ['build/html'],
      components: ['build/components'],
      all: ['build']
  });
};
