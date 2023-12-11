import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button, { ButtonProps } from "@/utils/Button/Button";
import DealsCard from "@/components/customComponents/360_components/cardDeals";
import Selling from "@/components/analysis/Call/Charts/Selling";
import Top_Call from "@/components/customComponents/360_components/table_TOPcall";
import Leaderboard from "@/components/customComponents/360_components/TOP_leaderBoard";
import EmotionalAnalysisComp from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Emotional_Analysis";
import TreeMap from "@/components/analysis/Call/Tree";
import Emotion from "@/components/analysis/Call/Charts/Emotion";

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

  const [tabs, setTabs] = useState([
    { id: 0, title: "Sales Performance" },
    { id: 1, title: "Communication & Interaction" },
    { id: 2, title: "Engagement Reports" },
  ]);
  const [currTab, setCurrTab] = useState(0);

  const getPitchData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://salescrmbe.onrender.com/api/pitch-analysis/find-one",
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
        "https://salescrmbe.onrender.com/api/selling-analysis/find-one",
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
        "https://salescrmbe.onrender.com/api/script-analysis/find-one",
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

  const handleTabNavigation = (payload: any) => {
    setCurrTab(payload);
  };

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <div className="flex w-[100%] justify-end gap-[10px] mt-[20px]">
        <Button
          text={"Last 7 days"}
          id={0}
        // dropdown={[]}
        // click={() => { }}
        // value={0}
        // list={[]}
        // icon={""}
        // onClick1={() => { }}
        // key={0}
        // light={}
        // dark={}
        />
        <button>
          <Image width={20} height={20} src={getBasicIcon("Download")} alt="download" />
        </button>
      </div>
      <Navigator callback={handleTabNavigation} current={currTab} list={tabs} />
      {currTab === 0 && (
        <div className="">
          <div className="flex w-[100%]">
            <DealsCard label="Open Deals" icon={"↑"} count={100} percent={58.8} />
            <DealsCard label="Closed Deals" icon={"↑"} count={76} percent={50} />
            <DealsCard label="Lost Deals" icon={"↑"} count={18} percent={27.3} />
          </div>
          <div className="w-[100%] flex">
            <div className=" flex-[1]">
              <Selling getSellingData={getSellingData} selling={sellingData} />
            </div>
            <div className="flex-[1]">
              <Leaderboard />
              <Top_Call />
            </div>
          </div>
        </div>
      )}
      {currTab === 1 && (
        <div className="">
          <TreeMap getPitchData={getPitchData} data1={pitchData} />
          {/* <CallAnalysis
            script={scriptbuilderData}
            getScriptData={getScriptData}
            tree={pitchData}
            getSellingData={getSellingData}
            emotion={sellingData}
            getPitchData={getPitchData}
          /> */}
          <EmotionalAnalysisComp />
          {/* <Emotion /> */}
        </div>
      )}
      {currTab === 2 && (
        <div className="">

        </div>
      )}
    </div>
  );
};

export default Dashboard;
