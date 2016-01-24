var ResminApp = angular.module('ResminApp', ['ngRoute','ngResource'])
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
        }]);