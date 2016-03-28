'use strict';

describe('Service: Checador', function () {

  // load the service's module
  beforeEach(module('textileAppApp'));

  // instantiate service
  var Checador;
  beforeEach(inject(function (_Checador_) {
    Checador = _Checador_;
  }));

  it('should add 2 entries and be sure to get an array of 2 entries.', function () {

    // Checador should exist, be an Object, and be true.
    expect(!!Checador).toBe(true);

    // We add an entry
    Checador.addEntry({
      idEmployee: 1,
      created: 1458435892124
    });

    // We get entries then be sure there's 1 entry
    expect(Checador.getEntries().length).toBe(1);


    // We add a 2nd entry
    Checador.addEntry({
      idEmployee: 1,
      created: 1458435892124
    });

    // we get entries then be sure there's 2 entries
    expect(Checador.getEntries().length).toBe(2);

    // We expect the result from getting entries to be an Array.. Well, just in case, Who knows =) 
    expect(Object.prototype.toString.call(Checador.getEntries())).toBe('[object Array]');

  });

});
