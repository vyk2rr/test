'use strict';

/**
 * @ngdoc function
 * @name textileAppApp.controller:ChecadorCtrl
 * @description
 * # ChecadorCtrl
 * Controller of the textileAppApp
 */
angular.module('textileAppApp')
  .controller('ChecadorCtrl', function ($scope, Checador) {

    (function init() {

      var now = new Date();

      // DATA Model to get input in the form
      $scope.model = {};
      $scope.model.entry = {
        idEmployee: null
      };
    
      // Eventually this data could be stored on database
      $scope.config = {
        // 8 am
        arrivalTime: +new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0),
        // 5 pm
        leavingTime: +new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0),
        // 30min of tolerance
        tolerance: 60 * 30
      };

      // fetching from server last entries
      Checador.findAll().then(function(entries) {
        $scope.entries = entries;
      });  

      $scope.$on('entryAdded', function(event, entry) {
        console.log('Current entries: ', Checador.getEntries().length, 'New Entry Added', entry);
      });

    })();
    
    /*
     * To submit to server an entry 
     */
    $scope.addEntry = function() {
    	$scope.submitting = true;

      // generating payload to be sent
      var entry = {
        idEmployee: $scope.model.entry.idEmployee,
        expectedArrivalTime: $scope.config.arrivalTime,
        expectedLeavingTime: $scope.config.leavingTime,
        allowedTolerance: $scope.config.tolerance
      }

      // Calling add entry through a service
    	Checador.addEntry(entry).then(function success() {

        $scope.model.entry = {
          idEmployee: null
        };

        // on success we get entries alredy existing in Service Checador to update UI
        $scope.entries = Checador.getEntries();
      }, function error(err) {
        $scope.$emit('error', err);
      }).finally(function() {
        $scope.submitting = false;
      });

    };
    
  });
