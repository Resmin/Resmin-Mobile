var ResminApp = angular.module('ResminApp', ['ngRoute','ngResource','LocalStorageModule'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'loginCtrl'
                })
                .when('#!/test', {
                    templateUrl: 'templates/chapter.html',
                    controller: 'ChapterCtrl',
                    controllerAs: 'chapter'
                })
                .otherwise({
                    templateUrl: 'templates/index.html',
                    //controller: 'AppCtrl'
                });

            //$locationProvider.html5Mode(true);
        }])
    .config(['$resourceProvider', function($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]).config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            //.setStorageType('sessionStorage')
            .setStorageType('localStorage')
            .setPrefix('ResminApp');
    });