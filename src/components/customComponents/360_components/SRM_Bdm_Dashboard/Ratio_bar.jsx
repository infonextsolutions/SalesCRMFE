import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card } from "@mui/material";

const uData = [40, 30, 98, 27, 18, 23, 34];
const pData = [24, 13, 20, 39, 48, 38, 43];
const xLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const TalkRatio = () => {
  return (
    <Card className="w-[600px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Talk Ratio
      </h1>
      <BarChart
        width={500}
        height={300}
        series={[
          {
            data: pData,
            label: "SDR/BDM",
            id: "sdr",
            stack: "total",
            color: "#FE5143",
          },
          {
            data: uData,
            label: "Prospect",
            id: "prospect",
            stack: "total",
            color: "#FFB839",
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Card>
  );
};

export default TalkRatio;
