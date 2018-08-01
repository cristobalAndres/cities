import React from 'react';

import { Card, CardText, CardTitle } from 'material-ui/Card';
// Estructura basica para mostrar la información de la ciudad
export default class CardLoading extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4" style={{ "margin": "2px" }} key={this.props.index}>
        <Card>
          <CardTitle title="Cargando :O"></CardTitle>
          <CardText>Información</CardText>
          <div className="row">
            <div className="col-xs-12 col-sm-12">Por favor espere en linea...</div>
          </div>
        </Card>
      </div>
    );
  }
}