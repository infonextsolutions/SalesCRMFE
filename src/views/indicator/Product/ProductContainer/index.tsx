import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const ProductContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Let me walk you through",
      alternative_values: [
        {
          id: 1,
          value: "I’d like to show you how our product works",
        },
        {
          id: 2,
          value: "Here’s a quick overview ",
        },
        {
          id: 3,
          value:
            "I'd love to give you a walkthrough of our product's functionality. ",
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

export default ProductContainer;
