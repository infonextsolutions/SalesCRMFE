import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import Image from "next/image";
import React, { useState } from "react";

const DropItems = ({ title, list, top, setEventType }: any) => {
  return (
    <div
      className="w-[100%]"
      style={{
        marginTop: top,
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>

      <select
        className=" border border-gray-300 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
        onChange={(e) => setEventType(e.target.value)}
      >
        {list.map((item: any, i: any) => (
          <option
            className="text-[#3F434A] "
            key={i}
            value={item.value}
            selected={item.selected}
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

const AddText = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%] mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        className="w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        id=""
        onChange={(e: any) => {
          change(e.target.value);
        }}
      />
    </div>
  );
};

const TextBox = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%]">
      <p className="mt-4 w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <textarea
        name=""
        id=""
        placeholder={place}
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className="w-[100%] h-[170px] rounded-[14px] bg-[#fff] border-[2px] py-[10px] border-[#d9d9d9] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
      ></textarea>
    </div>
  );
};

const Messages = ({ cancel, companyId, companyName, id }: any) => {
  const [eventCompanyName, setEventCompanyName] = useState("");
  const [smsReceiver, setSmsReceiver] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [messageDescription, setMessageDescription] = useState("");

  const submit = () => {
    const finalPayload = {
      company_id: companyId,
      sms_receiver: smsReceiver,
      contact_number: contactNumber,
      message_description: messageDescription,
    };
  };

  const DisabledAddText = ({ title, place }: any) => {
    return (
      <div className="w-[100%] mb-[15px]">
        <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
          {title}
        </p>
        <input
          disabled
          className="cursor-not-allowed w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
          type="text"
          name=""
          placeholder={place}
          value={place}
          id=""
        />
      </div>
    );
  };
  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        New SMS
      </h1>
      <div
        className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[30px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
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
      {/* <AddText
        title="Company Name*"
        place={"Company Name"}
        change={(e: any) => {
          setEventCompanyName(e);
        }}
      /> */}
      <DisabledAddText title="Company Name" place={companyName} />
      <DropItems
        title={"Send SMS To"}
        top={20}
        setEventType={setSmsReceiver}
        list={[
          {
            title: "Choose Receiver",
            val: 0,
            selected: true,
          },
          {
            title: "Sam Wilson",
            val: 0,
            selected: false,
          },
        ]}
      />
      <DropItems
        title={"Contact Number"}
        top={20}
        setEventType={setContactNumber}
        list={[
          {
            title: "Choose Number",
            val: 0,
            selected: true,
          },
          {
            title: "+91-7345XXXX89",
            val: 0,
            selected: false,
          },
        ]}
      />
      <TextBox
        title="Dear,"
        place={"Type something"}
        change={(e: any) => {
          setMessageDescription(e);
        }}
      />
      {/* <p className="w-[100%] text-[#8A9099] text-[14px] mt-[4px] font-medium tracking-wide mb-[8px]">
        From 365Sales
      </p> */}
      <div className="w-[100%] flex justify-end mt-[20px]">
        <SimpleButton
          theme={1}
          text={"Send"}
          left={20}
          right={0}
          click={() => {
            submit();
          }}
        />
      </div>
    </div>
  );
};

export default Messages;
