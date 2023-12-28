import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const TitleAndRolesContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "I am the Sales ",
      alternative_values: [
        {
          id: 1,
          value: "I am the Account Manager",
        },
        {
          id: 2,
          value: "I am the Sales Manager",
        },
        {
          id: 3,
          value: "I am the Sales Rep",
        },
      ],
      score: "1",
    },
    {
      id: 2,
      indicator_value: "I specialize in",
      alternative_values: [
        {
          id: 1,
          value: "My area of expertise is",
        },
        {
          id: 2,
          value: "I'm proficient in the area of",
        },
        {
          id: 3,
          value: "I have extensive experience in",
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

export default TitleAndRolesContainer;
