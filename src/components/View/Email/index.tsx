import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import React from "react";

const AddText = ({ title, place }: any) => {
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
      />
    </div>
  );
};

const Senders = () => {
  return (
    <div className="ml-[10px] h-[24px] border-gray border-[1px] flex items-center px-[10px] rounded-lg bg-gray-100">
      <p className="text-text-norm text-[12px] font-medium">Shraddha P.</p>
      <Image
        className="w-[10px] h-[10px] ml-[30px]"
        src={getBasicIcon("Cross")}
        width={10}
        height={10}
        alt=""
      />
    </div>
  );
};

const SendersDetails = () => {
  return (
    <div className="w-[100%] px-[15px] h-[42px] items-center bg-[#fff] flex justify-between">
      <div className="flex items-center">
        <p className="text-[14px] tracking-wide font-medium text-[#3F434A]">
          To:
        </p>
        <Senders />
      </div>
    </div>
  );
};

const Icon = ({ src }: any) => {
  return (
    <Image
      src={src}
      className={` ml-4 `}
      alt="Bold"
      width={15}
      height={15}
      style={{
        objectFit: "contain",
      }}
    />
  );
};

const Toolbar = () => {
  return (
    <div className="ql-toolbar bg-gray-100 flex flex-wrap h-[40px] m space-x-2 sm:pr-4 items-center divide-gray-200  ql-snow">
      <div className="w-[38px] flex  pr-[10px] ">
        <Image
          src="/Images/Logo/Font.svg"
          className={` ml-3  svg-gray-2`}
          alt="Bold"
          width={15}
          height={15}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={getBasicIcon("Arrow Down 3")}
          width={20}
          className=" cursor-pointer"
          height={20}
          alt=""
        />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/Bold.svg" />
        <Icon src="/Images/Logo/Italic.svg" />
        <Icon src="/Images/Logo/Underline.svg" />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/Link.svg" />
        <Icon src="/Images/Logo/Smile.svg" />
        <Icon src="/Images/Logo/Image.svg" />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/List.svg" />
        <Icon src="/Images/Logo/Numbered List.svg" />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/Align-Left.svg" />
        <Icon src={getBasicIcon("text-center")} />
        <Icon src={getBasicIcon("text-right")} />
        <Icon src={getBasicIcon("text-along")} />
      </div>
    </div>
  );
};

const TextBox = () => {
  return (
    <textarea
      name=""
      id=""
      className="w-[100%] outline-none text-[14px] font-medium text-text-norm h-[110px] py-[10px] px-[18px] bg-[#fff]"
      placeholder="Type Something"
    ></textarea>
  );
};

const SendEmail = () => {
  return (
    <>
      <div className=" w-[100%] overflow-hidden rounded-xl items-center border-[1px] ">
        <SendersDetails />
        <Toolbar />
        <TextBox />
        <div className="w-[100%] flex mb-[15px] items-center">
          <SimpleButton
            theme={1}
            text={"Send"}
            left={20}
            height={40}
            width={90}
            right={0}
          />
          <Image
            className="svg-gray-2 ml-[10px]"
            src={getBasicIcon("Attachment")}
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const EmailPage = ({ cancel }: any) => {
  const submit = () => {
    const url = "https://testsalescrm.nextsolutions.in/api/send-email";
    const body = {
      email: "partharora557@gmail.com",
      subject: "email subject",
      content: "testt",
    };
    axios.post(url, body).then((e) => {
      console.log(e);
    });
  };

  React.useEffect(() => {});

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        New Email
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
      <AddText title="Company Name*" place={"ABC Corp."} />
      <AddText title="Client POC*" place={"Shraddha P."} />
      <SendEmail />
    </div>
  );
};

export default EmailPage;
