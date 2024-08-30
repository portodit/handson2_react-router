import React from 'react';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { usersData } from '../data/UserData';
import './Stats.css';  

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

function Stats() {
  // Data Preparation
  const usersPerMonth = usersData.reduce((acc, user) => {
    const month = new Date(user.dateJoined).toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const chartDataBar = {
    labels: Object.keys(usersPerMonth),
    datasets: [
      {
        label: 'Jumlah Pengguna per Bulan',
        data: Object.values(usersPerMonth),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartDataPie = {
    labels: Object.keys(usersPerMonth),
    datasets: [
      {
        label: 'Jumlah Pengguna per Bulan (Pie)',
        data: Object.values(usersPerMonth),
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartDataLine = {
    labels: Object.keys(usersPerMonth),
    datasets: [
      {
        label: 'Jumlah Pengguna per Bulan (Line)',
        data: Object.values(usersPerMonth),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartDataDoughnut = {
    labels: Object.keys(usersPerMonth),
    datasets: [
      {
        label: 'Jumlah Pengguna per Bulan (Doughnut)',
        data: Object.values(usersPerMonth),
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="stats-container">
      <h2>Statistik Pengguna</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>Bar Chart</h3>
          <Bar data={chartDataBar} />
        </div>
        <div className="chart">
          <h3>Pie Chart</h3>
          <Pie data={chartDataPie} />
        </div>
        <div className="chart">
          <h3>Line Chart</h3>
          <Line data={chartDataLine} />
        </div>
        <div className="chart">
          <h3>Doughnut Chart</h3>
          <Doughnut data={chartDataDoughnut} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
