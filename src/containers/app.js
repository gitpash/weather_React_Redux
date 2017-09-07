import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCity } from "../actions/addCity";
import { deleteCity } from "../actions/deleteCity";
import { getWeather } from "../actions/getWeather";
import "./styles.less";

class App extends Component {
  componentDidMount() {
    !navigator.geolocation
      ? alert("To get your weather enable geolocation!")
      : navigator.geolocation.getCurrentPosition(position => {
          this.props.getWeather(position);
        });
  }

  handleAddCity = () => {
    const { value } = this.input;
    value && this.props.addCity(value);
    this.input.value = "";
  };

  handleDelete = index => {
    this.props.deleteCity(index);
  };

  render() {
    const { data, localData, fetchError, localFail } = this.props;

    return (
      <div data-name="wrapper" className="wrapper">
      <div className="input-block">
        <input
          className="input"
          ref={node => {
            this.input = node;
          }}
        />
        <button className="button" data-name="add-button" onClick={this.handleAddCity}>
          Add city
        </button>
        </div>
        <div className="city-block">
          {fetchError && (
            <p className="warning">OpenWeather currently unavailable, try again later</p>
          )}
          {localFail && <p className="warning">Unable to get data for your location</p>}
          {localData.name && (
            <div className="localWeather">
              <p>Current location:</p>
              <p>{localData.name}</p>
              <p>{localData.temp} C</p>
            </div>
          )}
          {data.map((city, index) => (
            <div data-name={`city-${index}`} key={index} className="city-item">
              <p className="city">{city.name}</p>
              <span data-name="temperature">{city.temp} C</span>
              <button
                data-name="delete-city"
                className="delete"
                onClick={() => this.handleDelete(index)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addCity: PropTypes.func,
  data: PropTypes.array,
  fetchError: PropTypes.bool,
  localFail: PropTypes.bool
};

App.defaultProps = {
  data: [],
  localData: {},
  fetchError: false,
  localFail: false
};

const mapStateToProps = state => ({
  data: state.reducer.data,
  localData: state.reducer.localData,
  fetchError: state.reducer.fetchError,
  localFail: state.reducer.localFail
});

const mapDispatchToProps = dispatch => ({
  addCity: city => dispatch(addCity(city)),
  deleteCity: index => dispatch(deleteCity(index)),
  getWeather: position => dispatch(getWeather(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
