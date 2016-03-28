'use strict';

/**
 * @ngdoc function
 * @name textileAppApp.controller:ContainerCtrl
 * @description
 * # ContainerCtrl
 * Controller of the textileAppApp
 */
angular.module('textileAppApp')
  .controller('ContainerCtrl', function ($scope, $location) {
    
    (function init() {

      // watching for changes on path to let know app The selected tab has changed
      $scope.$watch(function () {
        return $location.path();
      }, function() {
        $scope.selectedTab = $location.path();
        console.log('path changed to:', $scope.selectedTab);
      });

    })();
    
  });
