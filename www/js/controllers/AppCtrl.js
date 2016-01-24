ResminApp.controller('AppCtrl', function AppCtrl($rootScope, $route, $window, $location, localStorageService) {

    $rootScope.accessToken = localStorageService.get('accessToken');

    /**
     * If we dont have any access token, we are sending people to login page.
     */
    if (!$rootScope.accessToken) {
        if ($location.path() != '/login') {
            $location.path('/login');
        }
    }else{
        //we must check access token is valid
        //assume that it is valid
        if ($location.path() == '/' || $location.path() == '' ) {
            $location.path('/story-list');
        }
    }

});