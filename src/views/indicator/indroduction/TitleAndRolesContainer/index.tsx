import NavigationWithEditAndDeleteButtons from "@/components/app/NavigationWithEditAndDelete";
import React, { useState } from "react";
import Backdrop from "@/components/View/Backdrop/Center";
import IndicatorContainer from "../../IndicatorContainer";
import AddCategory from "@/components/Indicator/basic/addCategory";
import Score from "@/components/Indicator/basic/Score";

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

export default TitleAndRolesContainer;
