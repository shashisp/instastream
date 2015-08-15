var app = angular.module("InstaStream", []);


app.factory('instagram', ['$http', function($http){

	return {
		fetchPopular: function(callback){
            
            var endPoint = "https://api.instagram.com/v1/users/1364989185/media/recent/?client_id=642176ece1e7445e99244cec26f4de1f&count=4&callback=JSON_CALLBACK";
       	     
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
		}
	}

}]);



app.directive('myStream',['instagram', function(instagram) {
    return {
        restrict: 'E',
        replace: true,
        template: '<p>{{ pics }}</p>',
        controller: function($scope) {
        },
        link: function(scope) {
        	scope.pics = []
            scope.pics=instagram.data;
        }
    };
}]);