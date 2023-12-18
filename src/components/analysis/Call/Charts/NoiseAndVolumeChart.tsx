import { Card } from "@mui/material";
import React from "react";
import GaugeChart from "react-gauge-chart";

const NoiseAndVolumeChart = () => {
  return (
    <Card className="w-[600px] h-[250px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Noise and Volume Chart
      </h1>
      <div className="chart-container flex">
        <div className="">
          <GaugeChart
            id="gauge-chart1"
            className="w-[30px]"
            nrOfLevels={12}
            colors={["yellow", "red"]}
            percent={0.2}
            hideText={true}
            arcWidth={0.3}
          />
          <span className="text-black">Noisy</span>
        </div>
        <div className="">
          <GaugeChart
            id="gauge-chart2"
            className="w-[30px]"
            nrOfLevels={12}
            colors={["yellow", "red"]}
            percent={0.2}
            hideText={true}
            arcWidth={0.3}
          />
          <span className="text-black mx-auto">Low Volume</span>
        </div>
      </div>
    </Card>
  );
};

export default NoiseAndVolumeChart;
