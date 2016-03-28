'use strict';

describe('Filter: longAgo', function () {

  // load the filter's module
  beforeEach(module('textileAppApp'));

  // initialize a new instance of the filter before each test
  var longAgo;
  beforeEach(inject(function ($filter) {
    longAgo = $filter('longAgo');
  }));

  it('should return the input prefixed with "longAgo filter:"', function () {
    // var text = 'angularjs';
    // expect(longAgo(text)).toBe('longAgo filter: ' + text);
  });

});
