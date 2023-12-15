import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DealsCard from "@/components/customComponents/360_components/cardDeals";
import Top_Call from "@/components/customComponents/360_components/table_TOPcall";
import Leaderboard from "@/components/customComponents/360_components/TOP_leaderBoard";
import EmotionalAnalysisComp from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Emotional_Analysis";
import TreeMap from "@/components/analysis/Call/Tree";
import StageWiseAnalysis from "@/components/analysis/Call/Charts/StageWiseAnalysis";
import DealAnalysis from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Deal_Analytics";
import TalkRatio from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Ratio_bar";
import BarChartVertical from "@/components/analysis/Call/Charts/BarChartVertical";
import CallSentiment from "@/components/customComponents/360_components/CallSentiment";
import NoiseAndVolumeChart from "@/components/analysis/Call/Charts/NoiseAndVolumeChart";
import { AvgCallScore, NoOfQuesAsked, SellingSkills, HighIntentCallVolume, LongestMonologue, NoOfTopics, SalesRepPatienceSilence, LongestCustomerStory, NoOfSwitches, SalesRepSentimentScore, SatisfactionScore, PerformanceRate, NoOfInterruptions, NoOfParticipants } from "@/constants/chartFields";
import { avgCallScore, highIntentCallVolume, noOfParticipants, noOfTopics, salesRepSentimentScore, satisfactionScore } from "@/constants/dummyData";
import GroupBarChartVertical from "@/components/analysis/Call/Charts/GroupBarChartVertical";

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
        console.log('____________ GET PITCH DATA ___________', res.data);
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
        console.log('____________ GET SELLING DATA ___________', res.data);
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
        console.log('____________ GET SCRIPT DATA ___________', res.data);
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
        {/* <Button
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
        </button> */}
      </div>
      <Navigator callback={handleTabNavigation} current={currTab} list={tabs} />
      {currTab === 0 && (
        <div className="w-[100%]">
          <div className="flex w-[100%]">
            <DealsCard label="Open Deals" icon={"↑"} count={100} percent={58.8} />
            <DealsCard label="Closed Deals" icon={"↑"} count={76} percent={50} />
            <DealsCard label="Lost Deals" icon={"↑"} count={18} percent={27.3} />
          </div>
          <div className="w-[100%] flex">
            <div className=" flex-[1]">
              <BarChartVertical getSellingData={getSellingData} title="Selling Skills" data={sellingData} template={SellingSkills} />
              <BarChartVertical title="Average Call Score" template={AvgCallScore} data={avgCallScore} />
              <BarChartVertical title="Number of Questions Asked" template={NoOfQuesAsked} data={avgCallScore} />
              <StageWiseAnalysis getSellingData={getSellingData} selling={sellingData} />
            </div>
            <div className="flex-[1]">
              <Leaderboard />
              <Top_Call />
              <BarChartVertical title="High Intent Call Volume" template={HighIntentCallVolume} data={highIntentCallVolume} />
              <DealAnalysis />
            </div>
          </div>
        </div>
      )}
      {currTab === 1 && (
        <div className="">
          <TreeMap getPitchData={getPitchData} data1={pitchData} />
          <div className="w-[100%] flex">
            <div className=" flex-[1]">
              <EmotionalAnalysisComp />
              <BarChartVertical title="Longest Monologue" template={LongestMonologue} data={avgCallScore} />
              <TalkRatio />
              <BarChartVertical title="Number of Topics" template={NoOfTopics} data={noOfTopics} />
            </div>
            <div className="flex-[1]">
              <BarChartVertical title="Sales Rep's Patience/Silence" template={SalesRepPatienceSilence} data={avgCallScore} />
              <BarChartVertical title="Longest Customer Story" template={LongestCustomerStory} data={avgCallScore} />
              <GroupBarChartVertical title="Number of Interruptions" template={NoOfInterruptions} data={noOfParticipants} />
              <BarChartVertical title="Number of Switches" template={NoOfSwitches} data={avgCallScore} />
            </div>
          </div>
        </div>
      )}
      {currTab === 2 && (
        <div className="">
          <div className="w-[100%] flex">
            <div className=" flex-[1]">
              <GroupBarChartVertical title="Number of Participants" template={NoOfParticipants} data={noOfParticipants} />
              <BarChartVertical title="Sales Rep Sentiment Score" template={SalesRepSentimentScore} data={salesRepSentimentScore} />
              <CallSentiment />
            </div>
            <div className="flex-[1]">
              <BarChartVertical title="Satisfaction Score" template={SatisfactionScore} data={satisfactionScore} />
              <BarChartVertical title="Performance Rate" template={PerformanceRate} data={avgCallScore} />
              <NoiseAndVolumeChart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
