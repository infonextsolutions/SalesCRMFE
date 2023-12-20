import Navigation from "@/components/app/Navigation";
import React from "react";

type Props = {};

const Greetings = (props: Props) => {
  const dummydata = [
    {
      indicator_value: "Hi",
      alternative_values: ["Hey", "Hello", "Hey There "],
      score: "1",
    },
    {
      indicator_value: "Hi",
      alternative_values: ["Hey", "Hello", "Hey There "],
      score: "1",
    },
    {
      indicator_value: "Hi",
      alternative_values: ["Hey", "Hello", "Hey There "],
      score: "1",
    },
    {
      indicator_value: "Hi",
      alternative_values: ["Hey", "Hello", "Hey There "],
      score: "1",
    },
  ];

  return (
    <div>
      <Navigation
        title={"Greetings"}
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

      <div>
        <div className="flex justify-between w-[80%]">
          <h4 className="text-gray-600 font-semibold">Indicator Value</h4>
          <h4 className="text-gray-600 font-semibold">Alternative Values</h4>
          <h4 className="text-gray-600 font-semibold">Score</h4>
        </div>
        <hr className="mt-2" />

        {dummydata.map((data) => (
          <div>
            <div className="h-[auto] flex justify-between w-[80%] py-4">
              <h4 className="text-gray-600 font-semibold">
                {data.indicator_value}
              </h4>
              <div className="flex flex-col gap-3">
                {data.alternative_values.map((item) => (
                  <h4 className="text-gray-600 font-semibold">{item}</h4>
                ))}
              </div>
              <h4 className="text-gray-600 font-semibold">{data.score}</h4>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Greetings;
