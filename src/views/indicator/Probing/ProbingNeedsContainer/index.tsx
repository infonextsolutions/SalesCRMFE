import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const ProbingNeedsContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "What specific features are you looking for",
      alternative_values: [
        {
          id: 1,
          value: "What’s your current process",
        },
        {
          id: 2,
          value: "What are the main objectives you are looking for",
        },
        {
          id: 3,
          value:
            "Can you share any specific goals that you are aiming to achieve",
        },
      ],
      score: "10",
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

export default ProbingNeedsContainer;
