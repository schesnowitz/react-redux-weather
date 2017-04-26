import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const celsius = _.map(cityData.list.map(weather => weather.main.temp), (celsius) => celsius - 273.15);
    const fahrenheit = _.map(cityData.list.map(weather => weather.main.temp), (fahrenheit) => fahrenheit * 9/5 - 459.67);    
    // console.log(temps);
    return(
		<tr key={cityData.city.name}>
    <th>{cityData.city.name}</th>
    <th><Chart data={celsius} color='red' units="C"/></th>
    <th><Chart data={fahrenheit} color='red' units="F"/></th>
    <th><Chart data={pressure} color='blue' units="hPa"/></th>
    <th><Chart data={humidity} color='green' units="%"/></th>
		</tr>
    );
  }
  render() {
    return(
<table className="table table-hover">
	<thead>
		<tr>
			<th>City</th>
			<th>celsius</th>
    	<th>°F</th>
			<th>Pressure</th>
			<th>Humidity</th>
		</tr>
	</thead>
	<tbody>
  {this.props.weather.map(this.renderWeather)}
	</tbody>
</table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);