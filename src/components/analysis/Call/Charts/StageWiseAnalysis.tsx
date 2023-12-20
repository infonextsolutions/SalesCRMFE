import { Card } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";

const valueFormatter = (value: any) => `${value}mm`;
const HorizontalBarComparator = (payload: any) => {
  return (
    <div>
      <BarChart
        xAxis={[
          { scaleType: "band", data: ["label 1", "label 2"], position: "left" },
        ]}
        yAxis={[{ position: "bottom" }]}
        series={[{ data: [25, 75], color: "#FE5143" }]}
        leftAxis={{ tickSize: 0 }}
        bottomAxis={{ tickSize: 0 }}
        width={120}
        height={140}
        // layout="horizontal"
      />
    </div>
  );
};

const StageWiseAnalysis = ({
  title = "Stage Wise Analysis",
  template,
  data,
}: any) => {
  const labels = [
    "Opening",
    "Lead Qualification",
    "Need Discovery",
    "Product Knowledge",
    "Closing",
    "Price Discussion",
    "Consultative Selling",
    "Empathy",
    "Listening Skills",
    "Confidence",
    "Urgency Creation",
  ];

  return (
    <Card className="w-[auto] h-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[0px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          {title}
        </h1>
      </div>
      <div className="chart-container">
        <ul className="">
          {labels?.map((label: string, index: number) => (
            <li className="flex justify-between items-center h-10" key={index}>
              <span className="text-[#333]">{label}</span>
              <HorizontalBarComparator />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export interface Result {
  _id?: string;
  consultative_selling?: number;
  empathy?: number;
  listening_skills?: number;
  confidence?: number;
  urgency_creation?: number;
  positive_energy?: number;
  report_building?: number;
  politeness?: number;
  createdAt?: string;
  updatedAt?: string;
}

export default StageWiseAnalysis;
