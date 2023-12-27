import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const SchedulingContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Let’s schedule a follow-up to discuss further",
      alternative_values: [
        {
          id: 1,
          value: "When would be a convenient time to reconnect",
        },
        {
          id: 2,
          value: "I will send you a calender invite",
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

export default SchedulingContainer;
