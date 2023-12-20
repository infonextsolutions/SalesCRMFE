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
import { Card } from "@mui/material";

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
        backgroundColor: "#fe5143",
        borderColor: "rgba(254, 81, 67, 0.3)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card
      className="w-[600px] h-[400px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[0px]"
      // style={{ width: "600px", height: "500px" }}
    >
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Emotional Analysis
      </h1>
      <Radar data={data} height={200} width={800}></Radar>
    </Card>
  );
};

export default EmotionalAnalysisComp;
