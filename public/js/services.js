'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

    .factory("DataService", function() {
      var myStore = new Store();
      var myCart = new ShoppingCart("AngularStore");

      myCart.addCheckoutParameters("PayPal", "your PayPal merchant account id");
      myCart.addCheckoutParameters("Stripe");

      return {
        store: myStore,
        cart: myCart
      };

	});