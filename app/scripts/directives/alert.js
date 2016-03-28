'use strict';

/**
 * @ngdoc directive
 * @name textileAppApp.directive:alert
 * @description
 * # alert
 */
angular.module('textileAppApp')
  .directive('alert', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	alert: '@'
      },
      link: function postLink(scope, element) {
        element.text('this is the alert directive', scope.alert);
      }
    };
  });
