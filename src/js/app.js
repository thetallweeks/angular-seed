(function() {
  'use strict';

  // Declare app level module which depends on filters, and services
  var app = angular.module('app', [
    'ngRoute',
    'firebase',
    'firebaseConfig'
  ]);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when(
        '/view1', {
          templateUrl: 'partials/partial1.html',
          controller: 'app.mainController'
        }
      );

      $routeProvider.when(
        '/view2', {
          templateUrl: 'partials/partial2.html',
        }
      );

      $routeProvider.otherwise({
        redirectTo: '/view1'
      });
    }
  ]);
})();