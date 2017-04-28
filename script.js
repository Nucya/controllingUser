// Declaring myApp variable and passing in the controllingUsers controller
var myApp = angular.module('controllingUsers', []);

// myApp Controller that conrolls the function of creating a user
myApp.controller('usersController', ['$scope', function($scope){
  $scope.createUser = function(){
    $scope.users.push($scope.user);
    $scope.user = {};
  }
  // deleteUser Controller that conrolls the function of deleting a user
  $scope.deleteUser = function(userToDelete){
    // delete user in scope in $index position 1
    $scope.users.splice(userToDelete, 1);
  }

  // Hard coded users 
  $scope.users = [
    {
      first_name: "Robert",
      last_name: "Ong",
      favorite_language: "JavaScript"
    },
    {
      first_name: "John",
      last_name: "Smith",
      favorite_language: "Python"
    },
    {
      first_name: "Amy",
      last_name: "White",
      favorite_language: "Ruby"
    }
  ];
}]);
