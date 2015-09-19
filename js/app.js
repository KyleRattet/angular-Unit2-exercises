var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
});

app.config(function($routeProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieController'
      })
});




