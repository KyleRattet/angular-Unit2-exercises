//implicit notation

// app.controller('myController', function($scope) {
//   $scope.greeting = "Hello-World!";
// });

// app.controller('MovieController', function($scope, $http) {


//   $scope.getMovies = function () {
//     var movie =
//   $http.get('http://www.omdbapi.com/?s='+$scope.movieQuery+'&r=json').then(function(data){
//     $scope.moviesData = data.data.Search;
//   });
//   };

//    $scope.showMovie = function () {
//     $scope.resultsDiv = false;
//     $scope.singleMovie = true;
//     $http.get('http://www.omdbapi.com/?i='+ this.movie.imdbID+'&plot=full&r=json').success(function(data){
//     $scope.movieData = data;
//   });
//   };

// });

// app.controller('ContactController', ["$scope", "ContactList", function($scope, ContactList){
//   $scope.greeting = "Hello-World!";
//    $scope.contactData = ContactList.contactList;

//    // TODO: Your ContactList controller code here.
// }]);


//inline array notation


app.controller("MovieController", ['$scope', '$http', function($scope, $http) {


  $scope.getMovies = function () {
    var movie =
  $http.get('http://www.omdbapi.com/?s='+$scope.movieQuery+'&r=json').then(function(data){
    $scope.moviesData = data.data.Search;
  });
  };

   $scope.showMovie = function () {
    $scope.resultsDiv = false;
    $scope.singleMovie = true;
    $http.get('http://www.omdbapi.com/?i='+ this.movie.imdbID+'&plot=full&r=json').success(function(data){
    $scope.movieData = data;
  });
  };

}]);

// app.controller('ContactController', ["$scope", "ContactList", function($scope, ContactList){
//   $scope.greeting = "Hello-World!";
//    $scope.contactData = ContactList.contactList;

//    // TODO: Your ContactList controller code here.
// }]);
