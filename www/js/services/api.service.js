ResminApp.factory('Api', ['$resource','$http',
    function($resource){
        var url = 'https://staging.resm.in/v2/';
        return $resource(url, {}, {
            login: {
                url: url+'auth/login',
                method:'POST',
                isArray:false
            },
            logout: {
                url: url+'auth/logout',
                method:'POST',
                isArray:false
            },
            storyList: {
                url: url+'story',
                method:'GET',
                isArray:false
            },
            storyDetail: {
                url: url+'story/:id',
                method:'GET',
                isArray:false
            },
            questionDetail: {
                url: url+'question/:id',
                method:'GET',
                isArray:false
            },
            questionStoryList: {
                url: url+'question/:id/stories',
                method:'GET',
                isArray:false
            }
        });
    }]);