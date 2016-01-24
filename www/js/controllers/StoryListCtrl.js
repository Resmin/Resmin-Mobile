ResminApp.controller('StoryListCtrl', function StoryListCtrl($scope, $route, $location, localStorageService, Api) {
    $scope.list = {};
    $scope.page = 1;

    $scope.loadStoryList = function(){
        var data = {
            page: $scope.page,
            limit: 12
        }
        Api.storyList(data,
            function (successResponse){
                $scope.list = successResponse;
            },
            function (errorResponse){
                alert('kullanıcı adı ya da şifre hatalı');
            }
        );
    }

    $scope.loadStoryList();

});