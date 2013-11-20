'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('navlist', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/navlist.jade'
    };
  }).
  directive('demobutton', function () {
    return {
      restrict: 'E',
      templateUrl: "/partials/demo_button.jade"
    };
  }).
  directive('addtocart', function () {
    return {
      restrict: 'E',
      templateUrl: "/partials/add_to_cart.jade",
      transclude: true
    };
  }).
  directive('stripeForm', ['$window',
    function($window) {

      var directive = { restrict: 'A' };

      directive.link = function(scope, element, attributes) {
        var form = angular.element(element);
        form.bind('submit', function() {
          var button = form.find('button');
          button.prop('disabled', true);
          $window.Stripe.createToken(form[0], function() {
            var args = arguments;
            scope.$apply(function() {
              scope[attributes.stripeForm].apply(scope, args);
            });
            button.prop('disabled', false);
          });
        });
      };
      return directive;
    }]);
