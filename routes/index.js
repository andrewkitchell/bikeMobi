
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
  var language = req.body.guide;
  var story = req.body.story;
  var recipients = [
    'andrew@30words.com',
    email
  ];

  var transport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "andrew@30words.com",
        pass: "99tallgiants"
    }
  });

  var mailOptions = {
      from: "30WORDS <hello@30words.com>", // sender address
      to: recipients, // list of receivers
      subject: "30 WORDS Story", // Subject line
      html: "<h5>Hi "+ name + ",</h5><p>This is the story we recieved from you:<div style='margin-left: 10px'>'"+ story +"'</div><p>You requested a "+ language + " guide. Your guide to you tomorrow to the address you provided: </p><div style='margin-left: 10px'>" + address + "</div><p></p><p></p><p>Happy Travels!</br>- Team Applebutter</p></br></br><p><i>Please email us (hello@30words.com) if these details are incorrect.</i></p>"
  };

  transport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }
  });

};
