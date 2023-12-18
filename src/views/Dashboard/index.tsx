import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
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
import {
  AvgCallScore,
  NoOfQuesAsked,
  SellingSkills,
  HighIntentCallVolume,
  LongestMonologue,
  NoOfTopics,
  SalesRepPatienceSilence,
  LongestCustomerStory,
  NoOfSwitches,
  SalesRepSentimentScore,
  SatisfactionScore,
  PerformanceRate,
  NoOfInterruptions,
  NoOfParticipants,
} from "@/constants/chartFields";
import {
  avgCallScore,
  highIntentCallVolume,
  noOfParticipants,
  noOfTopics,
  salesRepSentimentScore,
  satisfactionScore,
} from "@/constants/dummyData";
import GroupBarChartVertical from "@/components/analysis/Call/Charts/GroupBarChartVertical";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const Dashboard = ({ data }: any) => {
const Dashboard = ({ data }: any) => {
  const [scriptbuilderData, setScriptBuilderData] = useState([]);
  const [sellingData, setSellingData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  console.log(data);
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
        console.log("____________ GET PITCH DATA ___________", res.data);
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
        console.log("____________ GET SELLING DATA ___________", res.data);
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
        console.log("____________ GET SCRIPT DATA ___________", res.data);
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
  const ref: any = useRef();

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      data.first.result,
      data.second.result,
      data.third.result,
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  const exportPDF = () => {
    const documentDefinition = {
      content: [
        {
          text: "JSON to PDF Conversion",
          style: "header",
        },
        {
          text: JSON.stringify(
            [data.first.result, data.second.result, data.third.result],
            null,
            4
          ),
          style: "contentStyle",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 10,
        },
        contentStyle: {
          fontSize: 12,
          margin: [0, 5, 0, 15] as [number, number, number, number],
        },
      },
    };

    pdfMake.createPdf(documentDefinition).download("converted_data.pdf");
  };

  const addExport = (e: any, e1: any) => {
    if (e1 === 0) {
      exportXLSX();
    } else if (e1 === 1) {
      exportPDF();
    }
  };

  return (
    <div className="bg-white w-[100%] min-h-[90vh] pl-[20px] pr-[20px]">
      <div className="flex w-[100%] justify-end gap-[10px]">
        <Navigation
          title=""
          buttons={[
            {
              text: "Last 7 days",
              dropdown: true,
              id: 1,
              dark: true,
              light: false,
              list: [
                { title: "Last 7 days", Icon: "" },
                { title: "Last 15 days", Icon: "" },
                { title: "Last 30 days", Icon: "" },
              ],
            },
            {
              text: "",
              dropdown: true,
              id: 1,
              icon: "Download",
              light: true,
              dark: false,
              click: addExport,
              list: [
                { title: "Excel", Icon: "Excel" },
                { title: "Print", Icon: "Printer" },
                {
                  title: "CSV",
                  Icon: "CSV",
                  wrapper: (
                    <CSVLink
                      data={[
                        data.first.result,
                        data.second.result,
                        data.third.result,
                      ]}
                      className=""
                      ref={ref}
                    >
                      CSV
                    </CSVLink>
                  ),
                },
              ],
            },
          ]}
        />
      </div>
      <Navigator
        callback={handleTabNavigation}
        current={currTab}
        list={tabs}
        width={true}
      />
      {currTab === 0 && (
        <div className="w-[100%] mt-4 px-6">
          <div className="flex w-[100%] justify-between py-4">
            <DealsCard
              label="Open Deals"
              icon={"↑"}
              count={100}
              percent={58.8}
            />
            <DealsCard
              label="Closed Deals"
              icon={"↑"}
              count={76}
              percent={50}
            />
            <DealsCard
              label="Lost Deals"
              icon={"↑"}
              count={18}
              percent={27.3}
            />
          </div>
          <div className="w-[100%] flex gap-10 mt-5">
            <div className="flex flex-col gap-6 ">
              <BarChartVertical
                getSellingData={getSellingData}
                title="Selling Skills"
                data={sellingData}
                template={SellingSkills}
              />
              <BarChartVertical
                title="Average Call Score"
                template={AvgCallScore}
                data={avgCallScore}
              />
              <BarChartVertical
                title="Number of Questions Asked"
                template={NoOfQuesAsked}
                data={avgCallScore}
              />
              <StageWiseAnalysis
                getSellingData={getSellingData}
                selling={sellingData}
              />
            </div>
            <div className="flex flex-col gap-6">
              <Leaderboard />
              <Top_Call />
              <BarChartVertical
                title="High Intent Call Volume"
                template={HighIntentCallVolume}
                data={highIntentCallVolume}
              />
              <DealAnalysis />
            </div>
          </div>
        </div>
      )}
      {currTab === 1 && (
        <div className="px-6">
          <TreeMap getPitchData={getPitchData} data1={pitchData} />
          <div className="w-[100%] flex justify-between gap-10">
            <div className="flex flex-col gap-6">
              <EmotionalAnalysisComp />
              <BarChartVertical
                title="Longest Monologue"
                template={LongestMonologue}
                data={avgCallScore}
              />
              <TalkRatio />
              <BarChartVertical
                title="Number of Topics"
                template={NoOfTopics}
                data={noOfTopics}
              />
            </div>
            <div className=" flex flex-col gap-6">
              <BarChartVertical
                title="Sales Rep's Patience/Silence"
                template={SalesRepPatienceSilence}
                data={avgCallScore}
              />
              <BarChartVertical
                title="Longest Customer Story"
                template={LongestCustomerStory}
                data={avgCallScore}
              />
              <GroupBarChartVertical
                title="Number of Interruptions"
                template={NoOfInterruptions}
                data={noOfParticipants}
              />
              <BarChartVertical
                title="Number of Switches"
                template={NoOfSwitches}
                data={avgCallScore}
              />
            </div>
          </div>
        </div>
      )}
      {currTab === 2 && (
        <div className="w-[100%] mt-10 flex justify-between gap-2">
          <div className="flex flex-col gap-6">
            <GroupBarChartVertical
              title="Number of Participants"
              template={NoOfParticipants}
              data={noOfParticipants}
            />
            <BarChartVertical
              title="Sales Rep Sentiment Score"
              template={SalesRepSentimentScore}
              data={salesRepSentimentScore}
            />
            <CallSentiment />
          </div>
          <div className="flex flex-col gap-6">
            <BarChartVertical
              title="Satisfaction Score"
              template={SatisfactionScore}
              data={satisfactionScore}
            />
            <BarChartVertical
              title="Performance Rate"
              template={PerformanceRate}
              data={avgCallScore}
            />
            <NoiseAndVolumeChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
