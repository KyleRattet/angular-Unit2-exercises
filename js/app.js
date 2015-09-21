//implicit notation
// var app = angular.module('myApp', ['ngRoute']);

// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/movies', {
//         templateUrl: 'partials/movies.html',
//         controller: 'MovieController'
//       })
//       .when('/contacts', {
//         templateUrl: 'partials/contacts.html',
//         controller: 'ContactController'
//       })
// });

//inline array notation

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieController'
      })
      .when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller: 'ContactController'
      })
       .when('/contact/:id', {
        templateUrl: 'partials/singleContact.html',
        controller: 'SingleContactController'
      })
       .when('/shop', {
        templateUrl: 'partials/shopMain.html',
        controller: 'MainShoppingController'
      })
       .when('/shoppingCart', {
        templateUrl: 'partials/shopBag.html',
        controller: 'MainShoppingController'
      })

}]);



