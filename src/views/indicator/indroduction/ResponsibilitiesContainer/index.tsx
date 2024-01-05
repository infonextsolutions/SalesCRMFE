import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const ResponsibilitiesContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "My role involves",
      alternative_values: [
        {
          id: 1,
          value: "I oversee",
        },
        {
          id: 2,
          value: "I am responsible for",
        },
        {
          id: 3,
          value: "My job is to",
        },
      ],
      score: "1",
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

export default ResponsibilitiesContainer;
