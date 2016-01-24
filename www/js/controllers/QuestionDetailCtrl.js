ResminApp.controller('QuestionDetailCtrl', function QuestionDetailCtrl($scope, $route, $location, $routeParams, localStorageService, Api) {
    $scope.list = {};
    $scope.item = {};

    $scope.id = $routeParams.id;

    $scope.loadQuestion = function(){
        var data = {
            id: $scope.id,
        }
        Api.questionDetail(data,
            function (successResponse){
                $scope.item = successResponse.data;
                $scope.loadStoryList();
            },
            function (errorResponse){
                alert('hata');
            }
        );
    }

    $scope.loadStoryList = function(){
        var data = {
            id: $scope.id,
        }
        Api.questionStoryList(data,
            function (successResponse){
                $scope.list = successResponse;
            },
            function (errorResponse){
                alert('hata');
            }
        );
    }

    $scope.loadQuestion();

});