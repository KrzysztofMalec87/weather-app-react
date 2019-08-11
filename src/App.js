import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Form />
        </div>
      </>
    );
  }
}

export default App;
