import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const BenefitsContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "The main advantage include",
      alternative_values: [
        {
          id: 1,
          value: "With this product you can experience",
        },
        {
          id: 2,
          value: "Our clients have experieced",
        },
        {
          id: 3,
          value: "Our solution provides a unique set of features and benefits",
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

export default BenefitsContainer;
