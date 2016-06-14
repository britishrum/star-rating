module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: require('./package.json'),
    });
    grunt.loadTasks('grunt');

    grunt.registerTask('build', ['jshint', 'clean:all', 'babel', 'copy']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);
};
