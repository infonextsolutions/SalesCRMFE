import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";
import IndicatorContainer from "../../IndicatorContainer";

type Props = {};

const CompanyValuePropositionContainer = ({ title }: any) => {
  const dummydata = [
    {
      id: 1,
      indicator_value: "Our solution helps companies like",
      alternative_values: [
        {
          id: 1,
          value: "Our company provides",
        },
        {
          id: 2,
          value: "Our solution has assisted companies resembling yours",
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

export default CompanyValuePropositionContainer;
