import React, { Component } from 'react';
import Header from './Components/Header/Header';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">content</div>
      </>
    );
  }
}

export default App;
