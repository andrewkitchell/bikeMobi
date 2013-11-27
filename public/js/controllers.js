/* Controllers */


angular.module('myApp.controllers', []).

  controller('AppCtrl', function($scope, $http, $route, $rootScope, $location, cssInjector) {

    // cssInjector.setSinglePageMode(true);

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.reloadCtrl = function(){
      console.log('reloading...');
      $route.reload();
    };

  }).

  controller('NavController', function($scope, $location, $route) {

    $scope.isActive = function(route) {
        return route === $location.path();
    };

  }).

  controller('LandingCtrl', function($scope, cssInjector) {
    $scope.name = 'Landing';

    // cssInjector.setSinglePageMode(true);

    $scope.demoGuide = function() {
      alert('heyo');
    };

  }).

  controller('FreeCtrl', function($scope, $locale, cssInjector) {

    cssInjector.setSinglePageMode(true);
    cssInjector.add("/css/free.css");

    $scope.name = 'Free';

    $scope.this = 3;

    $scope.storyHide = function($event) {
      alert('story hide');
    };

    $scope.keydown = function($event) {
      alert('story hide');
    };

  }).


  controller('StoreCtrl', ['$scope', '$http', 'cssInjector', function($scope, $http, cssInjector) {

    // this is a service attached from github /// https://github.com/Yappli/angular-css-injector

    $http({
      method: 'GET',
      url: '/api/guides'
    }).

    success(function (data, status, headers, config) {
      $scope.guides = data.guides;
    }).

    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }]).


  controller('GuideCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

    $http({
      method: 'GET',
      url: '/api/guides/'
    }).

    success(function (data, status, headers, config) {
      $scope.guide = data.guides[$routeParams.guide];
    }).

    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }]).


  controller('ShoppingCartCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.addToCart = function(language) {
      $scope.items.push(language);
      $scope.updateCart();
    };

    $scope.removeFromCart = function(index) {
      $scope.items.splice(index, 1);
      $scope.updateCart();
    };

    $scope.items = [];

    $scope.totalCost = '900';

    $scope.updateCart = function() {
      $scope.totalCost = $scope.items.length * 1095;
    };
  }]).


  controller('AboutCtrl', function ($scope) {
    $scope.name = 'About';
  }).
  controller('BlogCtrl', function ($scope) {
    $scope.name = 'Blog';
  }).
  controller('DemoCtrl', function ($scope) {
    $scope.name = 'Demo';
  });
