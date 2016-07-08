// Generated on 2016-03-17 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        configureProxies: 'grunt-connect-proxy',
        ngconstant: 'grunt-ng-constant',
        cdnify: 'grunt-google-cdn'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        project: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= project.app %>/*.js',
                    '<%= project.app %>/modules/*/*.js',
                    '<%= project.app %>/modules/*/controllers/*.js',
                    '<%= project.app %>/modules/*/services/*.js'
                ],
                tasks: ['newer:jshint:all', 'newer:jscs:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            styles: {
                files: ['<%= project.app %>/modules/*/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'postcss']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= project.app %>/modules/*/views/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= project.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            proxies: [
                {
                    context: '/TastetsWeb/services/rest',
                    host: 'localhost',
                    port: 8084,
                    https: false,
                    changeOrigin: false
                }
            ],
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];
                        return middlewares.concat(
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/app/modules/*/styles',
                                connect.static('./app/modules/*/styles')
                            ),
                            connect.static(appConfig.app)
                        );
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= project.dist %>'
                }
            }
        },
        ngconstant: {
            options: {
                name: 'config',
            },
            develop: {
                options: {
                    dest: '<%= project.app %>/config.js'
                },
                constants: {
                    ENV: {
                        name: 'develop',
                        endpoint: '/TastetsWeb/services/rest'
                    }
                }
            },
            production: {
                options: {
                    dest: '<%= project.app %>/config.js'
                },
                constants: {
                    ENV: {
                        name: 'production',
                        endpoint: 'http://172.16.120.14'
                    }
                }
            }
        },

        // Make sure there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= project.app %>/*.js',
                    '<%= project.app %>/modules/*/*.js',
                    '<%= project.app %>/modules/*/controllers/*.js',
                    '<%= project.app %>/modules/*/services/*.js'
                ]
            }
        },

        // Make sure code styles are up to par
        jscs: {
            options: {
                config: '.jscsrc',
                verbose: true
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= project.app %>/modules/*/*.js',
                    '<%= project.app %>/modules/*/controllers/*.js'
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= project.dist %>',
                        '!<%= project.dist %>/.git'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({ browsers: ['last 1 version'] })
                ]
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= project.app %>/index.html'],
                ignorePath: /\.\.\//
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= project.app %>/index.html',
            options: {
                dest: '<%= project.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= project.dist %>/*.html'],
            css: ['<%= project.dist %>/styles/{,*/}*.css'],
            js: ['<%= project.dist %>/modules/*/*.js',
                '<%= project.dist %>/modules/*/services/*.js',
                '<%= project.dist %>/modules/*/controllers/*.js'
            ],
            options: {
                assetsDirs: [
                    '<%= project.dist %>',
                    '<%= project.dist %>/images',
                    '<%= project.dist %>/styles'
                ],
                patterns: {
                    js: [
                        [/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
                    ]
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= project.dist %>/styles/app.css': [
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= project.app %>/images',
                    src: '*.{png,jpg,jpeg,gif}',
                    dest: '<%= project.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= project.app %>/images',
                    src: '*.svg',
                    dest: '<%= project.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= project.dist %>',
                    src: ['*.html'],
                    dest: '<%= project.dist %>'
                }]
            }
        },

        ngtemplates: {
            dist: {
                options: {
                    module: 'rsliteapp',
                    htmlmin: '<%= htmlmin.dist.options %>',
                    usemin: 'scripts/scripts.js'
                },
                cwd: '<%= project.app %>',
                src: 'modules/*/views/{,*/}*.html',
                dest: '.tmp/templateCache.js'
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= project.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: '<%= project.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'lenguages/{,*/}*.*',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= project.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: '<%= project.dist %>'
                }]
            },
            styles: {
                expand: true,
                flatten: true,
                dest: '.tmp/styles/',
                src: '<%= project.app %>/modules/*/styles/{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'ngconstant:develop',
            'configureProxies',
            'wiredep',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'ngconstant:production',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'postcss',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        'uglify',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'newer:jscs',
        'build'
    ]);
};
