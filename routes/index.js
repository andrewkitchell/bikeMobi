
/*
 * GET home page.
 */
var stripeApiKey = "pk_WK8kK7pQe0wBeHigrI9yGLEpqGqvs";
var stripeApiKeyTesting = "9PrrkDKIT6vyetcQBbR1RY93eu9Npu8e";

var stripe = require('stripe')(stripeApiKeyTesting);
var nodemailer = require("nodemailer");



exports.index = function(req, res){
  res.render('index');
};



exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};




exports.store = function(req, res){
  res.render('store');
};



exports.purchase = function(req, res) {
  var stripeToken = req.body.stripeToken;
  var amount = req.body.amount;
  var purchased_guides = req.body.purchased_guides;

  stripe.charges.create({
    amount: amount,
    currency: "usd",
    card: stripeToken, // obtained with Stripe.js
    description: purchased_guides
  }).then(function(res) {
    console.log('yes, this works:: ' + res);
  }, function(err) {
      switch (err.type) {
        case 'StripeCardError':
          // A declined card error
          break;
        case 'StripeInvalidRequestError':
          // Invalid parameters were supplied to Stripe's API
          break;
        case 'StripeAPIError':
          // An error occurred internally with Stripe's API
          break;
        case 'StripeConnectionError':
          // Some kind of error occurred during the HTTPS communication
          break;
        case 'StripeAuthenticationError':
          // You probably used an incorrect API key
          break;
      }
    });
};



exports.submit_story = function(req, res) {
  var name = req.body.name;
  var address = req.body.address;
  var email = req.body.email;
  var guide = req.body.guide;
  var story = req.body.story;

  var transport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "akitchell@gmail.com",
        pass: "99tallgiants"
    }
  });

  var mailOptions = {
      from: "30WORDS <andrew@30words.com>", // sender address
      to: "akitchell@gmail.com", // list of receivers
      subject: "Your Story", // Subject line
      text: "Hello " + name, // plaintext body
      html: "Thanks for submitting your story" + name // html body
  };

  transport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }
  });

};
