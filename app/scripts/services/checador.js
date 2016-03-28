'use strict';

/**
 * @ngdoc service
 * @name textileAppApp.Checador
 * @description
 * # Checador
 * Factory in the textileAppApp.
 */
angular.module('textileAppApp')
  .factory('Checador', function ($q, Employees, $http) {

    // defaults
    var entries = [];
    
    var findAll = function () {
      var q = $q.defer();

      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/entries/'
      }).then(function(response){

        if (response.data.error) {
          entries.length = 0;
          q.reject(response.data.error);
        }
        else 
        {
          entries = response.data.result;
          q.resolve(entries);  
        }

      }, function(err){
        entries.length = 0;
        q.reject(err);
      });

      return q.promise;
    };

    var findByEmployee = function (idEmployee) {
      var q = $q.defer();

      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/employees/' + idEmployee + '/entries'
      }).then(function(entries) {

        q.resolve(entries);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    };

    var addEntry = function (entry) {
      var q = $q.defer();

      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/employees/' + entry.idEmployee + '/entry',
        data: {
          expectedArrivalTime: entry.expectedArrivalTime,
          expectedLeavingTime: entry.expectedLeavingTime,
          allowedTolerance: entry.allowedTolerance
        }
      }).then(function(response) {
        if (response.data.error) {
          q.reject(response.data.error);
        }
        else 
        {
          findAll().then(function(entries) {
            entries = entries;
            q.resolve(response.data);
          });
        }
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    };

    var getEntries = function() {
      return entries;
    };

    // Public API here
    return {
      findAll: findAll,
      findByEmployee: findByEmployee,
      addEntry: addEntry,
      getEntries: getEntries
    };
  });
