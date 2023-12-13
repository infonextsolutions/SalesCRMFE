

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [40, 30, 98, 27, 18, 23, 34];
const pData = [24, 13, 20, 39, 48, 38, 43];
const xLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const TalkRatio = () => {
  return (
    <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
      <h3 className="text-black">Talk Ratio</h3>
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
    </div>
  );
};

export default TalkRatio;