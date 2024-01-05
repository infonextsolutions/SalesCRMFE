import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const UsesContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Typical use case involve",
      alternative_values: [
        {
          id: 1,
          value: "For example, Health Industry Client have expericed",
        },
        {
          id: 2,
          value: "Our soulution can help in situations like",
        },
        {
          id: 3,
          value: "Our solution is versatile in scenarios like",
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

export default UsesContainer;
