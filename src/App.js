import React, { Component } from 'react';

import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import { FadeInTop } from './common/animations/Animations';

class App extends Component {
  state = {
    animationStart: false,
    weatherData: null,
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const {
      target: {
        location: { value },
      },
    } = event;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_URL}${value}${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => this.setWheaterData(json))
      .catch(
        err => {
          console.log(err);
        }
        // this.setErrorMessage(
        //   'There was an error while fetching data. Please refresh the page to try again.'
        // )
      );
  };

  setWheaterData = data =>
    this.setState({
      weatherData: data,
    });

  componentDidMount() {
    this.setState({ animationStart: true });
  }

  render() {
    const { weatherData, animationStart } = this.state;

    return (
      <>
        <Header animationState={animationStart} />
        <FadeInTop
          animationDelay={100}
          className="container"
          pose={animationStart ? 'visible' : 'hidden'}
        >
          <Form
            setWheaterData={this.setWheaterData}
            onSubmit={this.handleFormSubmit}
          />
          {weatherData && <WeatherDetails data={weatherData} />}
        </FadeInTop>
        <Footer animationState={animationStart} />
      </>
    );
  }
}

export default App;
