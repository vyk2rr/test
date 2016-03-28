'use strict';

describe('Controller: ContainerCtrl', function () {

  // load the controller's module
  beforeEach(module('textileAppApp'));

  var ContainerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContainerCtrl = $controller('ContainerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(ContainerCtrl.awesomeThings.length).toBe(3);
  });
});
