import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800];
const cData = [3400, 2398, 4800, 2908, 1800, 5800];
const xLabels = ["12 Nov", "26 Nov", "10 Dec", "24 Dec", "7 Jan", "21 Jan"];

const CallSentiment = () => {
  return (
    <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
      <h3 className='text-black'>Call Sentiment</h3>
      <div className='chart-container'>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: pData, label: "Neutral", color: "#8AA150", showMark: false },
            { data: uData, label: "Positive", color: "#FFB839", showMark: false },
            { data: cData, label: "Negative", color: "#FE5143", showMark: false },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </div>
  );
};

export default CallSentiment;
