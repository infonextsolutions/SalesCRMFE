import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const ProposingDemoContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Let’s schedule a demo",
      alternative_values: [
        {
          id: 1,
          value: "I’d like to schedule a demo",
        },
        {
          id: 2,
          value: "Let’s set up a time for a detailed walkthrough",
        },
        {
          id: 3,
          value: "Would you be available for a demo next week",
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

export default ProposingDemoContainer;
