// server.js


//packages
var express    = require('express');       
var app        = express();                
var Twitter = require('twitter');



var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

app.get('/get/usertweets', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

  	var params = {screen_name: 'cnnbrk'};
	var test = {};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  		if (!error) {
			//console.log(tweets);
		}
		console.log(typeof res.json);
		res.json(tweets.slice(0,10));
	});	
});
app.use('/cnnbrk-tweets', express.static(__dirname));

// routes for API will happen here

//app.use('/get/usertweets', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API running on port ' + port);

var client = new Twitter({
  consumer_key: 'F0ASER1vmoJa1ykhERLhTj7zI',
  consumer_secret: 'NJLuDlfaLUrtrg6GDvn8CrR5fTw2rRDtqxW4n0CldpennGmurb',
  access_token_key: '960948014-yIsENik757TjBK8Ev7etZkxRtqbcMhvHS0yI8H9P',
  access_token_secret: '5zugxgoq0VI2dn9LbD4PLYlpLiFtnjaZvTTlVn5xyvlvE'
});
var getTweets = function(){
	
}

