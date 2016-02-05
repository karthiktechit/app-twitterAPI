var React = require ('react');

var HomeScreen = require('./home-screen.jsx');
var Page = React.createClass({

	render: function(){
		return(
			<div>
				<div className='page-header'> 
					<h1>Tweets from @cnnbrk</h1> 
				</div>
				<HomeScreen/>
			</div>
			);
	}
});
module.exports = Page;