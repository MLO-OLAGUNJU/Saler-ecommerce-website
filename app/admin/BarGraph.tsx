"use client";
import React from "react";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, Tooltip, LinearScale, Legend);

interface BarGraphProps {
  data: GraphData[];
}

type GraphData = {
  day: string;
  date: string;
  totalAmount: number;
};
const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const labels = data.map((item) => item.day);
  const amounts = data.map((item) => item.totalAmount / 100);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Your Saler Sale Amount",
        data: amounts,
        backgroundColor: "#F9A024",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="h-[70vh]">
      <Bar data={chartData} options={options}></Bar>
    </div>
  );
};

export default BarGraph;
