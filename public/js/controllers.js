/* Controllers */


angular.module('myApp.controllers', []).

  controller('AppCtrl', function($scope, $http, $route, $rootScope, $location, cssInjector) {

    cssInjector.setSinglePageMode(true);

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

    cssInjector.setSinglePageMode(true);

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
    cssInjector.add("/css/store.css");
    cssInjector.setSinglePageMode(true);

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

    $scope.addToCart = function(language) {
      $scope.items.push(language);
      $scope.updateCart();
    }

    $scope.removeFromCart = function(language) {
      $scope.items.pop(language);
      $scope.updateCart();
    }

    $scope.items = [];

    $scope.totalCost = '900';

    $scope.updateCart = function() {
      $scope.totalCost = $scope.items.length * 1095;
    };

  }]).


  controller('GuideDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

    $http({
      method: 'GET',
      url: '/api/guides'+ $routeParams.guide
    }).

    success(function (data, status, headers, config) {
      $scope.guide = data.guides;
    }).

    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

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
