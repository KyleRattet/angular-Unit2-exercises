// add scripts
app.controller('myController', function($scope) {
  $scope.greeting = "Hello-World!";
});

app.controller('MovieController', function($scope, $http) {

  // $scope.greeting = "movie greeting test";

  $scope.getMovies = function () {
    console.log('test');
    console.log($scope.movieQuery);
    var movie =
  $http.get('http://www.omdbapi.com/?s='+$scope.movieQuery+'&r=json').then(function(data){
    console.log(data)
    $scope.moviesData = data.data.Search;
  });
  };


  //show page when link is clicked
   $scope.showMovie = function () {
    console.log('test show movie');
    // $scope.imbd =imbdID
    console.log(this.movie.imdbID, "this.movie.id");
    $scope.resultsDiv = false;
    $scope.singleMovie = true;
    $http.get('http://www.omdbapi.com/?i='+ this.movie.imdbID+'&plot=full&r=json').success(function(data){
    console.log(data)
    $scope.movieData = data;
  });
  };


});


