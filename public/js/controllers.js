/* Controllers */


angular.module('myApp.controllers', []).


  controller('NavCtrl', function($scope, $location, $route) {

    $scope.reloadCtrl = function(){
      $route.reload();
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };

  }).



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



  controller('StoreCtrl', ['$scope', 'guideFactory', function($scope, guideFactory) {

    $scope.guides = guideFactory.guides;

  }]).



  controller('ShoppingCartCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.invoice = {
        items: []
    };

    $scope.description = function(items) {

        var description = '';

        angular.forEach($scope.invoice.items, function(item) {
            description += item.qty + " " + item.guide.language + "; ";
        });

        return description;
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



  controller('LandingSlideshowCtrl', function ( $scope, $timeout, $route, $location ) {

    $scope.slideCurrent = 0;

    $scope.images = [
      {
        'src': "/images/garage.jpg",
        'headline': 'Whether your bike needs dusting ...',
        'blurb': "(We'll come to your place and bring your bike back to life)"

      },
      {
        'src': "/images/country.jpg",
        'headline': 'Or your adventure ended abruptly ...',
        'blurb': "We're always down for an adventure.  We'll come lend a hand if we can."
      },
      {
        'src': "/images/friend.jpg",
        'headline': 'Or a friend deserves a nice present ...',
        'blurb': "Time to get your riding partner back in the saddle!"
      },
      {
        'src': "/images/stolen.jpg",
        'headline': 'Or some bastard stole your bike ...',
        'blurb': "(Not too much we can do.  But, we'll give you a ride home)"
      },
      {
        'src': "/images/stolen.jpg",
        'headline': 'We got your back',
        'blurb': "(We go out of our way to )"
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
  });
