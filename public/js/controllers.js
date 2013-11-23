'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $http, $route, $rootScope, $location) {

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

  controller('LandingCtrl', function($scope) {
    $scope.name = 'Landing';

    $scope.demoGuide = function() {
      alert('heyo');
    };

  }).

  controller('FreeCtrl', function($scope, $locale) {
    $scope.name = 'Free';

    $scope.this = 3;

    $scope.storyHide = function($event) {
      alert('story hide');
    };

    $scope.keydown = function($event) {
      alert('story hide');
    };

  }).


  controller('StoreCtrl', ['$scope', '$http', function($scope, $http) {

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
      alert(language)
      $scope.items.push(language);
    }

    $scope.removeFromCart = function(language) {
      alert(language)
      $scope.items.pop(language);
    }

    // $scope.addToCart = function($event) {
    //   // alert('yeasdfasdf');
    //   var language = $scope.guide
    //   alert(language);
    //    //it's up to you how you want to structure the new_object.
    //   $scope.items.push(language);
    // };

    $scope.items = [];

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
