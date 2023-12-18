import { Card } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";

const BarChartVertical = ({ title = "", data, template }: any) => {
  const xLabels = template?.labels?.map(
    (label: string, index: number) => template?.mappings?.[label]
  );

  const barData = template?.labels?.map((label: string, index: number) => {
    return data?.[label] || 0;
  });

  return (
    <Card
      sx={{ width: 580, bgcolor: "#fff" }}
      className={`w-[580px] h-[300px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]`}
    >
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        {title}
      </h1>
      <div className="chart-container">
        {data && (
          <BarChart
            xAxis={[{ scaleType: "band", data: xLabels }]}
            series={[{ data: barData, color: "#FE5143" }]}
            width={580}
            height={250}
          />
        )}
      </div>
    </Card>
  );
};

export default BarChartVertical;
