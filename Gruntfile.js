// Copyright (c) 2016 - present UTN-LIS

module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        puma: {
            default_options: {
                options: {},
                files: {
                    'tests/tmp/result.js': [
                        'tests/tmp/files/puma-test.js',
                        'tests/tmp/files/puma-test2.js'
                    ]
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['puma']);
};
