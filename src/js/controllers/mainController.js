(function (controllerId) {
  'use strict';

  var controller = function($scope, $firebase, firebaseUrl) {
    var peopleRef = new Firebase(firebaseUrl + '/people');
    $scope.people = $firebase(peopleRef);
    $scope.addPerson = function() {
    // AngularFire $add method
    $scope.people.$add($scope.newPerson);
    $scope.newPerson = "";
  };
};

controller.$inject = ['$scope', '$firebase', 'firebaseUrl'];
angular.module('app').controller(controllerId, controller);

})('app.mainController');