module.exports = function(grunt) {
    grunt.config('copy', {
        lib: {
            files: [{
                expand: true,
                cwd: 'bower_components/webcomponentsjs',
                src: ['webcomponents.min.js'],
                dest: 'build/js/lib'
            }]
        },
        html: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['html/**/*.html', 'components/**/*.html'],
                dest: 'build'
            }]
        }
    });
};
