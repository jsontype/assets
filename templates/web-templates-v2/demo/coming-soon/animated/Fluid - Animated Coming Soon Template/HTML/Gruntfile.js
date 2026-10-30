module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: ['js/jquery-3.2.1.min.js', 'js/tether.min.js', 'js/bootstrap.min.js', 'js/viewport.min.js', 'js/aos.js', 'js/countdown.js', 'js/slick.min.js', 'js/smoothscroll.min.js', 'js/validate.js', 'js/contact.js', 'js/subscribe.js', 'js/script.js'],
                dest: '../dist/js/app.js',
            },
            css: {
                src: ['css/bootstrap.min.css', 'css/*.css', '!css/style.css', 'css/style.css'],
                dest: '../dist/css/app.css',
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> /n <%= pkg.version %> /n <%= pkg.author %> /n <%= pkg.license %> /n <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '../dist/js/app.js',
                dest: '../dist/js/app.min.js'
            }
        },
        cssmin: {
            css: {
                src: '../dist/css/app.css',
                dest: '../dist/css/app.min.css'
            }
        },
        processhtml: {
            dist: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: './', // Src matches are relative to this path.
                    src: ['*.html'], // Actual pattern(s) to match.
                    dest: '../dist/', // Destination path prefix.
                }],
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: ['fonts/*', 'images/**', 'php/**'],
                        dest: '../dist/',
                        filter: 'isFile'
                    }
                ],
            },
        },
        rcs: {
            css: {
                options: {
                    replaceCss: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'css/**/*.css',
                    dest: '../dist',
                }]
            },
            all: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['js/**/*.js', '*.html'],
                    dest: '../dist',
                }]
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-rcs');

    // Default task(s).
    //grunt.registerTask('default', ['uglify', 'rcs:css', 'rcs:all']);
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'processhtml', 'copy']);

};