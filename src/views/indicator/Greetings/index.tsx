import Navigation from "@/components/app/Navigation";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

type Props = {};

const Greetings = (props: Props) => {
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
          <div key={data.id}>
            <div className=" w-[99%] flex justify-between">
              <div className=" h-[auto] flex justify-between w-[80%] py-4">
                <h4 className="text-gray-600 font-semibold">
                  {data.indicator_value}
                </h4>
                <div className="flex flex-col gap-3">
                  {data.alternative_values.map((item) => (
                    <h4 key={item.id} className="text-gray-600 font-semibold">
                      {item.value}
                    </h4>
                  ))}
                </div>
                <h4 className="text-gray-600 font-semibold">{data.score}</h4>
              </div>
              <div className="flex gap-4 w-[10%] h-[62px]">
                <Image
                  className="w-[20%] cursor-pointer "
                  src={getBasicIcon("Edit")}
                  alt=""
                  // fill={true}
                  width={30}
                  height={30}
                  style={{
                    objectFit: "contain",
                  }}
                />{" "}
                <Image
                  className="w-[20%] cursor-pointer  "
                  src={getBasicIcon("Delete")}
                  alt=""
                  // fill={true}
                  width={30}
                  height={30}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Greetings;
