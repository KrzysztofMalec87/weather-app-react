import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

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
    console.log(this.state.weatherData);

    return (
      <>
        <Header />
        <div className="container">
          <Form handleState={this.handleState} />
        </div>
      </>
    );
  }
}

export default App;
