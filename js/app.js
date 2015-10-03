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
       .when('/shopabout', {
        templateUrl: 'partials/shopabout.html',
        controller: 'MainShoppingController'
      })
        .when('/shopcontact', {
        templateUrl: 'partials/shopcontact.html',
        controller: 'MainShoppingController'
      })
       .when('/carousel', {
        templateUrl: 'partials/carousel.html',
        controller: 'CarouselController'
      })
}]);



