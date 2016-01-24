var ResminApp = angular.module('ResminApp', ['ngRoute','ngResource','LocalStorageModule','ngCordova','afkl.lazyImage'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'loginCtrl'
                })
                .when('/story-list', {
                    templateUrl: 'templates/story-list.html',
                    controller: 'StoryListCtrl',
                    controllerAs: 'storyListCtrl'
                })
                .when('/story-detail/:id', {
                    templateUrl: 'templates/story-detail.html',
                    controller: 'StoryDetailCtrl',
                    controllerAs: 'storyDetailCtrl'
                })
                .when('/question-detail/:id', {
                    templateUrl: 'templates/question-detail.html',
                    controller: 'QuestionDetailCtrl',
                    controllerAs: 'questionDetailCtrl'
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