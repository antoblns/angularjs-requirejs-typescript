/// <reference path='../typings/all.d.ts' />

requirejs.config({
    paths: {
        text: 'bower_components/requirejs-text/text',
        domReady: 'bower_components/requirejs-domready/domReady',
        angular: 'bower_components/angular/angular',
        //'angular-animate': '../lib/angularjs/angular-animate',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-resource': 'bower_components/angular-resource/angular-resource'
    },

    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular'],
            exports: 'angular-animate'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular-resource'
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});