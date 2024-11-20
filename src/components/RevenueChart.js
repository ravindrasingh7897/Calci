import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = ({ projections }) => {
  const data = {
    labels: projections.map((_, index) => `Year ${index + 1}`),
    datasets: [
      {
        label: "Projected Revenue",
        data: projections,
        backgroundColor: "rgba(75, 192, 192, 1.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Projected Revenue Over 5 Years",
      },
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue ($)",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Revenue Projection Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
