import ButtonDropDown from "@/utils/Button/Button";
import React, { useState } from "react";
import Table from "../table/basic";
import Backdrop from "@/components/View/Backdrop/Center";
import Addvalue from "./addValue";
import AddCategory from "./addCategory";

const indicator_type = [
  {
    title: "Opening",
    categories: [
      "Greeting",
      "Introduction",
      "Rapport building",
      "Agenda Setting",
    ],
  },
  {
    title: "Lead Qualification",
    categories: [
      "Prospect Information",
      "Budget Assessment",
      "Authority",
      "Need for Product/ Service",
    ],
  },
  {
    title: "Need Discovery",
    categories: [
      "Pain Points",
      "Probing Questions",
      "Current Solutions",
      "Desired Outcomes",
    ],
  },
  {
    title: "Key Value Proposition",
    categories: [
      "Product Service Benifits",
      "Tailoring to Needs",
      "Success Stories",
      "Diffrentiation",
    ],
  },
  {
    title: "Product Knowledge",
    categories: ["Features", "Use Cases", "Compatibility and Integration"],
  },
  {
    title: "Price Discussion",
    categories: ["Pricing Options", "Value Justification", "ROI"],
  },
  {
    title: "Closing",
    categories: [
      "Trial Closes",
      "Overcoming Objections",
      "Call to Actions",
      "Follow-up Plan",
    ],
  },
];

const IndicatorContainer = () => {
  const [indicatorType, setIndicatorType] = useState(0);
  const [indicatorCategory, setIndicatorCategory] = useState(0);
  const indicator_category = [
    "-",
    ...indicator_type[indicatorType].categories,
  ].map((item) => {
    return { title: item };
  });
  console.log(indicator_category);
  const [addValue, setAddvalue] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [bool, setBool] = useState(true);
  return (
    <>
      {addValue && (
        <Backdrop bool={bool}>
          <Addvalue
            cancel={() => {
              setBool(false);
              setTimeout(() => {
                setAddvalue(false);
                setBool(true);
              }, 500);
            }}
          />
        </Backdrop>
      )}
      {addCategory && (
        <Backdrop bool={bool}>
          <AddCategory
            cancel={() => {
              setBool(false);
              setTimeout(() => {
                setAddCategory(false);
                setBool(true);
              }, 500);
            }}
          />
        </Backdrop>
      )}
      <div className="w-[100%] tracking-wide min-h-[120vh] bg-[#fff] rounded-2xl py-[20px] relative">
        <div className="w-[260px]">
          <p className="text-[#8A9099] ml-[35px] mb-[6px] font-medium">
            Indicator Type
          </p>
          <ButtonDropDown
            light={true}
            text={indicator_type[indicatorType].title}
            click={(e1: any, e2: any) => {
              console.log(e1, e2);
              setIndicatorCategory(0);
              setIndicatorType(e2);
            }}
            height={39}
            border={true}
            id={1}
            dropdown={true}
            list={indicator_type}
            dark={false}
          />
        </div>
        <div className="w-[260px] mt-[18px] relative">
          <p className="text-[#8A9099] tracking-wide ml-[35px] mb-[6px] font-medium">
            Indicator Category
          </p>
          <ButtonDropDown
            light={true}
            dark={false}
            height={39}
            click={(e1: any, e2: any) => {
              console.log(e1, e2);
              setIndicatorCategory(e2);
            }}
            text={indicator_category[indicatorCategory].title}
            border={true}
            id={1}
            dropdown={true}
            list={indicator_category}
          />
        </div>
        <div className="w-[180px] absolute top-[30px] right-[80px]">
          <ButtonDropDown
            light={false}
            dark={false}
            height={43}
            width={200}
            text={"Add Indicator"}
            click={(e1: any, e2: any) => {
              console.log(e1, e2);
              if (e2 === 0) {
                setAddCategory(true);
              } else if (e2 === 1) {
                setAddvalue(true);
              }
            }}
            border={true}
            id={1}
            dropdown={true}
            list={[
              { title: "Add Indicator Category" },
              { title: "Add Indicator Value" },
            ]}
          />
        </div>
        <Table />
      </div>
    </>
  );
};

export default IndicatorContainer;
