'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {
  beforeEach(module('app'));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('app.mainController', {
      $scope: {}
    });
    expect(myCtrl1).toBeDefined();
  }));
});