//services for contact app

app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [
    {
      name: "Peyton Manning",
      team: "Broncos",
      location: "Denver, CO",
      id: 0,
      giphy: "http://media1.giphy.com/media/O50J9ItKd9NG8/200.gif",
    },
    {
      name: "Tom Brady",
      team: "Partiots",
      location: "Boston, MA",
      id: 1,
      giphy: 'https://media.giphy.com/media/64jVVzB87tzG/giphy.gif',
    },
    {
      name: "Andrew Luck",
      team: "Colts",
      location: "Indianapolis, IN",
      id: 2,
      giphy: "http://media2.giphy.com/media/8Yuo00Te96M3C/200.gif"
    }];

  ContactList.addContact = function($scope, $http) {

    //need to create a unique ID for use in linking to seperate page for each contact

    var uniqueID = ContactList.contactList.length;

    //set up giphy get request
     $http.get('http://api.giphy.com/v1/gifs/search?q='+$scope.name+'&api_key=dc6zaTOxFJmzC')
      .success(function(data){
        console.log(data);
          giphyResult = data.data[0].images.fixed_height.url;
         var obj = {
                  name: $scope.name,
                  team: $scope.team,
                  location: $scope.location,
                  id: uniqueID,
                  giphy: giphyResult,
                  };
     //push new contact into array
    ContactList.contactList.push(obj);

  });

  };

  ContactList.findContact = function($scope,name) {
    $scope.findContact = name;
  };

  ContactList.singleContact = function($scope, $http, id){
    // var useName;
    //find correct contact to render based on the id
    for (var i = 0; i < $scope.contacts.length; i++) {
      if(+$scope.contacts[i].id === +id){
        $scope.singleContact = $scope.contacts[i];
      }
    }
  };

  return ContactList;
});

////////////////SHOP/////////

app.factory('TeaList', function() {
  var TeaList = {};

  TeaList.teaList = [
    {
        _id: "55c8ee82152165d244b98300",
        name: "Bayard stew",
        ingredients: "concentrated gluten, jewelry, dill, beetle nut, toast",
        caffeineScale: 244,
        price: 1540,
        inStock: true,
        rating: 1,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        __v: 0,
        categories: [ "dark", "cold"]
    },

    {
        _id: "55c8ee82152165d244b98301",
        name: "Incompactness syrup",
        ingredients: "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        caffeineScale: 49,
        price: 7348,
        inStock: true,
        rating: 2,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        __v: 0,
        categories: ["awesome"]
    },
    {
        _id: "55c8ee82152165d244b98302",
        name: "Flexner white tea",
        ingredients: "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
        caffeineScale: 38,
        price: 4991,
        inStock: true,
        rating: 4,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        __v: 0,
        categories: ["cold"]
    },
    {
        _id: "55c8ee82152165d244b98303",
        name: "Pressor leaf",
        ingredients: "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        caffeineScale: 153,
        price: 5496,
        inStock: true,
        rating: 1,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        __v: 0,
        categories: ["dry", "hot", "awesome"]
    },
    {
        _id: "55c8ee82152165d244b98304",
        name: "Flexner veggie tea",
        ingredients: "cream of tartar, eggplant, cake, deer antler",
        caffeineScale: 181,
        price: 2445,
        inStock: true,
        rating: 1,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        __v: 0,
        categories: ["summer"]
    },
    {
        _id: "55c8ee82152165d244b98305",
        name: "Topflighter malt",
        ingredients: "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
        caffeineScale: 241,
        price: 4486,
        inStock: true,
        rating: 3,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
        __v: 0,
        categories: ["dry","lucid","warm"]
    },
    {
        _id: "55c8ee82152165d244b98306",
        name: "Cooking mix",
        ingredients: "flavorings, roasted mushrooms, toast, tumeric",
        caffeineScale: 230,
        price: 6973,
        inStock: true,
        rating: 3,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        __v: 0,
        categories: ["summer"]
    },
    {
        _id: "55c8ee82152165d244b98307",
        name: "Cooking stew",
        ingredients: "eggplant",
        caffeineScale: 122,
        price: 6003,
        inStock: true,
        rating: 2,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        __v: 0,
        categories: ["dry","winter","lucid"]
    },
    {
        _id: "55c8ee82152165d244b98308",
        name: "Prevenient herb tea",
        ingredients: "cream of tartar, cream of cream, kitchen scraps, flavorings",
        caffeineScale: 196,
        price: 1374,
        inStock: true,
        rating: 3,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
        __v: 0,
        categories: ["lucid","hot"]
    },
    {
        _id: "55c8ee82152165d244b98309",
        name: "Angular mix",
        ingredients: "hot sauce, lawn clippings, fennel, parsley, quinine",
        caffeineScale: 196,
        price: 4158,
        inStock: true,
        rating: 2,
        imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        __v: 0,
        categories: ["spring", "warm","winter"]
    }
  ];

  TeaList.cart = [];


  return TeaList;
});





