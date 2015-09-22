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

app.controller('ContactController', ["$scope", "$http","ContactList", function($scope, $http, ContactList){
  $scope.greeting = "testing contacts greeting";
  $scope.greetingSingle = "testing single contact greeting";
  //scope to access the contactlist array of contacts
  $scope.contacts = ContactList.contactList;

  ContactList.findContact($scope);

  $scope.newContact = function(){
    // console.log("test click");
      ContactList.addContact($scope, $http);
      // console.log($scope.contacts)

    };

  $scope.deleteContact = function($index, contact){

    $scope.contacts.splice($index, 1);

};


}]);

//view single contact controller, uses same Contact list service
app.controller('SingleContactController', ['$scope', '$routeParams', '$http', 'ContactList', function($scope, $routeParams, $http, ContactList){
  // $scope.test = "testing single contact greeting";
    $scope.contacts = ContactList.contactList;
    console.log($routeParams.id)
    var id = $routeParams.id;
    ContactList.singleContact($scope, $http, id);
}]);


//shopping main controller
app.controller('MainShoppingController', ['$scope', 'TeaList', function($scope, TeaList){

  $scope.teas = TeaList.teaList;
  $scope.cart = TeaList.cart;
  $scope.bag = "Empty!";
  $scope.quantity = 0;
  var totalQuantity = 0;


  $scope.addToCart = function () {

    var addedTea = function(tea, quantity) {
        this.tea = tea;
        this.quantity = quantity;
    }

    var quantity = this.quantity;
    var newTea = new addedTea(this.tea, quantity)

    $scope.cart.push(newTea);
    totalQuantity += +quantity;
    $scope.bag = +totalQuantity;

  }

    $scope.grandTotal = TeaList.grandTotal;


  $scope.cartTotal = function () {
    $scope.mainShoppingPage = true;
    $scope.shoppingCart = true;
    var subtotal;
    var grandTotal = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
     subtotal= $scope.cart[i].tea.price * parseFloat($scope.cart[i].quantity);
     grandTotal = parseFloat(grandTotal) + parseFloat(subtotal);
    }
    $scope.grandTotal = grandTotal;
  }

    $scope.buttonLable = "Edit";
    //edit quantity in bag
  $scope.edit = function () {
    $scope.teaQuantity = true;
    $scope.editTea = true;
    $scope.editQuanity = true;
    $scope.saveQuanity = true;
    $scope.buttonLable = "Save";
    }

    //
  console.log($scope.cart);

  $scope.remove = function () {
    //find correct tea in the cart to remove

    console.log($scope.cart);
    for (var i = 0; i < $scope.cart.length; i++) {
      if ($scope.cart[i].tea.id === this.tea.tea.id) {
        $scope.cart.splice(i,1);
      }
    };

  }



}]);

