import React, { Component } from 'react';
import './App.css';
// Componente con la estructura basica de las tarjetas de información de las ciudades
import CityCard from './components/card';
// import {getCities} from './services/services';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Websocket from 'react-websocket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  cities(data) {
    // Se obtiene la información de las ciudades
    this.setState({
      cities: JSON.parse(data),
    })
  }

  renderCities() {
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
          {this.renderCities()}
          <Websocket url='wss://api-acid-lab.herokuapp.com'
              onMessage={this.cities.bind(this)}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
