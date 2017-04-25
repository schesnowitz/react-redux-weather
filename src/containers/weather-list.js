import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class WeatherList extends Component {

  renderWeather(cityData) {
    return(
		<tr key={cityData.city.name}>
			<th>{cityData.city.name}</th>
		</tr>
    );
  }
  render() {
    return(
<table className="table table-hover table-condensed table-responsive">
	<thead>
		<tr>
			<th>City</th>
			<th>Temperature</th>
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