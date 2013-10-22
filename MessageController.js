

app.controller('MessageController', function($scope, $http){
	var messages = [];


		$http.get('http://localhost:3000/getMessages', function(response){
			
			$scope.messages = response.results;
			$scope.newMessage = '';
			$scope.apply();
			});
		

		$scope.addMessage = function() {
			$http.post('http://localhost:3000/sendMessage', data).response(function(){
			});

};
});