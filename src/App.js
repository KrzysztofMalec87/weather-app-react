import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';

class App extends Component {
  state = {
    weatherData: '',
  };

  handleState = data => {
    this.setState({
      weatherData: data,
    });
  };

  render() {
    const { weatherData } = this.state;

    return (
      <>
        <Header />
        <div className="container">
          <Form handleState={this.handleState} />
          {weatherData && <WeatherDetails apiRequestData={weatherData} />}
        </div>
      </>
    );
  }
}

export default App;
