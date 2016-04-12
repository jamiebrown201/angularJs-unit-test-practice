var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope) {
  $scope.title = "Testing AngularJS Applications";
  $scope.destinations = [];

  $scope.newDestinations = {
    city: undefined,
    country: undefined
  };

  $scope.addDestination = function() {
    $scope.destinations.push(
      {
        city: $scope.newDestination.city,
        country: $scope.newDestination.country
      }
    );
  };

  $scope.removeDestination = function(index) {
    $scope.destinations.splice(index, 1);
  };

});
