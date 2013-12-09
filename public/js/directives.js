angular.module('myApp.directives', []).

  directive('navlist', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/navlist.jade'
    };
  }).

  directive('addtocart', function () {
    return function(scope, element, attrs) {
      element.bind("click", function () {
        scope.$apply(attrs.click);
      });
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
