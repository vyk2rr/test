'use strict';

describe('Directive: lastEntries', function () {

  // load the directive's module
  beforeEach(module('textileAppApp'));

  var /*element,*/
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function (/*$compile*/) {
    // element = angular.element('<last-entries></last-entries>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the lastEntries directive');
  }));
});
