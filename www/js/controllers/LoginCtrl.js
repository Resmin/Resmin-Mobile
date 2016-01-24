ResminApp.controller('LoginCtrl', function LoginCtrl($scope, $route, $location, localStorageService, Api) {
    $scope.data = {
        username: '',
        password: ''
    };

    $scope.accessToken = $scope.$root.accessToken;

    $scope.submitButton = function () {
        if ($scope.data.username && $scope.data.password) {
            Api.login(
                $scope.data,
                function (successResponse){
                    if(successResponse.data.access_token){
                        $scope.$root.accessToken = successResponse.data.access_token;
                        $scope.accessToken = $scope.$root.accessToken;
                        localStorageService.set('accessToken',successResponse.data.access_token);
                        $location.path('/');
                    }
                },
                function (errorResponse){
                    alert('kullanıcı adı ya da şifre hatalı');
                }
            );
        } else {
            console.log('hata ver');
        }
    }
});