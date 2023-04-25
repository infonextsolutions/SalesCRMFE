import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useState } from "react";

const TextBox = () => {
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q1. What are you looking in a product?
      </p>
      <textarea
        name=""
        id=""
        className="w-[100%] h-[90px] outline-none mt-[16px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[10px] px-[13px]"
        placeholder="Write Short Answer"
      ></textarea>
    </>
  );
};

const Dropdown = () => {
  const list: any = [{ value: 1, selected: true, title: "Choose Type" }];

  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q2. What is your budget range?
      </p>
      <div className="w-[100%] px-[10px] border-[1px] mt-[10px]  rounded-xl border-[#ccc]">
        <select
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[10px] text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {list.map((item: any, i: any) => {
            return (
              <option value={item.value} key={i} selected={item.selected}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

const Mcq = () => {
  const list: any = [
    { title: "option 1" },
    { title: "option 2" },
    { title: "option3" },
    { title: "other" },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q3. Choose among the following?
      </p>
      <div className="w-[100%] flex flex-col">
        {list.map((item: any, i: any) => {
          return (
            <div key={i} className="flex items-center mt-[13px]">
              <div
                className="w-[16px] flex items-center justify-center overflow-hidden p-[2px] h-[16px] rounded-[50%] bg-[#F8F8F8] border-[#e8e9eb] border-[2px] cursor-pointer    "
                onClick={() => {
                  setSelected(i);
                }}
              >
                {selected === i && (
                  <div className="w-[8px] h-[8px] shrink-0 bg-[#304ffd] rounded-[50%]"></div>
                )}
              </div>
              <p className="text-[14px] text-[#000] leading-[14px] font-medium ml-[15px] mt-[-3px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
const Questionnaire = () => {
  const questions = [0, 1, 2, 3, 4];

  return (
    <div className="w-[100%] min-h-[50vh]">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-medium text-[#3F434A]">Demo Call</h1>
        <button className=" ml-auto items-center flex bg-renal-blue pl-[11px] rounded-xl pr-[11px] py-[8px]">
          <Image
            src={getBasicIcon("edit")}
            className={`svg-white mt-[1px]`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
          <p className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">
            Edit
          </p>
        </button>
      </div>
      {questions.map((item: any, i: any) => {
        return (
          <div className="w-[100%] my-[20px]" key={i}>
            {item === 0 && <TextBox />}
            {item === 1 && <Dropdown />}
            {item === 2 && <Mcq />}
          </div>
        );
      })}
    </div>
  );
};

export default Questionnaire;
