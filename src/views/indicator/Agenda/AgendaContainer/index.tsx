import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

type Props = {};

const AgendaContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "The purpose of our call is",
      alternative_values: [
        {
          id: 1,
          value: "I’d like to discuss",
        },
        {
          id: 2,
          value: "Our aim for this call is to",
        },
        {
          id: 3,
          value: "We’re here to talk about",
        },
      ],
      score: "5",
    },
    {
      id: 2,
      indicator_value: "Our agenda will cover",
      alternative_values: [
        {
          id: 1,
          value: "Our discussion will include",
        },
        {
          id: 2,
          value: "I’ll be highlighting",
        },
        {
          id: 3,
          value: "The key points we'll cover include...",
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

export default AgendaContainer;
