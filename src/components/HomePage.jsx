import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import request from 'superagent';

import config from '../config';
import WeatherTabs from './WeatherTabs';

class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state= {
			cityName: '',
			reports: [],
			serverCityName: {},
			showCity: false
		}
	}

	handleCityChange = (event) => {
		this.setState({ cityName: event.target.value});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		const cityName = this.state.cityName;
		this.setState({cityName: ''});
		this.getWeatherReportFromServer(cityName);
	}

	getWeatherReportFromServer = (cityName) => {
		request
			.get(`${config.serverUrl}/city/${cityName}`)
			.end((err, res) => {
				if(err) { console.log('Err:', err); return; }
				this.setState(res['body']);
			});
	}

	render() {
		return(
				<div>
					<AppBar
						title='Weather App'
					/>
					<form onSubmit={this.handleFormSubmit}>
						<TextField
						  style={{marginLeft: '39%'}}
							floatingLabelText='City Name'
							hintText='Enter city Name'
							value={this.state.cityName}
							required
							onChange={this.handleCityChange}
							pattern="[a-zA-Z\s]+"
					/>
						<RaisedButton
							label='Search'
							secondary={true}
							type='submit'
						/>
					</form>
					{
						this.state.showCity ?	<p style={{marginLeft: '40%'}}>
						Weather Report for <b style={{fontSize: 23}}>{this.state.serverCityName.name}</b> </p> : null
					}
					<WeatherTabs reports={this.state.reports} city={this.state.serverCityName} />
				</div>
			);
	}
}

export default HomePage;
