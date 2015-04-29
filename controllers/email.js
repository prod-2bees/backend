var SparkPost = require('sparkpost');
var dotenv = require('dotenv').load();

// console.log(process.env.sparkpostKey);
var key = { key: process.env.sparkpostKey};

var email = new SparkPost(key);

var send = email.transmission.send;

// Send it off into the world!
exports.send = function(req, res) {
	console.log(req);
	// expecting name, email in req.body
	var toName = '2Bees Admin' || req.body.name;
	var toEmail = '2bees.com@gmail.com' || req.body.email;
	var message = req.body.message || 'I am want 1.file upload, 2.PopUp, 3.Facebook Member Features, in order of priority.';

//	console.log('name: ', name, ' email: ', email, ' message: ', message);

	var trans = {};
	trans.recipients = [{ address: { name: toName, email: toEmail } }];
	trans.text = message;
	// Set some metadata for your email
	trans.campaign = 'wixproducs';
	trans.from = 'a-user@gmail.com';
	trans.subject = 'Casting my vote.';

	console.log(res);
  if (res.err) {
    console.log('Whoops! Something went wrong');
    console.log(res.err);
    res.send(error);
  } else {
    console.log('Woohoo! You just sent your first mailing!');
    res.send(true);
  }

};
