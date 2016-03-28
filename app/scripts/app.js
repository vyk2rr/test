'use strict';

/**
 * @ngdoc overview
 * @name textileAppApp
 * @description
 * # textileAppApp
 *
 * Main module of the application.
 */
angular
  .module('textileAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/checador', {
        templateUrl: 'views/checador.html',
        controller: 'ChecadorCtrl',
        controllerAs: 'checador'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .when('/reportes', {
        templateUrl: 'views/reportes.html',
        controller: 'ReportesCtrl',
        controllerAs: 'reportes'
      })
      .when('/usuarios/add', {
        templateUrl: 'views/usuarios/add.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios/add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
