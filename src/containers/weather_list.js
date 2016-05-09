import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={name} >
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
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

// instead of having 'state' as the argument, ES6 allows us to
// pull only the property we need.
// this option is the same as mapStateToProps(state) and then
// const weather = state.weather
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);