import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const SolutionOfferingContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "I understnad your concern",
      alternative_values: [
        {
          id: 1,
          value: "That’s a valid concern",
        },
        {
          id: 2,
          value: "Here’s how we solve this problem",
        },
        {
          id: 3,
          value:
            "Our solution is specifically designed to tackle challenges like these",
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

export default SolutionOfferingContainer;
