
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            // compile the less into css
            build: {
                options: {
                    compress: false
                },
                files: {
                    "./public/css/screen.css": "./build/less/screen.less"
                }
            }
        },
        uglify: {
            js: {
                files: { './public/js/project.min.js': [
                    './build/js/vendor/jquery.min.js',
                    './build/js/vendor/what-input.min.js',
                    './build/js/**/*.js',
                ]},
                options: {
                    preserveComments: false
                }
            }
        },
        watch: {
            css: {
                files: ["./build/less/*.less", "./build/less/*/*.less"],
                tasks: ["less"]
            },
            js: {
                files: ["./build/js/*.js", "./build/js/*/*.js", "./build/js/*/*/*.js"],
                tasks: ["uglify:js"]
            }
        }

    });

    grunt.registerTask('default', ['less', 'uglify']);

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-newer");
};
