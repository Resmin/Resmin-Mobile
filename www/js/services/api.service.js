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
            }
        });
    }]);