/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import './result.scss';
import { useSelector, connect } from 'react-redux';
import { selectResult } from './resultSlice';
const colors = ['red', 'blue', 'green',
  'indianred', 'lightblue', 'lightgreen',
  'darkred', 'navy', 'darkgreen'];

const Result = () => {
  const datas = useSelector(selectResult)

  useEffect(() => {
    if (window.chart !== undefined && window.chart.destroy !== undefined) { window.chart.destroy(); };
    window.chart = generateChart();
  });
  return (
    <div className="chart">
      <canvas id="chart" data-datas={JSON.stringify(datas)} />
    </div>
  );
}

function generateChart() {
  const chart = document.getElementById('chart');
  const d = JSON.parse(chart.dataset.datas);
  const data = {
    datasets: [],
  };
  let labels = [];
  let i = 0;
  Object.entries(d).forEach(([key, value]) => {
    data.datasets.push({
      label: key,
      data: value.sort((a, b) => a.x - b.x),
      backgroundColor: colors[i % colors.length],
      borderColor: colors[i % colors.length],
    });
    labels = labels.concat(value.flatMap(x => x.x));
    i += 1;
  });
  data.labels = [...new Set(labels)].sort((a, b) => a - b);
  const scales = {
    y: {
      max: 1, min: 0, offset: true, title: {
        display: true, text: "Probability"
      }
    },
    x: {
      title: {
        display: true, text: "Damage (at least X)"
      }
    },
  }
  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: scales,
    },
  };
  // eslint-disable-next-line no-undef
  return new Chart(chart, config);
}

function mapStateToProps(state) {
  return state.Result;
}

export default connect(mapStateToProps)(Result);
