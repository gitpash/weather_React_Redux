import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCity } from "../actions/addCity";

class App extends Component {
  handleAddCity = () => {
    this.props.addCity(this.input.value);
    this.input.value = "";
  };

  render() {
    const { data } = this.props;

    return (
      <div data-name="wrapper">
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button data-name="add-button" onClick={this.handleAddCity}>
          Add city +
        </button>
        <ul>
          {data.map((city, index) => (
            <li data-name={`city-${index}`} key={index}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  addCity: PropTypes.func,
  data: PropTypes.array
};

App.defaultProps = {
  data: []
};

const mapStateToProps = state => ({
  data: state.addReducer ? state.addReducer.data : []
});

const mapDispatchToProps = dispatch => ({
  addCity: city => dispatch(addCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
