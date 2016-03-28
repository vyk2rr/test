'use strict';

/**
 * @ngdoc service
 * @name textileAppApp.Employees
 * @description
 * # Employees
 * Factory in the textileAppApp.
 */
angular.module('textileAppApp')
  .factory('Employees', function ($http, $q) {

    var employees = [];
    var employee = null;

    var getAll = function() {
        return employees;
    };

    var getEmployee = function () {
        return employee;
    };

    var findAll = function () {
    	var q = $q.defer();

    	$http({
    		method: 'GET',
    		url: 'http://localhost:3000/api/employees'
    	}).then(function(response) {

    		if (response.data.error)	
    		{
                employees.length = 0;
    			q.reject(response.data.error);
    		} 
    		else {
                employees = response.data;
    			q.resolve(response.data);
    		}

    	});

    	return q.promise;
    };

    var find = function(ID) {
        var q = $q.defer();

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/employees/' + ID 
        }).then(function(response) {
            if (response.data.error)
            {
                q.reject(response.data.error);
            }
            else 
            {
                q.resolve(response.data[0]);
            }
        });

        return q.promise;
    };

    var addUser = function(data) {
        var q = $q.defer();

        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/employees/',
            data: data
        }).then(function(response) {
            if (response.data.error) {
                q.reject(response.data.error);
            }
            else 
            {
                employees.push(response.data.user);
                q.resolve(response.data);
            }
        });

        return q.promise;
    };

    // Public API here
    return {
      findAll: findAll,
      find: find,
      addUser: addUser,
      getAll: getAll,
      getEmployee: getEmployee
    };
  });
