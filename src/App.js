import React, { Component } from 'react';
import './App.css';
import CityCard from './components/card';
import {getCities} from './services/services';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
    // setInterval(() => {
    //   getCities().then((data) => {
    //     console.log(data);
    //     this.setState({
    //       cities: data
    //     })
    //   });
    // }, 10000)
    getCities().then((data) => {
      console.log(data);
      this.setState({
        cities: data
      })
    });
  }

  cities() {
    return this.state.cities.map((city, index) => {
      return (
        <CityCard city={city} index={index} key={index}></CityCard>
      )
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="row">
          {this.cities()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
