import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import Image from "next/image";
import React, { useState } from "react";

const DropItems = ({ title, list, top, change }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        marginTop: top,
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>
      <select
        id="countries"
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
      >
        {list.map((item: any, i: any) => {
          return (
            <option
              key={i}
              onClick={() => {
                change(item.value);
              }}
              value={item.value}
              selected={item.selected}
            >
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const AddText = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%]  mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className="w-[100%] h-[41px] rounded-[14px] bg-transparent border-[2px] border-[#e4e4e4] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};

const AddCategory = ({ cancel }: any) => {
  const [data, setData] = useState({
    indicator_type: "",
    indicator_category: "",
    indicator_value: "",
    alternatives: "",
    moreAlternatives: "",
    comparision_type: "",
    time_restriction: "",
    speaker: "",
  });

  return (
    <div className="w-[100%] h-[100%] py-[10px] pl-[30px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
        Add Indicator category
      </h1>
      <div
        className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[20px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
        onClick={() => {
          cancel();
        }}
      >
        <Image
          className="w-[15px] h-[15px]"
          src={getBasicIcon("Cross")}
          width={15}
          height={15}
          alt=""
        />
      </div>
      <div className="w-[100%] mb-[10px] justify-between flex ">
        <div className="w-[63%]">
          <DropItems
            title="Indicator Type"
            top={20}
            list={[
              {
                title: "Choose Indicator type",
                val: 0,
                selected: true,
              },
              {
                title: "Introduction",
                val: 0,
                selected: false,
              },
              {
                title: "Agenda Setting",
                val: 0,
                selected: false,
              },
              {
                title: "Company Introduction",
                val: 0,
                selected: false,
              },
              {
                title: "Product / Service",
                val: 0,
                selected: false,
              },
              {
                title: "Probing",
                val: 0,
                selected: false,
              },
              {
                title: "Next Steps Discussion",
                val: 0,
                selected: false,
              },
              {
                title: "Objection Handling",
                val: 0,
                selected: false,
              },
            ]}
            change={(e: any) => {
              setData({ ...data, indicator_type: e });
            }}
          />
          <DropItems
            title="Indicator Category"
            top={10}
            list={
              data?.indicator_type === "Introduction"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Greetings",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Name",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Title and Roles",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Responsibilities",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Agenda Setting"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Agenda Setup for the meeting",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Rapport Building",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Company Introduction"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Company Offerings / Services",
                      val: 0,
                      selected: false,
                    },
                    {
                      title:
                        "Company Stats - Revenue / Global Presence / Employee Strength",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Product / Service"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Product Demo/ Information",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Challenges and Pain Points",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Ongoing and upcoming projects or initiatives",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Current vendors/ service providers",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Current Platforms or tools being used",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Follow-up conversations/ next steps",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Follow-up Date and Time",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Proposed POC",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Decision Maker",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling"
                ? [
                    {
                      title: "Choose Category type",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Addressing Objections",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Providing Explanations and References",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Offering Solutions to overcome objections",
                      val: 0,
                      selected: false,
                    },
                  ]
                : []
            }
            change={(e: any) => {
              setData({ ...data, indicator_category: e });
            }}
          />
          <DropItems
            title="Indicator Value"
            top={10}
            list={
              data?.indicator_type === "Introduction" &&
              data?.indicator_category === "Greetings"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Hi",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Name"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "My Name is",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Title and Roles"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Sales",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Account",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Responsibilities"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Responsibiltiy",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Agenda Setting" &&
                  data?.indicator_category === "Agenda Setup for the meeting"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "The reason for my call today is",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Agenda Setting" &&
                  data?.indicator_category === "Rapport Building"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Have I caught you at a good time?",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Company Introduction" &&
                  data?.indicator_category === "Company Offerings / Services"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Solutions",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Company Introduction" &&
                  data?.indicator_category ===
                    "Company Stats - Revenue / Global Presence / Employee Strength"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Shared about achievements",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Product / Service" &&
                  data?.indicator_category === "Product Demo/ Information"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Let me show you",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Features",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category === "Challenges and Pain Points"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "What difficulties are you currently facing",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category === "Challenges and Pain Points"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "The reason for my call today is",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category === "Challenges and Pain Points"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "The reason for my call today is",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category === "Challenges and Pain Points"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "What difficulties are you currently facing",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Ongoing and upcoming projects or initiatives"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "What projects are you currently working on",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Current vendors/ service providers"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "your current service providers",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Current Platforms or tools being used"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "What platforms/tools are you using right now?",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category ===
                    "Follow-up conversations/ next steps"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Next discussion",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Follow-up Date and Time"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Reconnet",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Proposed POC"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "I will be your main point of contact",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Decision Maker"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "decision making",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category === "Addressing Objections"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "I understand your concern",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category ===
                    "Providing Explanations and References"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Let me explain how our solution",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category ===
                    "Offering Solutions to overcome objections"
                ? [
                    {
                      title: "Choose Indicator Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "to approach this problem",
                      val: 0,
                      selected: false,
                    },
                  ]
                : []
            }
            change={(e: any) => {
              setData({ ...data, indicator_value: e });
            }}
          />
        </div>
        <div className="w-[35%] flex items-end">
          {/* <DropItems
            title="More Alternatives"
            top={10}
            list={
              data?.indicator_type === "Introduction" &&
              data?.indicator_category === "Greetings" &&
              data?.indicator_value === "Hi"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Hello",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Hey",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Hello there",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Name" &&
                  data?.indicator_value === "My Name is"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "I am",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "This is",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Title and Roles" &&
                  data?.indicator_value === "Sales"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Sales Representative",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Sales Rep",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Sales Executive",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Title and Roles" &&
                  data?.indicator_value === "Account"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Account Executive",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Account Manager",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Introduction" &&
                  data?.indicator_category === "Responsibilities" &&
                  data?.indicator_value === "Hi"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Responsibiltiy",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Agenda Setting" &&
                  data?.indicator_category === "Agenda Setup for the meeting" &&
                  data?.indicator_value === "The reason for my call today is"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "I'm reaching out today to discuss",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I wanted to connect with you about",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "My purpose in calling is to talk about",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Agenda Setting" &&
                  data?.indicator_category === "Rapport Building" &&
                  data?.indicator_value === "Have I caught you at a good time?"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Is now a convenient moment for us to chat?",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Do you have a few moments to discuss?",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Is this a suitable time for us to talk?",
                      val: 0,
                      selected: false,
                    },
                    {
                      title:
                        "Would you prefer to speak now or should I schedule a better time?",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Company Introduction" &&
                  data?.indicator_category === "Company Offerings / Services" &&
                  data?.indicator_value === "Solutions"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "We specialize in providing",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Core offerings",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Specialized services",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Flagship solutions",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Range of services",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Tailored offerings for your need",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Company Introduction" &&
                  data?.indicator_category ===
                    "Company Stats - Revenue / Global Presence / Employee Strength" &&
                  data?.indicator_value === "Shared about achievements"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Achieved",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Global presence in",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Expanded operations to",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Strong presence in",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Product / Service" &&
                  data?.indicator_category === "Product Demo/ Information" &&
                  data?.indicator_value === "Let me show you"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "I'd like to demonstrate",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "how it works",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "walkthrough",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "a live demo",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Allow me to present",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Product / Service" &&
                  data?.indicator_category === "Product Demo/ Information" &&
                  data?.indicator_value === "Features"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Key Features",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Benefits",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Unique selling point",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "use case",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "what sets it apart",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category === "Challenges and Pain Points" &&
                  data?.indicator_value ===
                    "What difficulties are you currently facing"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "What pain points do you have ",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Can you tell me about your challenges",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Whats been causing issues",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Are there any pain points in your current setup",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Ongoing and upcoming projects or initiatives" &&
                  data?.indicator_value ===
                    "What projects are you currently working on"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Can you share your ongoing initiatives",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Any upcoming projects ",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Your current initiatives",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Current vendors/ service providers" &&
                  data?.indicator_value === "your current service providers"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Are you working with any vendors currently",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "your existing partners",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "What companies are you currenlty outsourcing to",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Probing" &&
                  data?.indicator_category ===
                    "Current Platforms or tools being used" &&
                  data?.indicator_value ===
                    "What platforms/tools are you using right now?"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Tools that you are currently utilizing",
                      val: 0,
                      selected: false,
                    },
                    {
                      title:
                        "tell me about the software you're using in your operations",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "what tech solutions do you currently employ",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category ===
                    "Follow-up conversations/ next steps" &&
                  data?.indicator_value === "Next discussion"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Moving forward",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Next Steps",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Continuing our conversation",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Follow-up Date and Time" &&
                  data?.indicator_value === "Reconnet"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "when can we reconnect",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "can we schedule our next talk",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "choosing a follow-up date",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "what time works for you",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Proposed POC" &&
                  data?.indicator_value ===
                    "I will be your main point of contact"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "you can reach out to me directly",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I'm your designated contact",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Feel free to contact me anytime",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I will be your go to person",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Next Steps Discussion" &&
                  data?.indicator_category === "Decision Maker" &&
                  data?.indicator_value === "decision making"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "Who will be the decision maker",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Who will be making the final call",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Let's involve the decision maker",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Is there someone else from your side",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category === "Addressing Objections" &&
                  data?.indicator_value === "I understand your concern"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "That's a valid point",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I hear what you are saying",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I appreciate your feedback",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "Let me address that",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "I'm here to clarify",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category ===
                    "Providing Explanations and References" &&
                  data?.indicator_value === "Let me explain how our solution"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "here's how others have tackeled this issue",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "our case study demonstrate",
                      val: 0,
                      selected: false,
                    },
                  ]
                : data?.indicator_type === "Objection Handling" &&
                  data?.indicator_category ===
                    "Offering Solutions to overcome objections" &&
                  data?.indicator_value === "to approach this problem"
                ? [
                    {
                      title: "Choose Alternative Value",
                      val: 0,
                      selected: true,
                    },
                    {
                      title: "One way to solve this problem",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "whatif we",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "how about considering",
                      val: 0,
                      selected: false,
                    },
                    {
                      title: "A potential solution might be",
                      val: 0,
                      selected: false,
                    },
                  ]
                : []
            }
            change={(e: any) => {
              setData({ ...data, moreAlternatives: e });
            }}
          /> */}
          <SimpleButton
            theme={1}
            click={() => {}}
            width={"100%"}
            text={"More Alternatives"}
            left={20}
            right={0}
          />
        </div>
      </div>
      <AddText
        title="Alternatives"
        place={""}
        change={(e: any) => {
          setData({ ...data, alternatives: e });
        }}
      />
      <div className="w-[63%]">
        <DropItems
          title="Comparision Type"
          top={10}
          list={[
            {
              title: "Choose Comparision Type",
              val: 0,
              selected: true,
            },
          ]}
          change={(e: any) => {
            setData({ ...data, comparision_type: e });
          }}
        />
        <DropItems
          title="Time Restriction"
          top={10}
          list={[
            {
              title: "Choose Time Restriction",
              val: 0,
              selected: true,
            },
          ]}
          change={(e: any) => {
            setData({ ...data, time_restriction: e });
          }}
        />
        <DropItems
          title="Speaker"
          top={10}
          list={[
            {
              title: "Choose Speaker",
              val: 0,
              selected: true,
            },
          ]}
          change={(e: any) => {
            setData({ ...data, speaker: e });
          }}
        />
      </div>
      <div className="w-[100%] flex justify-end">
        <SimpleButton
          theme={1}
          click={() => {}}
          text={"Save"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default AddCategory;
