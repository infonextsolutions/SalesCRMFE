import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@mui/material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800];
const cData = [3400, 2398, 4800, 2908, 1800, 5800];
const xLabels = ["12 Nov", "26 Nov", "10 Dec", "24 Dec", "7 Jan", "21 Jan"];

const CallSentiment = ({ callSentimentData }) => {
  console.log('====== callSentimentData ======', callSentimentData);

  return (
    <Card className="w-[auto] h-[320px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Call Sentiment
      </h1>
      <div className="chart-container">
        <LineChart
          width={500}
          height={250}
          series={[
            {
              data: pData,
              label: "Neutral",
              color: "#8AA150",
              showMark: false,
            },
            {
              data: uData,
              label: "Positive",
              color: "#FFB839",
              showMark: false,
            },
            {
              data: cData,
              label: "Negative",
              color: "#FE5143",
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </Card>
  );
};

export default CallSentiment;
