import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';
import GoogleMap from '../components/map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const kilopascal = _.map(cityData.list.map(weather => weather.main.pressure), (kilopascal) => kilopascal * 0.1);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const celsius = _.map(cityData.list.map(weather => weather.main.temp), (celsius) => celsius - 273.15);
    const fahrenheit = _.map(cityData.list.map(weather => weather.main.temp), (fahrenheit) => fahrenheit * 9/5 - 459.67);
    const {lat, lon} = cityData.city.coord;
    // const lon = cityData.city.coord.lon;    
    // console.log(temps);
    return (
		<tr key={cityData.city.name}>
    <td><GoogleMap lon={lon} lat={lat} /></td>
    <th><Chart data={celsius} color='red' units="°C"/></th>
    <th><Chart data={fahrenheit} color='red' units="F"/></th>
    <th><Chart data={kilopascal} color='blue' units="kPa"/></th>
    <th><Chart data={humidity} color='green' units="%"/></th>
		</tr>
    );
  }
  render() {
    return (
<table className="table table-hover">
	<thead>
		<tr>
			<th>City</th>
			<th>Celsius</th>
    	<th>Fahrenheit</th>
			<th>Kilopascals</th>
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