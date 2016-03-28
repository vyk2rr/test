'use strict';

describe('Filter: timeDiff', function () {

  // load the filter's module
  beforeEach(module('textileAppApp'));

  // initialize a new instance of the filter before each test
  var timeDiff;
  beforeEach(inject(function ($filter) {
    timeDiff = $filter('timeDiff');
  }));

  it('should return the input prefixed with "timeDiff filter:"', function () {
    var text = 'angularjs';
    expect(timeDiff(text)).toBe('timeDiff filter: ' + text);
  });

});
