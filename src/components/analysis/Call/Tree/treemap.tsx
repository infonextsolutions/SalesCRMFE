import React from "react";
import Chart from "react-apexcharts";
import { data, options } from "./data";

const SoleChart = ({ i, title }: any) => {
  const option1: any = options[i];
  const data1: any = data[i];
  return (
    <div className="w-[300px] shrink-0">
      <h4 className="text-center translate-x-[-13px] text-[16px] font-medium text-text-norm">
        {title}
      </h4>
      <Chart options={option1} series={data1} type="treemap" height={500} />
    </div>
  );
};

const Charts = () => {
  return (
    <div className="mt-[40px] flex">
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
      <SoleChart title="Opening" i={0} />
    </div>
  );
};

export default Charts;
