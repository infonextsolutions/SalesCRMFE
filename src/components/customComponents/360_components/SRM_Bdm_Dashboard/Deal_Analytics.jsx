import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@mui/material";
import { getBasicIcon } from "@/utils/AssetsHelper";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysMapper = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
}

const DealAnalysis = ({ dealAnalytics }) => {
  const [dealsWonList, setDealsWonList] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const [dealsLostList, setDealsLostList] = React.useState([0, 0, 0, 0, 0, 0, 0]);

  React.useEffect(() => {
    let formattedW = [0, 0, 0, 0, 0, 0, 0], formattedL = [0, 0, 0, 0, 0, 0, 0];
    dealAnalytics?.result?.forEach((item) => {
      formattedW[daysMapper?.[item?.day]] = item?.wonDeals;
      formattedL[daysMapper?.[item?.day]] = item?.lostDeals;
    });
    setDealsWonList(formattedW);
    setDealsLostList(formattedL);
  }, [dealAnalytics]);

  return (
    <Card className="w-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Deal Analytics
      </h1>
      <div className="flex gap-10 items-center">
        <div className="">
          <span className="text-gray-500">{dealAnalytics?.average?.[0]?.label}</span>
          <div className="flex items-center gap-10">
            <img src={getBasicIcon("UpArrow")} alt="" width={16} height={16} />
            <span className="text-[20px]">{parseFloat(dealAnalytics?.average?.[0]?.value?.slice(0, -1)).toFixed(2)}%</span>
          </div>
        </div>
        <div className="">
          <span className="text-gray-500">{dealAnalytics?.average?.[1]?.label}</span>
          <div className="flex items-center gap-10">
            <img src={getBasicIcon("DownArrow")} alt="" width={16} height={16} />
            <span className="text-[20px]">{parseFloat(dealAnalytics?.average?.[1]?.value?.slice(0, -1)).toFixed(2)}%</span>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <LineChart
          width={500}
          height={300}
          series={[
            {
              curve: "linear",
              data: dealsWonList,
              label: "Deals Won",
              color: "#FFB839",
            },
            {
              curve: "linear",
              data: dealsLostList,
              label: "Deals Lost",
              color: "#FE5143",
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </Card>
  );
};

export default DealAnalysis;
