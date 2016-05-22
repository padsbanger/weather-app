import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

  renderCityRow(data) {

    const temps = data.list.map(weather => weather.main.temp)
    const pressure = data.list.map(weather => weather.main.pressure)
    const humidity = data.list.map(weather => weather.main.humidity)

    const lon = data.city.coord.lon
    const lat = data.city.coord.lat

    return (
      <tr key={data.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="blue"/>
        </td>
        <td>
          <Chart data={pressure} color="orange"/>
        </td>
        <td>
          <Chart data={humidity} color="green"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityRow)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)
