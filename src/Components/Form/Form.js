import React, { Component } from 'react';

import ErrorMessage from '../errorMessage/ErrorMessage';

class Form extends Component {
  state = {
    errorMessage: '',
  };

  setErrorMessage = data =>
    this.setState({
      errorMessage: data,
    });

  submitForm = event => {
    event.preventDefault();

    const {
      target: {
        location: { value },
      },
    } = event;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_URL}${value}${process.env.REACT_APP_WEATHER_API_KEY}`;
    const { setWheaterData } = this.props;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => setWheaterData(json))
      .catch(
        err => {
          console.log(err);
        }
        // this.setErrorMessage(
        //   'There was an error while fetching data. Please refresh the page to try again.'
        // )
      );
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(event);
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <>
        <div className="search-form">
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <h5 className="search-form__heading">Search by location</h5>
          <form
            autoComplete="off"
            className="search-form__form"
            onSubmit={this.handleSubmit}
          >
            <input
              className="search-form__text-input"
              name="location"
              type="text"
            />
            <input
              className="search-form__submit-input"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
