ResminApp.controller('QuestionDetailCtrl', function QuestionDetailCtrl($scope, $route, $location, $routeParams, $cordovaCamera, localStorageService, Api) {
    $scope.list = {};
    $scope.item = {};

    $scope.id = $routeParams.id;
    $scope.uploadPreview = false;
    $scope.base64Image = '';
    $scope.imagePath = '';

    $scope.loadQuestion = function () {
        var data = {
            id: $scope.id,
        }
        Api.questionDetail(data,
            function (successResponse) {
                $scope.item = successResponse.data;
                $scope.loadStoryList();
            },
            function (errorResponse) {
                alert('hata');
            }
        );
    }

    $scope.cancelUpload = function () {
        $scope.uploadPreview = false;
        $scope.base64Image = "";
    }

    $scope.tookPhoto = function () {
        var options = {
            quality: 95,
            //destinationType: Camera.DestinationType.DATA_URL,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true,
            correctOrientation: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            //console.log(imageData);
            $scope.uploadPreview = true;
            $scope.imagePath = imageData;
        }, function (err) {
            // error
        });

        $cordovaCamera.cleanup().then(function(){

        });
    }

    $scope.loadStoryList = function () {
        var data = {
            id: $scope.id,
        }
        Api.questionStoryList(data,
            function (successResponse) {
                $scope.list = successResponse;
            },
            function (errorResponse) {
                alert('hata');
            }
        );
    }

    $scope.loadQuestion();

});