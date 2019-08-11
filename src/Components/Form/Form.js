import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  submitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-form" onSubmit={this.submitForm}>
        <h5 className="search-form__heading">Search by location</h5>
        <form className="search-form__form">
          <input className="search-form__text-input" type="text" />
          <input
            className="search-form__submit-input"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Form;
