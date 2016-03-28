'use strict';

describe('Controller: ChecadorCtrl', function () {

  // load the controller's module
  beforeEach(module('textileAppApp'));

  var ChecadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChecadorCtrl = $controller('ChecadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(ChecadorCtrl.awesomeThings.length).toBe(3);
  });
});
