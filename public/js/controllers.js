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

    $scope.cleanSlate = function() {
      alert('cleanSlate');
    };

    $scope.storyHide = function($event) {
      alert('story hide');
    };

    $scope.keydown = function($event) {
      alert('story hide');
    };

  }).

  controller('StoreCtrl', function($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // console.log($scope.store);
    console.log($scope.cart)
    // use routing to pick the selected product
    if ($routeParams.productSku !== null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }

  }).


  // .controller('CartController', function($scope) {

  //   $scope.cart_total = 0;

  //   $scope.addToCart = function(id, price, qty){
  //      //TBD: Check stock level on PHP side
  //      console.log('qty');
  //      var params = {'product_id': id, 'qty': qty, 'price': price};
  //      cartFactory.addItemToCart(params, (function(results) {
  //        //TBD : update the cartController view, how??
  //        if (results.success) {
  //          console.log('update cart');
  //        }
  //     }));
  //   };

  //   $scope.clearItems = function() {
  //     //$scope.items = [];
  //   }
  // });

  controller('GuideDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
      // $http.get('store/' + $routeParams.guide + '.json').success(function(data) {
      //   $scope.guide = data;
      // });
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
