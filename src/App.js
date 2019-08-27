import React, { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import WeatherDetails from './components/weatherdetails/WeatherDetails';
import { FadeInTop } from './common/animations/Animations';

class App extends Component {
  state = {
    weatherData: null,
    animationStart: false,
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
          <Form setWheaterData={this.setWheaterData} />
          {weatherData && <WeatherDetails data={weatherData} />}
        </FadeInTop>
        <Footer animationState={animationStart} />
      </>
    );
  }
}

export default App;
