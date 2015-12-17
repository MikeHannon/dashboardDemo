myApp.controller('UsersController', function(UserFactory, $location){
	var _this = this;
	this.create = function(){
		this.errors = '';
		UserFactory.createUser(this.usersInfo, function(data){
			if(data.errors){
				console.log('are we here?', data.errors.name.message)
				_this.errors = data.errors.name.message;
			}
			else{
				_this.user = data;
				$location.path('/topics');
			}
		})
	}
})