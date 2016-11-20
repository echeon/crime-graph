import React from 'react';
import ReactDOM from 'react-dom';
import precincts from '../assets/data/precincts/precincts';
import Stat from './stat';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      precinctId: 0,
      precinctName: 'Manhattan'
    }

    this.drawPrecinct = this.drawPrecinct.bind(this);
    this.resetPrecinct = this.resetPrecinct.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const map = document.getElementById('map');
    const defaultOptions = {
      zoom: 12,
      center: {lat: 40.7831, lng: -73.9712}
    };

    this.map = new google.maps.Map(map, defaultOptions);
    precincts.forEach(precinct => { this.drawPrecinct(precinct) });
  }

  drawPrecinct(precinct) {
    const polygon = new google.maps.Polygon({
      paths: precinct.paths,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    polygon.setMap(this.map);
    polygon.addListener('click', () => {
      this.setState({
        precinctId: precinct.id,
        precinctName: precinct.name
      });
    })
  }

  resetPrecinct() {
    this.setState({
      precinctId: 0,
      precinctName: "Manhattan"
    });
  }

  render() {
    const reset = (
      <h4 onClick={this.resetPrecinct}>Back to Manhattan Statistics</h4>
    );

    return (
      <div className="container">
        <div id="map"></div>
        <aside>
          <h1>Manhattan Historical Crime Statistics</h1>
          <h3>{this.state.precinctName}</h3>
          {this.state.precinctId ? reset : ""}
          <Stat precinctId={this.state.precinctId} />
        </aside>
      </div>
    )
  }
}
