import React from 'react';

import Moment from 'react-moment';
import 'moment-timezone';

import { Card, CardText, CardTitle } from 'material-ui/Card';
// Estructura basica para mostrar la información de la ciudad
export default class CityCard extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4" style={{ "margin": "2px" }} key={this.props.index}>
        <Card>
          <CardTitle title={this.props.city.timezone}></CardTitle>
          <CardText>Información</CardText>
          <div className="row">
            <div className="col-xs-12 col-sm-6">Hora: <Moment unix tz={this.props.city.timezone} format="HH:mm">{this.props.city.currently.time}</Moment></div>
            <div className="col-xs-12 col-sm-6">Temperatura: {this.props.city.currently.temperature}</div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">{this.props.city.currently.summary}</div>
          </div>
        </Card>
      </div>
    );
  }
}