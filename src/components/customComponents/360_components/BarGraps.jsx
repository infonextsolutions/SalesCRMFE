import * as React from "react";
// import { BarChart } from "@mui/x-charts";
import { useSelector } from "react-redux";
import { selectApiData } from "../../../redux/utils/selectors";
import { useState } from "react";


const chartSetting = {
  width: 500,
  height: 400,
};
const dataset = [
  {
    figures: 25,
    label: "opening",
  },
  {
    figures: 60,
    label: "Lead",
  },
  {
    figures: 65,
    label: "Need",
  },
  {
    figures: 28,
    label: "Key",
  },
  {
    figures: 20,
    label: "Product",
  },
  {
    figures: 10,
    label: "Price",
  },
  {
    figures: 30,
    label: "Closing",
  },
];

const BarChartComp = ({ component }) => {

  // const [dataset ,setDataset]=useState([]);

  // const apiName = component.apiName;
  // const dataSelector = useSelector((state) => selectApiData(state, apiName));

  // // if(dataSelector){
  // //  setDataset(dataSelector);
  // // }
  // console.log(dataSelector);


  return (
    <>
      <h2>hedding</h2>
      {/* <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "label" }]}
        series={[{ dataKey: "figures", color: "#FE5143" }]}
        layout="vertical"
        {...chartSetting}
      /> */}

    </>
  );
};

export default BarChartComp;
