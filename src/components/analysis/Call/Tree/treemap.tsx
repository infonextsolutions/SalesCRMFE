import React from "react";
import Chart from "react-apexcharts";
import { data, options } from "./data";

const SoleChart = ({ i, title, w }: any) => {
  const option1: any = options[i];
  const data1: any = data[i];
  const data2: any = data[i + 1];
  console.log();
  return (
    <div
      className=" shrink-0"
      style={{
        width: w,
        marginRight:
          data1[0].data.length < 5 ? (data2[0].data.length < 5 ? -29 : -39) : 0,
      }}
    >
      <h4 className="text-center translate-x-[-13px] text-[16px] font-medium text-text-norm">
        {title}
      </h4>
      <Chart
        options={option1}
        series={data1}
        type="treemap"
        height={500}
        width={w}
      />
    </div>
  );
};

const Charts = () => {
  return (
    <div className="mt-[40px] flex">
      <SoleChart title="Opening" i={0} w={300} />
      <SoleChart title="Product Knowledge" i={1} w={280} />
      <SoleChart title="Need Discovery" i={2} w={300} />
      <SoleChart title="Lead Qualification" i={3} w={300} />
      <SoleChart title="Key Value Proposition" i={4} w={300} />
      <SoleChart title="Closing" i={5} w={150} />
    </div>
  );
};

export default Charts;
