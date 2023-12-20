import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@mui/material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DealAnalysis = () => {
  return (
    <Card className="w-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Deal Analytics
      </h1>
      <div className="chart-container">
        <LineChart
          width={500}
          height={300}
          series={[
            {
              curve: "linear",
              data: pData,
              label: "Deals Won",
              color: "#FE5143",
            },
            {
              curve: "linear",
              data: uData,
              label: "Deals Lost",
              color: "#FFB839",
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </Card>
  );
};

export default DealAnalysis;
