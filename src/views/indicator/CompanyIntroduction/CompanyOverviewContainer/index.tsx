import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React, { useState } from "react";
import IndicatorContainer from "../../IndicatorContainer";
import Backdrop from "@/components/View/Backdrop/Center";
import AddCategory from "@/components/Indicator/basic/addCategory";
import Score from "@/components/Indicator/basic/Score";

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

  const [form, setForm] = useState(false);
  const [score, setScore] = useState(false);
  const [bool, setBool] = useState(true);

  const cancelForms = () => {
    setBool(false);
    setTimeout(() => {
      setForm(false);
      setBool(true);
    }, 500);
  };
  const cancelScores = () => {
    setBool(false);
    setTimeout(() => {
      setScore(false);
      setBool(true);
    }, 500);
  };

  return (
    <div>
      <NavigationWithEditAndDeleteButtons
        title={title}
        buttons={[
          {
            text: "Score",
            dropdown: true,
            id: 0,
            onClick1: async () => {
              setScore(true);
            },
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
            onClick1: async () => {
              setForm(true);
            },
            light: false,
            dark: false,
            list: [],
          },
        ]}
      />
      <IndicatorContainer title={title} data={dummydata} />
      {form && (
        <Backdrop bool={bool}>
          <AddCategory onChange={() => {}} cancel={cancelForms} />
        </Backdrop>
      )}
      {score && (
        <Backdrop bool={bool}>
          <Score onChange={() => {}} cancel={cancelScores} />
        </Backdrop>
      )}
    </div>
  );
};

export default CompanyOverviewContainer;
