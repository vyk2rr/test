'use strict';

/**
 * @ngdoc function
 * @name textileAppApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the textileAppApp
 */
angular.module('textileAppApp')
  .controller('UsuariosCtrl', function ($scope, Employees) {
    	
    	$scope.model = {
    		name: null,
    		lastName: null
    	};
    	$scope.submitting = false;
  		$scope.employees = null;

  		(function init() {

        // Fetching from server list of users
	  		Employees.findAll().then(
	  		function success(employees) {
				  $scope.employees = employees;
	    	},
	    	function(err) {
	    		$scope.$emit('alert.error', err);
	    	});
	    		
  		})();

      /*
       * This handles adding a user when button on UI is clicked
       */
  		$scope.addUser = function() {
  			$scope.submitting = true;

        // submiting data to backend server to add user
  			Employees.addUser($scope.model).then(function success(response) {

          $scope.model = {
            name: null,
            lastName: null
          };

          // Get all the list of employees
          $scope.employees = Employees.getAll();

          // Letting know in order to show a success message
  				$scope.$emit('alert.success', response);
  			}, function error(err) {

          // Letting know in order to show an error message
  				$scope.$emit('alert.error', err);
  			}).finally(function() {
  				$scope.submitting = false;
  			});
  		};
    	
  });
