import React from 'react';
import manhattan from '../assets/data/manhattan';
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import colorScheme from './color_scheme';


export default class Stat extends React.Component {
  constructor(props) {
    super(props);
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
    const charts = [];
    const precinctStat = manhattan[id];

    const offenses = Object.keys(precinctStat);
    const indexToDelete = offenses.indexOf("TOTAL SEVEN MAJOR FELONY OFFENSES");
    offenses.splice(indexToDelete, 1);

    offenses.forEach(offense => {
      const chartTitle = offense;
      const data = this.getDataArray(precinctStat[offense]);

      const chart = (
        <div className="chart-container">
          <h3 className="chart-title">{chartTitle}</h3>
          <BarChart width={300} height={200} data={data}>
            <XAxis dataKey="year" />
            <Tooltip/>
            <Bar dataKey="freq" fill="#8884d8" />
          </BarChart>
        </div>
      );

      charts.push(chart);
    })

    return charts;
  }

  getAggregateChart(id) {
    const precinctStat = manhattan[id];
    const dataObj = {};

    const offenses = Object.keys(precinctStat);
    const indexToDelete = offenses.indexOf("TOTAL SEVEN MAJOR FELONY OFFENSES");
    offenses.splice(indexToDelete, 1);

    offenses.forEach(offense => {
      const statistics = precinctStat[offense];
      Object.keys(statistics).forEach(year => {
        dataObj[year] = dataObj[year] || { year };
        if (dataObj[year][offense]) {
          dataObj[year][offense] += statistics[year];
        } else {
          dataObj[year][offense] = statistics[year];
        }
      });
    });

    const chartTitle = "TOTAL SEVEN MAJOR FELONY OFFENSES";
    const data = Object.values(dataObj);

    return (
      <div className="big-chart-container">
        <h3 className="chart-title">{chartTitle}</h3>
        <ResponsiveContainer width="100%" aspect="2">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide="true" />
          <YAxis type="category" dataKey="year" />
          <Tooltip/>
          <Legend />
          <Bar dataKey={offenses[0]} stackId="a" fill={colorScheme[0]} />
          <Bar dataKey={offenses[1]} stackId="a" fill={colorScheme[1]} />
          <Bar dataKey={offenses[2]} stackId="a" fill={colorScheme[2]} />
          <Bar dataKey={offenses[3]} stackId="a" fill={colorScheme[3]} />
          <Bar dataKey={offenses[4]} stackId="a" fill={colorScheme[4]} />
          <Bar dataKey={offenses[5]} stackId="a" fill={colorScheme[5]} />
          <Bar dataKey={offenses[6]} stackId="a" fill={colorScheme[6]} />
        </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  render() {
    const { precinctId } = this.props;

    return (
      <div>
        { precinctId ? this.getAggregateChart(precinctId) : "" }
        { precinctId ? this.getCharts(precinctId) : "" }
      </div>
    );
  }
}
