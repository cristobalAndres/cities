import React, { Component } from 'react';
import './App.css';
// Componente con la estructura basica de las tarjetas de información de las ciudades
import CityCard from './components/card';
import {getCities} from './services/services';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
    // Interval para consultar cada 10 segundos el servicio de información de las ciudades
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
    // Se recorre la información de las ciudades y 
    // se crea tarjeta con la información correspondiente a las ciudades
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
