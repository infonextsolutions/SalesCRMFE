import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const ProbingChallangeContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value:
        "What challenges are you facing with your current process",
      alternative_values: [
        {
          id: 1,
          value:
            "Could you describe the pain points or difficulties your team encounters?",
        },
        {
          id: 2,
          value: "What obstacles have encountered",
        },
        {
          id: 3,
          value: "Are there any pain points in your current process",
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

export default ProbingChallangeContainer;
