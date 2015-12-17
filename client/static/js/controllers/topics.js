myApp.controller('TopicsController', function(UserFactory, CategoryFactory){
	var _this = this;
	var getUser = function(){
		UserFactory.getCurrentUser(function(data){
			_this.user = data;
		});
	}
	getUser();
	var getCategories = function(){
		CategoryFactory.index(function(data){
			_this.categories = data;
			console.log(_this.categories);
		})
	}
	getCategories();

})