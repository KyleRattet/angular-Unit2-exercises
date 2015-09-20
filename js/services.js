//services for contact app

app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [
    {
      name: "Peyton Manning",
      team: "Broncos",
      location: "Denver, CO",
      id: 0,
    },
    {
      name: "Tom Brady",
      team: "Partiots",
      location: "Boston, MA",
      id: 1,
    },
    {
      name: "Andrew Luck",
      team: "Colts",
      location: "Indianapolis, IN",
      id: 2,
    }];

  ContactList.addContact = function($scope, $http) {

    //need to create a unique ID for use in linking to seperate page for each contact

    var uniqueID = ContactList.contactList.length;

    var obj = {
      name: $scope.name,
      team: $scope.team,
      location: $scope.location,
      id: uniqueID,
    }

    ContactList.contactList.push(obj);
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




