import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

type Props = {};

const CompanyOverviewContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "We at ABC Corp specialize in",
      alternative_values: [
        {
          id: 1,
          value: "Our company provides",
        },
        {
          id: 2,
          value: "We are known for",
        },
        {
          id: 3,
          value: "We have a strong focus on",
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

export default CompanyOverviewContainer;
