module.exports = function(grunt) {
    grunt.config('watch', {
        scripts: {
            files: [
                'src/js/**/*.js',
                'src/components/**/*.js'
            ],
            tasks: [
                'jshint', 'babel'
            ]
        },
        html: {
            files: [
                'src/html/**/*.html',
                'src/components/**/*.html'
            ],
            tasks: [
                'copy:html'
            ]
        }
    });
};
