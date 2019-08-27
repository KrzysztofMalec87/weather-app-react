import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { FadeInTop } from './common/Animations/Animations';

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
