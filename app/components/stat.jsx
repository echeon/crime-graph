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

  sumPrecinctStat() {
    let total;
    Object.values(manhattan).forEach(precinctStat => {
      if (!total) {
        total = precinctStat;
      } else {
        Object.keys(precinctStat).forEach(offense => {
          Object.keys(precinctStat[offense]).forEach(year => {
            total[offense][year] += precinctStat[offense][year];
          })
        })
      }
    });

    return total;
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
    const precinctStat = id ? manhattan[id] : this.sumPrecinctStat();

    const offenses = Object.keys(precinctStat);
    const indexToDelete = offenses.indexOf("TOTAL SEVEN MAJOR FELONY OFFENSES");
    offenses.splice(indexToDelete, 1);

    offenses.forEach(offense => {
      const chartTitle = offense;
      const data = this.getDataArray(precinctStat[offense]);

      const chart = (
        <div className="chart-container">
          <h3 className="chart-title">{chartTitle}</h3>
          <ResponsiveContainer width="100%" aspect={3/2}>
            <LineChart data={data}>
              <XAxis dataKey="year" padding={{ left: 10, right: 10 }}/>
              <YAxis />
              <Tooltip/>
              <Line dataKey="freq" stroke={colorScheme[offense]} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

      charts.push(chart);
    })

    return charts;
  }

  getAggregateChart(id) {
    const precinctStat = id ? manhattan[id] : this.sumPrecinctStat();
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
            <Legend fontSize={10} layout="vertical" align="right" width={200} verticalAlign="bottom"/>
            <Bar dataKey={offenses[0]} stackId="a" fill={colorScheme[offenses[0]]} />
            <Bar dataKey={offenses[1]} stackId="a" fill={colorScheme[offenses[1]]} />
            <Bar dataKey={offenses[2]} stackId="a" fill={colorScheme[offenses[2]]} />
            <Bar dataKey={offenses[3]} stackId="a" fill={colorScheme[offenses[3]]} />
            <Bar dataKey={offenses[4]} stackId="a" fill={colorScheme[offenses[4]]} />
            <Bar dataKey={offenses[5]} stackId="a" fill={colorScheme[offenses[5]]} />
            <Bar dataKey={offenses[6]} stackId="a" fill={colorScheme[offenses[6]]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  render() {
    const { precinctId } = this.props;
    return (
      <div className="stat-container">
        {this.getAggregateChart(precinctId)}
        <hr></hr>
        <div className="flex">
          {this.getCharts(precinctId)}
        </div>
      </div>
    );
  }
}
