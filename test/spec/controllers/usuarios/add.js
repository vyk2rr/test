'use strict';

describe('Controller: UsuariosAddCtrl', function () {

  // load the controller's module
  beforeEach(module('textileAppApp'));

  var UsuariosAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosAddCtrl = $controller('UsuariosAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosAddCtrl.awesomeThings.length).toBe(3);
  });
});
