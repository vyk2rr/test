'use strict';

/**
 * @ngdoc directive
 * @name textileAppApp.directive:usersList
 * @description
 * # usersList
 */
angular.module('textileAppApp')
  .directive('usersList', function (Employees) {
    return {
      templateUrl: '/views/directives/users-list.html',
      restrict: 'E',
      link: function(scope, elem, attrs) {
			scope.loading = true;

			if (attrs.employees) {
				try {
					scope._users = JSON.parse(attrs.employees);
				} catch(e) {
					scope._users = null;
				}
			}

			if (Object.prototype.toString.call(scope._users) !== '[object Array]') {

				Employees.findAll().then(
				function(employees) {
					scope._users = employees;
				},
				function(err) {
					scope.$emit('alert.error', err);
				}).finally(function() {
					scope.loading = false;
				});

			} else {
				scope.loading = false;	
			}

		}
      

    };
  });
