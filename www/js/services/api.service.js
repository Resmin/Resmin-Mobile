ResminApp.factory('Api', ['$resource','$http',
    function($resource){
        var url = 'https://staging.resm.in/v2/';
        return $resource(url, {}, {
            query: {
                method:'GET',
                params:{page:1},
                isArray:true
            },
            login: {
                url: url+'auth/login',
                method:'POST',
                params:{username:'a',password:'b'},
                isArray:false
            }
        });
    }]);