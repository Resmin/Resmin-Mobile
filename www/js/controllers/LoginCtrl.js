ResminApp.controller('LoginCtrl', function LoginCtrl($scope, $route, Api) {
    $scope.data = {
        username: '',
        password: ''
    };

    Api.login(
        {username:'asd',password:'asdsad'},
        function (successResponse){
            console.log('success');
            console.log(successResponse);
        },
        function (errorResponse){
            console.log('error');
            console.log(errorResponse);
        }
    );

    $scope.submitButton = function () {
        if ($scope.data.username && $scope.data.password) {
            Api.login({username:$scope.data.username,password:$scope.data.password});
        } else {
            console.log('hata ver');
        }
    }
});