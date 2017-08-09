import React from 'react';
import ReactDom from 'react-dom';

import Routes from './Routes'; 
import { Router, browserHistory } from 'react-router';
import styles from './main.scss';

import { App } from './App';
import { Home } from './modules/Home/Home'
import { GroupPage } from './modules/GroupPage/GroupPage'
import { Events } from './modules/Events/Events'
import { EventPage } from './modules/EventPage/EventPage'
import { Directory } from './modules/Directory/Directory'
import { Dashboard } from './modules/Dashboard/Dashboard'

//ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('react-app'));

//ReactDom.render(<Home />, document.getElementById('react-app'));

ReactDom.render(<GroupPage />, document.getElementById('react-app'))

// rando
var OrtusMain = React.createClass({
	render: function() {
		var ortusAppStyle = {
			backgroundColor: 'ffffff',
			color: '#333',
			padding: 20,
			width: 550,
			margin: '0 auto',
			fontFamily: 'Georgia',
			fontSize: 66,
			fontWeight: 'bold'
		}
		return (<div style={ortusAppStyle}><p>Ortus project uses React and DRF!</p></div>);
	}
});

// member list
var OrtusMember = React.createClass({
	loadMemberFromServer: function() {
		$.ajax({
			url: this.props.url,
			datatype: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		})
	},

	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
		this.loadMemberFromServer();
		setInterval(this.loadMemberFromServer,
					this.props.pollInterval)
	},
	render: function() {
		if (this.state.data) {
			console.log('DATA!')
			var memberNodes = this.state.data.map(function(member){
				return (<li> {member.username} <li>{member.first_name}</li></li>
						)
			})
		}
		return (
			<div>
				<h1>Ortus Member</h1>
				<ul>
					{memberNodes}
				</ul> 
			</div>
		)
	}
})

// practice
class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>Ortus Member</h1>
				<Home />
				<ul>
					<li>members should be here....</li>
				</ul> 
			</div>
		)
	}
}

// ReactDom.render(<Main url='http://127.0.0.1:8000/members' pollInterval={1000} />, document.getElementById('react-app'))

// ReactDom.render(<OrtusMember url='http://127.0.0.1:8000/members/' pollInterval={1000} />, document.getElementById('react-app'))

// ReactDom.render(<OrtusMain />, document.getElementById('react-app'))

