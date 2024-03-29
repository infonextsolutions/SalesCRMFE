import BarChartVertical from "@/components/analysis/Call/Charts/BarChartVertical";
import GroupBarChartVertical from "@/components/analysis/Call/Charts/GroupBarChartVertical";
import React from "react";
import CallSentiment from "@/components/customComponents/360_components/CallSentiment";
import NoiseAndVolumeChart from "@/components/analysis/Call/Charts/NoiseAndVolumeChart";
import {
  SalesRepSentimentScore,
  SatisfactionScore,
  PerformanceRate,
  NoOfParticipants,
  CallsDisposition,
  TalkingSpeed,
} from "@/constants/chartFields";
import {
  avgCallScore,
  callDisposition,
  noOfParticipants,
  salesRepSentimentScore,
  satisfactionScore,
  talkingSpeed,
} from "@/constants/dummyData";

const EngagementReports = ({ tabData, callSentimentData }: { tabData?: any, callSentimentData?: any }) => {
  // SDR/BDM; Manager
  if (tabData?.key === "Manager") {
    return (
      <div className="w-[100%] mt-10 flex justify-between gap-2">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] flex flex-wrap flex-col gap-6">
          <GroupBarChartVertical
            title="Number of Participants"
            template={NoOfParticipants}
            data={noOfParticipants}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
          <BarChartVertical
            title="Sales Rep Sentiment Score"
            template={SalesRepSentimentScore}
            data={salesRepSentimentScore}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
          <CallSentiment callSentimentData={callSentimentData} />
          <BarChartVertical
            title="Call Disposition"
            template={CallsDisposition}
            data={callDisposition}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
        </div>
        <div className="w-[100%] lg:w-[46%] md:w-[46%] flex flex-wrap flex-col gap-6">
          <BarChartVertical
            title="Satisfaction Score"
            template={SatisfactionScore}
            data={satisfactionScore}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
          <BarChartVertical
            title="Performance Rate"
            template={PerformanceRate}
            data={avgCallScore}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
          <NoiseAndVolumeChart />
          <BarChartVertical
            title="Talking Speed"
            template={TalkingSpeed}
            data={talkingSpeed}
            options={[
              { key: "", label: "Select Team Members" },
              { key: "", label: "John C." },
              { key: "", label: "Barbara Oaklay" },
              { key: "", label: "Diana J." },
              { key: "", label: "Jacob Wilson" },
            ]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[100%] mt-10 flex flex-wrap justify-between gap-2 overflow-x-hidden">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] flex flex-wrap flex-col gap-6">
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
          <CallSentiment callSentimentData={callSentimentData} />
        </div>
        <div className="w-[100%] lg:w-[46%] md:w-[46%] flex flex-wrap flex-col gap-6">
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
    );
  }
};

export default EngagementReports;
