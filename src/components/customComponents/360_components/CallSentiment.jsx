import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@mui/material";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const CallSentiment = ({ callSentimentData }) => {
  const [ready, setReady] = React.useState(false);
  const [positiveData, setPositiveData] = React.useState([]);
  const [negativeData, setNegativeData] = React.useState([]);
  const [neutralData, setNeutralData] = React.useState([]);
  const [labels, setLabels] = React.useState([]);
  React.useEffect(() => {
    const posData = [],
      negData = [],
      neuData = [],
      lbl = [];
    if (callSentimentData.length) {
      callSentimentData?.map((dataItem, idx) => {
        posData[idx] = dataItem?.POSITIVE;
        negData[idx] = dataItem?.NEGATIVE;
        neuData[idx] = dataItem?.NEUTRAL;
        const date = new Date(dataItem?.date);
        const labelItem = `${date?.getDate()} ${months[date?.getMonth()]}`;
        lbl[idx] = labelItem;
      });
      setPositiveData(posData);
      setNegativeData(negData);
      setNeutralData(neuData);
      setLabels(lbl);
      setReady(true);
    } else {
      return;
    }
  }, [callSentimentData]);

  return (
    <Card className="w-[auto] h-[400px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Call Sentiment
      </h1>
      {ready && (
        <div className="chart-container">
          <LineChart
            width={500}
            height={300}
            series={[
              {
                data: neutralData,
                label: "Neutral",
                color: "#8AA150",
                showMark: false,
              },
              {
                data: positiveData,
                label: "Positive",
                color: "#FFB839",
                showMark: false,
              },
              {
                data: negativeData,
                label: "Negative",
                color: "#FE5143",
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: "point", data: labels }]}
          />
        </div>
      )}
    </Card>
  );
};

export default CallSentiment;
