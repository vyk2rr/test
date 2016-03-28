'use strict';

/**
 * @ngdoc directive
 * @name textileAppApp.directive:lastEntries
 * @description
 * # lastEntries
 */
angular.module('textileAppApp')
  .directive('lastEntries', function () {
    return {
      templateUrl: '/views/directives/last-entries.html',
      scope: {
      	_entries: '=entries'
      },
      restrict: 'E',
      link: function(scope) {
        scope.loading = true;
        scope._entries = undefined;

        scope.$watch(function () {
          return scope._entries;
        }, function() {
          angular.copy(scope._entries, scope.entries);  

          if (Object.prototype.toString.call(scope._entries) === '[object Array]') 
          {
            scope.loading = false;
          }
        });

      }

    };
  });
