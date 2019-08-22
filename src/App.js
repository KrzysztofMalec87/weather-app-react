import React, { Component } from 'react';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

class App extends Component {
  state = {
    weatherData: null,
  };

  setWheaterData = data =>
    this.setState({
      weatherData: data,
    });

  render() {
    const { weatherData } = this.state;

    return (
      <>
        <Header />
        <div className="container">
          <Form setWheaterData={this.setWheaterData} />
          {weatherData && <WeatherDetails data={weatherData} />}
        </div>
      </>
    );
  }
}

export default App;
