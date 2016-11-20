import React from 'react';
import manhattan from '../assets/data/manhattan';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  aggregateData() {
    const dataObj = {};
    let startYear = 2000;
    let endYear = 2015;

    for (let year = startYear; year <= endYear; year++) {
      dataObj[year] = { name: year, total: 0 };
    }

    Object.values(manhattan).forEach(precinct => {
      const totalByYear = precinct["TOTAL SEVEN MAJOR FELONY OFFENSES"];
      Object.keys(totalByYear).forEach(year => {
        dataObj[year].total += totalByYear[year];
      });
    });

    return Object.values(dataObj);
  }

  getDataArray(stat) {
    const array = [];

    Object.keys(stat).forEach(year => {
      const obj = {
        year,
        freq: stat[year]
      };
      array.push(obj);
    });

    return array;
  }

  getCharts(id) {
    if (id === 0) {
      return [];
    }
    const charts = [];
    const precinctStat = manhattan[id];

    Object.keys(precinctStat).forEach(offense => {
      const chartTitle = offense;
      const data = this.getDataArray(precinctStat[offense]);

      const chart = (
        <div className="chart-container">
          <h3 className="chart-title">{chartTitle}</h3>
          <LineChart width={300} height={200} data={data}>
            <XAxis dataKey="year" padding={{left: 30, right: 30}}/>
            <Tooltip/>
            <Line dataKey="freq" stroke="#8884d8" />
          </LineChart>
        </div>
      )

      charts.push(chart);
      console.log(chartTitle);
      console.log(data);
    })

    return charts;
  }

  render() {
    const { precinctId } = this.props;

    return (
      <div>
        {this.getCharts(precinctId)}
      </div>
    )
  }
}
