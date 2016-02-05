var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('../react-components/page.jsx');
var Twitter = require('twitter');

ReactDOM.render(
    <Page/>, 
    document.getElementById('app')
);

/*var client = new Twitter({
  consumer_key: 'F0ASER1vmoJa1ykhERLhTj7zI',
  consumer_secret: 'NJLuDlfaLUrtrg6GDvn8CrR5fTw2rRDtqxW4n0CldpennGmurb',
  access_token_key: '960948014-yIsENik757TjBK8Ev7etZkxRtqbcMhvHS0yI8H9P',
  access_token_secret: '5zugxgoq0VI2dn9LbD4PLYlpLiFtnjaZvTTlVn5xyvlvE'
});
var twit = new Twitter({
  consumer_key: 'F0ASER1vmoJa1ykhERLhTj7zI',
  consumer_secret: 'NJLuDlfaLUrtrg6GDvn8CrR5fTw2rRDtqxW4n0CldpennGmurb',
  access_token_key: '960948014-yIsENik757TjBK8Ev7etZkxRtqbcMhvHS0yI8H9P',
  access_token_secret: '5zugxgoq0VI2dn9LbD4PLYlpLiFtnjaZvTTlVn5xyvlvE'
});

var params = {screen_name: 'cnnbrk'};
var test = {};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});	
twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {

  stream.on('data', function (data) {
    console.log(data);
  });
});*/