import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DealAnalysis = () => {
  return (
    <>
      <div className="text-black">Deal Analytics</div>
      <LineChart
        width={500}
        height={300}
        series={[
          { curve: "linear", data: pData, label: "Deals Won", color: "#FE5143" },
          { curve: "linear", data: uData, label: "Deals Lost", color: "#FFB839" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </>
  );
};

export default DealAnalysis;