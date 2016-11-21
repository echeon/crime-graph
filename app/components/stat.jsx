import React from 'react';
import manhattan from '../assets/data/manhattan';
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend
} from 'recharts';

const COLORS = [
  "#0188a2", "#20a391", "#7aa450", "#fccb8b", "#fc7839", "#a00528", "#580346"
]

function deleteElement(arr, el) {
  const index = arr.indexOf(el);

}

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
    const charts = [];
    const precinctStat = manhattan[id];

    Object.keys(precinctStat).forEach(offense => {
      if (offense === "TOTAL SEVEN MAJOR FELONY OFFENSES") {
        return;
      }

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
      )

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
      if (offense === "TOTAL SEVEN MAJOR FELONY OFFENSES") {
        return;
      }

      const statistics = precinctStat[offense];
      Object.keys(statistics).forEach(year => {
        dataObj[year] = dataObj[year] || { year };
        if (dataObj[year][offense]) {
          dataObj[year][offense] += statistics[year];
        } else {
          dataObj[year][offense] = statistics[year];
        }
      })
    });

    const chartTitle = "TOTAL SEVEN MAJOR FELONY OFFENSES";
    const data = Object.values(dataObj);

    return (
      <div>
        <h3 className="chart-title">{chartTitle}</h3>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="year" />
          <Tooltip/>
          <Legend />
          <Bar dataKey={offenses[0]} stackId="a" fill={COLORS[0]} />
          <Bar dataKey={offenses[1]} stackId="a" fill={COLORS[1]} />
          <Bar dataKey={offenses[2]} stackId="a" fill={COLORS[2]} />
          <Bar dataKey={offenses[3]} stackId="a" fill={COLORS[3]} />
          <Bar dataKey={offenses[4]} stackId="a" fill={COLORS[4]} />
          <Bar dataKey={offenses[5]} stackId="a" fill={COLORS[5]} />
          <Bar dataKey={offenses[6]} stackId="a" fill={COLORS[6]} />
        </BarChart>
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
    )
  }
}
