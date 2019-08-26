import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import { FadeInTop } from './common/animations/Animations';

class App extends Component {
  state = {
    animationStart: false,
    weatherData: null,
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
        <Header stateAnimation={animationStart} />
        <FadeInTop
          animationDelay={100}
          className="container"
          pose={animationStart ? 'visible' : 'hidden'}
        >
          <Form setWheaterData={this.setWheaterData} />
          {weatherData && <WeatherDetails data={weatherData} />}
        </FadeInTop>
        <Footer stateAnimation={animationStart} />
      </>
    );
  }
}

export default App;
