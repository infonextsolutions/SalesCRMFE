import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

const GreetingsContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      score: "1",
    },
    {
      id: 2,
      indicator_value: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      score: "1",
    },
    {
      id: 3,
      indicator_value: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      score: "1",
    },
    {
      id: 4,
      indicator_value: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
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

export default GreetingsContainer;
