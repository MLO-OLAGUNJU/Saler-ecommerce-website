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
  console.log(data);
  return <div></div>;
};

export default BarGraph;
