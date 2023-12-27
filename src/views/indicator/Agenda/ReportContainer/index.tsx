import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

type Props = {};

const ReportContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Its great to connect with you",
      alternative_values: [
        {
          id: 1,
          value: "I'm thrilled to be speaking with you",
        },
        {
          id: 2,
          value: "I appreciate the opportunity to connect",
        },
        {
          id: 3,
          value: "I'm looking forward to our discussion",
        },
      ],
      score: "5",
    },
    {
      id: 2,
      indicator_value: "Before we start, how are you",
      alternative_values: [
        {
          id: 1,
          value: "Before we dive into business, I'd love to learn",
        },
        {
          id: 2,
          value: "Before we move forward, I'd like to find out",
        },
      ],
      score: "5",
    },
  ];

  return (
    <div>
      <NavigationWithEditAndDeleteButtons
        title={title}
        buttons={[
          {
            text: "Score",
            dropdown: true,
            id: 0,
            // click: viewButtinClick,
            light: false,
            dark: true,
            list: [],
            value: 0,
          },
          {
            text: "Add",
            dropdown: true,
            id: 1,
            icon: "Plus",
            // click: AddLead,
            light: false,
            dark: false,
            list: [],
          },
        ]}
      />

      <IndicatorContainer dummydata={dummydata} />
    </div>
  );
};

export default ReportContainer;
