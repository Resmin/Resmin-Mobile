ResminApp.controller('StoryDetailCtrl', function StoryDetailCtrl($scope, $route, $location, $routeParams, localStorageService, Api) {
    $scope.list = {};

    $scope.id = $routeParams.id;

    $scope.loadStoryList = function(){
        var data = {
            id: $scope.id,
        }
        Api.storyDetail(data,
            function (successResponse){
                console.log(successResponse);
                $scope.item = successResponse.data;
            },
            function (errorResponse){
                alert('kullanıcı adı ya da şifre hatalı');
            }
        );
    }

    $scope.loadStoryList();

});