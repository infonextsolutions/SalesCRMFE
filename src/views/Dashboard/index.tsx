import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const Dashboard = ({ data }: any) => {
const Dashboard = ({ data }: any) => {
  const [scriptbuilderData, setScriptBuilderData] = useState([]);
  const [sellingData, setSellingData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  console.log(data.first);
  console.log(data.second);
  console.log(data.third);
  const [startDate, setStartDate] = useState("2023-07-19");
  const [endDate, setEndDate] = useState("2023-07-26");

  const getPitchData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://testsalescrm.nextsolutions.in/api/pitch-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        setPitchData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getSellingData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://testsalescrm.nextsolutions.in/api/selling-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        setSellingData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getScriptData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://testsalescrm.nextsolutions.in/api/script-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        setScriptBuilderData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getPitchData([startDate, endDate]);
    getScriptData([startDate, endDate]);
    getSellingData([startDate, endDate]);
  }, []);

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation title={"Call Analysis"} buttons={[]} />
      <CallAnalysis
        script={scriptbuilderData}
        emotion={sellingData}
        tree={pitchData}
        getPitchData={getPitchData}
        getScriptData={getScriptData}
        getSellingData={getSellingData}
      />
    </div>
  );
};

export default Dashboard;
