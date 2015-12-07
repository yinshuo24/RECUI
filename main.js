'use strict';
var React = require('react'),
    ReactDOM = require('react-dom');
var GridList = require('material-ui/lib/grid-list/grid-list');
var Card = require('material-ui/lib/card/card');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');
var CardAction = require('material-ui/lib/card/card-actions');
var RaisedButton = require('material-ui/lib/raised-button');
var Paper = require('material-ui/lib/paper');
let injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

var Session = React.createClass({
	render: function(){
		return (
			<Card initiallyExpanded={true}>
				<CardTitle title={this.props.title} />
				<CardText>
					Here is some introduction<br />
					Have fun!
				</CardText>
				<CardAction>
					<RaisedButton label='try it!' primary={true} linkButton={true} href={this.props.href} />
				</CardAction>
			</Card>
		);
	}
});

var IndexPage = React.createClass({
	render: function(){
		return(
			<Paper zDepth={2}>
			  <CardTitle padding='6px'>
			    <h1>RealSense Extensions Crosswalk samples</h1>
			  </CardTitle>
			  <GridList>
			    <Session title='Session' href='./session.html' />
			    <Session title='EnhancedPhoto' href='./enhancedphotography.html' />
			    <Session title='ScenePerception' href='./sceneperception.html' />
			    <Session title='DepthBlendEP' href='./depthBlend_EP.html' />
			    <Session title='MotionEffectEP' href='./motion_effect_EP.html' />
			    <Session title='FaceTracking' href='./facetracking.html' />
			  </GridList>
			</Paper>
		);
	}
});

ReactDOM.render(
		<IndexPage />,
	document.getElementById('content')
);
