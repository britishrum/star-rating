module.exports = function(grunt) {
    grunt.config('watch', {
        scripts: {
            files: [
                'src/components/**/*.js'
            ],
            tasks: [
                'jshint', 'babel'
            ]
        },
        html: {
            files: [
                'src/**/*.html',
                'src/components/**/*.html',
                'src/css/**/*.css'
            ],
            tasks: [
                'copy:html'
            ]
        }
    });
};
