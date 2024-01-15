import React from "react";
import EmotionalAnalysisComp from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Emotional_Analysis";
import TreeMap from "@/components/analysis/Call/Tree";
import TalkRatio from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Ratio_bar";
import BarChartVertical from "@/components/analysis/Call/Charts/BarChartVertical";
import {
  LongestMonologue,
  NoOfTopics,
  SalesRepPatienceSilence,
  LongestCustomerStory,
  NoOfSwitches,
  NoOfInterruptions,
  TalkingSpeed,
  SatisfactionScore,
} from "@/constants/chartFields";
import {
  avgCallScore,
  noOfParticipants,
  noOfTopics,
  satisfactionScore,
  talkingSpeed,
} from "@/constants/dummyData";
import GroupBarChartVertical from "@/components/analysis/Call/Charts/GroupBarChartVertical";
import NavigationWithSwitchIcon from "@/components/app/NavigationWithSwitchIcon";

const CommunicationInteraction = ({
  tabData,
  pitchData,
  getPitchData,
}: {
  tabData?: any;
  pitchData?: any;
  getPitchData?: any;
}) => {
  // QA Analyst; QA manager; Manager, SRD/BDM
  if (tabData?.key === "Manager") {
    return (
      <div className="">
        <TreeMap getPitchData={getPitchData} data1={pitchData} />
        <div className="w-[100%] flex justify-between flex-wrap gap-2">
          <div className="w-[48%] flex flex-col gap-6">
            <EmotionalAnalysisComp />
            <BarChartVertical
              title="Longest Monologue"
              template={LongestMonologue}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <TalkRatio />
            <BarChartVertical
              title="Number of Topics"
              template={NoOfTopics}
              data={noOfTopics}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
          </div>
          <div className="w-[48%] flex flex-col gap-6">
            <BarChartVertical
              title="Sales Rep's Patience/Silence"
              template={SalesRepPatienceSilence}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <BarChartVertical
              title="Longest Customer Story"
              template={LongestCustomerStory}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <GroupBarChartVertical
              title="Number of Interruptions"
              template={NoOfInterruptions}
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
              title="Number of Switches"
              template={NoOfSwitches}
              data={avgCallScore}
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
      </div>
    );
  } else if (tabData?.key === "QA Analyst" || tabData?.key === "QA manager") {
    return (
      <div className="">
        <div className="flex w-[100%] justify-end gap-[10px]">
          <NavigationWithSwitchIcon
            title=""
            buttons={[
              {
                text: `Call Reviews Type`,
                dropdown: true,
                id: 1,
                dark: true,
                light: false,
                list: [
                  { title: "All", Icon: "" },
                  { title: "Allocated", Icon: "" },
                  { title: "Feedback Requested", Icon: "" },
                ],
                // click: handleDaysSpan,
              },
            ]}
          />
        </div>
        <TreeMap getPitchData={getPitchData} data1={pitchData} />
        <div className="w-[100%] flex justify-between flex-wrap gap-2">
          <div className="w-[48%] flex flex-col gap-6">
            <BarChartVertical
              title="Sales Rep's Patience/Silence"
              template={SalesRepPatienceSilence}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <BarChartVertical
              title="Longest Customer Story"
              template={LongestCustomerStory}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <GroupBarChartVertical
              title="Number of Interruptions"
              template={NoOfInterruptions}
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
              title="Number of Switches"
              template={NoOfSwitches}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
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
          <div className="w-[48%] flex flex-col gap-6">
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
              title="Longest Monologue"
              template={LongestMonologue}
              data={avgCallScore}
              options={[
                { key: "", label: "Select Team Members" },
                { key: "", label: "John C." },
                { key: "", label: "Barbara Oaklay" },
                { key: "", label: "Diana J." },
                { key: "", label: "Jacob Wilson" },
              ]}
            />
            <TalkRatio />
            <BarChartVertical
              title="Number of Topics"
              template={NoOfTopics}
              data={noOfTopics}
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
      </div>
    );
  } else {
    return (
      <div className="">
        <TreeMap getPitchData={getPitchData} data1={pitchData} />
        <div className="w-[100%] flex justify-between flex-wrap gap-2">
          <div className="w-[48%] flex flex-col gap-6">
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
          <div className="w-[48%] flex flex-col gap-6">
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
    );
  }
};

export default CommunicationInteraction;
