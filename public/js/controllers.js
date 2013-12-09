/* Controllers */


angular.module('myApp.controllers', []).


  controller('AppCtrl', ['$scope', '$http', '$route', '$rootScope', '$location', function($scope, $http, $route, $rootScope, $location) {

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
      alert('reloading...');
      $route.reload();
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };

  }]).



  // controller('NavController', function($scope, $location, $route) {

  //   // $scope.reloadCtrl = function(){
  //   //   $route.reload();
  //   // };


  // }).



  controller('LandingCtrl', ['$scope', '$http', function($scope, $http) {

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



  controller('FreeCtrl', ['$scope', '$http', function($scope, $http) {

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

    $scope.invoice = {
        items: []
    };

    $scope.addItem = function(guide) {

        var item_present = false;

        // checks to see if item present.  If item is already present, increments counter
        angular.forEach($scope.invoice.items, function(item) {
            if(guide.language === item.guide.language) {
              item_present = true;
              item.qty += 1;
            }
        });

        if(!item_present){
          $scope.invoice.items.push({
            qty: 1,
            guide: guide,
            price: 1095
          });
        }
    };

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    };

    $scope.totalCostForLocal = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * 10.95;
        });
        return total;
    };

    $scope.totalCostForStripe = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * 1095;
        });
        return total;
    };

    $scope.totalNumberInCart = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty;
        });
        return total;
    };

  }]).



  controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {

    $scope.open = function () {

      var modalInstance = $modal.open({
        controller: ModalInstanceCtrl
      });

    };
  }]).



  controller('DemoCtrl', ['$scope', '$timeout', '$route', '$location', function ( $scope, $timeout, $route, $location ) {

    $scope.slideCurrent = 0;

    $scope.quotes = [
      {
        'quote': 'I have purchased many language guides like this. This one is the best simple, short guide I have seen.',
        'author': 'Paul K, Greensburg, PA'
      },
      {
        'quote': "Best proof that good things come in small packages.",
        'author': "Paul Eisenberg, Fox News"
      },
      {
        'quote': "30 WORDS ultra-minimalist approach is too smart & well thought out to leave at home.",
        'author': "Mike Richards, Vagabondish"
      },
      {
        'quote': 'A must have.',
        'author': 'Judy F, Olathe, KS'
      },
      {
        'quote': "Incredibly durable.  Get them wet, try to rip it, and you've still got a perfectly usable language tool!",
        'author': 'Anne M, Atlanta, GA'
      }
    ];

    $scope.advanceSlide = function() {
            // Method 1
            // Use a classname to highlight the current active slide
            if ( angular.isDefined( $scope.quotes ) && $scope.quotes.length )
                    $scope.makeActiveSlide( $scope.slideCurrent + 1 );

            /*
            // Method 2
            // Just flush the array elements around
            if ( angular.isDefined( $scope.images ) )
                    $scope.images.push( $scope.images.shift() );
            */

            $timeout( $scope.advanceSlide, 6000 );
    };

    // Advance slides
    $timeout( $scope.advanceSlide );

    $scope.makeActiveSlide = function( index ) {
            // Inactivate the previous slide
            delete $scope.quotes[ $scope.slideCurrent ].isActive;
            // Select the next slide
            $scope.slideCurrent = ( index ) % $scope.quotes.length;
            // Activate the next slide
            $scope.quotes[ $scope.slideCurrent ].isActive = true;
    };

  }]).



controller('LandingSlideshowCtrl', function ( $scope, $timeout, $route, $location ) {

    $scope.slideCurrent = 0;

    $scope.images = [
      {
        'src': "/images/guideCovers/german.png",
        'hello': 'Guten Tag!',
        'transliteration': 'GOOT·en tahk',
        'language': 'German'
      },
      {
        'src': "/images/guideCovers/french.png",
        'hello': 'Bonjour!',
        'transliteration': 'bohN·Zoor',
        'language': 'French'
      },
      {
        'src': "/images/guideCovers/mandarin.png",
        'hello': '你好!',
        'transliteration': 'Nĕe·Hăo!',
        'language': 'Mandarin'
      },
      {
        'src': "/images/guideCovers/arabic.png",
        'hello': 'أهلا و سهلاً',
        'transliteration': 'AH·lahn wa SAH·lahn',
        'language': 'Arabic'
      },
      {
        'src': "/images/guideCovers/italian.png",
        'hello': 'Buon giorno!',
        'transliteration': 'bwon JOR·no',
        'language': 'Italian'
      },
      {
        'src': "/images/guideCovers/brazilian.png",
        'hello': 'Oi / Olá!',
        'transliteration': 'oy / OH·la',
        'language': 'Brazilian'
      }
    ];

    $scope.advanceSlide = function() {
      // Method 1
      // Use a classname to highlight the current active slide
      if ( angular.isDefined( $scope.images ) && $scope.images.length )
              $scope.makeActiveSlide( $scope.slideCurrent + 1 );

      /*
      // Method 2
      // Just flush the array elements around
      if ( angular.isDefined( $scope.images ) )
              $scope.images.push( $scope.images.shift() );
      */

      $timeout( $scope.advanceSlide, 6000 );
    };

    // Advance slides
    $timeout( $scope.advanceSlide );

    $scope.makeActiveSlide = function( index ) {
      // Inactivate the previous slide
      delete $scope.images[ $scope.slideCurrent ].isActive;
      // Select the next slide
      $scope.slideCurrent = ( index ) % $scope.images.length;
      // Activate the next slide
      $scope.images[ $scope.slideCurrent ].isActive = true;
    };
  }).


  controller('AboutCtrl', function ($scope) {
    $scope.name = 'About';
  }).
  controller('BlogCtrl', function ($scope) {
    $scope.name = 'Blog';
  });

  // var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  //   $scope.items = items;
  //   $scope.selected = {
  //     item: $scope.items[0]
  //   };

  //   $scope.ok = function () {
  //     $modalInstance.close($scope.selected.item);
  //   };

  //   $scope.cancel = function () {
  //     $modalInstance.dismiss('cancel');
  //   };
// };
