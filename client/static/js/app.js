var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/views/partials/users_new.html',
		controller: 'UsersController as UsersCtrl'
	})
	.when('/topics', {
		templateUrl: '/static/views/partials/topics_index.html',
		controller: 'TopicsController as TopicsCtrl'
	})
})