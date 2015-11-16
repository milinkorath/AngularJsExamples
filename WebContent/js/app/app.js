var app=angular.module("app1",[]);
app.config(function($routeProvider)
{
	$routeProvider.when("/login", {
		templateUrl: "login.html",
		controller: "LoginController"
		
	});
	
	$routeProvider.when("/home", {
		templateUrl: "home.html",
		controller: "HomeController"
		
	});
	
	$routeProvider.otherwise({redirectTo: "/login"})

});

app.controller("LoginController", function($scope) {
	
	$scope.title="MyTitle";
})
app.controller("HomeController", function($scope) {
	
	$scope.title="MyTitle";
})