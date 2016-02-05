var React = require ('react');
	tweetToHTML = require('tweet-to-html'),
		$ = require('jquery');

var HomeScreen = React.createClass({
	getInitialState: function(){
		return ({tweets: []});
	},
	componentDidMount: function(){
		$.ajax({
			url: "http://localhost:8080/get/usertweets/",
			dataType: 'json',
			cache: false,
			success: function(data) {
      			this.setState ({ tweets :data });
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
		
	},
	createMarkup : function(tweet){ 
		return {__html: tweet.html}; 
	},
	render: function(){
		var tweetview = "";
		if(this.state.tweets != null && typeof this.state.tweets != "undefined" && this.state.tweets.length > 0){
			tweetview = tweetToHTML.parse(this.state.tweets);	
			tweetview = tweetview.map(function(tweet, i){
				return (
						<div className = "tweet-view">
							<div key={i} dangerouslySetInnerHTML={this.createMarkup(tweet)} />
						</div>
					)
					
			}.bind(this));
		}
		return(
			<div>
				<div className='home-screen'> 
					{tweetview}
				</div>
			</div>
			);
	}
});
module.exports = HomeScreen;