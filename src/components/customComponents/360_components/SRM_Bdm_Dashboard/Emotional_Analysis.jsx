
import React from "react";


import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const EmotionalAnalysisComp = () => {
  const data = {
    labels: [
      "Assertiveness",
      "Joy",
      "Trust",
      "Politeness",
      "Satisfaction",
      "Curiosity",
      "Confidence",
      "Empathy",
    ],       
    datasets: [
      {
        label: "# of Votes",
        data: [25, 50, 30, 40, 10, 15],
        backgroundColor: "rgba(254, 81, 67, 0.3)",
        borderColor: "rgba(254, 81, 67, 0.3)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="chart-container"
      style={{ width: "500px", height: "500px" }}
    >
      <Radar data={data} height={200}></Radar>
    </div>
  );
};

export default EmotionalAnalysisComp;