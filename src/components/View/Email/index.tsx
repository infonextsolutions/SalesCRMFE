import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
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
  return (
    <div>
      <Cross cancel={cancel} />
      <div className="w-100 py-5 ml-6 flex-col items-center justify-left">
        <h2 className="text-[24px] tracking-wide font-medium">New Email</h2>
        <div className="py-3"></div>
        <p className="text-[14px] text-[#8A9099] tracking-tight font-small">Company Name*</p>
        <div className="py-1"></div>
        <input
          type="text"
          id="username"
          className="border-[1px] text-base px-4 rounded-xl bg-gray-200 text-black outline-none focus:ring-0 focus:border-gray-400"
        />
        <div className="py-3"></div>
        <p className="text-[14px] text-[#8a9099] tracking-tight font-small">Client POC*</p>
        <div className="py-1"></div>
        <input
          type="text"
          id="username"
          className="border-[1px] text-base px-4 rounded-xl bg-gray-200 text-black outline-none focus:ring-0 focus:border-gray-400"
        />
        <div className="py-4"></div>
        <div
          className="w-[95%] h-[40px] block bg-white border align-items-center rounded-l py-2 px-4 focus:outline-none">
          <div className="flex  items-start">
            <p className="text-[14px] text-black-200">To:</p>
            <h3 className="text-[14px] px-[85%] text-gray-400">Cc</h3>
          </div>
        </div>
        <form className="bg-gray-100 w-[95%] justify-between rounded-l items-center border-[1px] py-1 flex">
          <div className="ql-toolbar flex flex-wrap  space-x-2 sm:pr-4 items-center divide-gray-200 sm:divide-x dark:divide-gray-600 ql-snow">
            <span className="ql-formats">
              <button type="button" className="Font">
                <Image
                  src="/Images/Logo/Font.svg"
                  className={`w-[14px] ml-3 `}
                  alt="Bold"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Bold">
                <Image
                  src="/Images/Logo/Bold.svg"
                  className={`w-[14px] ml-4 `}
                  alt="Bold"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Italic">
                <Image
                  src="/Images/Logo/Italic.svg"
                  className={`w-[14px] ml-2 `}
                  alt="Italic"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Underline">
                <Image
                  src="/Images/Logo/Underline.svg"
                  className={`w-[14px] ml-3 `}
                  alt="Italic"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
            </span>
            <span className="ql-formats">
              <button type="button" className="Link">
                <Image
                  src="/Images/Logo/Link.svg"
                  className={`w-[15px] ml-3 `}
                  alt="Link"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Smile">
                <Image
                  src="/Images/Logo/Smile.svg"
                  className={`w-[15px] ml-2 `}
                  alt="Smile"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Image">
                <Image
                  src="/Images/Logo/Image.svg"
                  className={`w-[15px] ml-2 `}
                  alt="Image"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
            </span>
            <span className="ql-formats">
              <button type="button" className="List">
                <Image
                  src="/Images/Logo/List.svg"
                  className={`w-[16px] ml-4 `}
                  alt="List"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Numbered List">
                <Image
                  src="/Images/Logo/Numbered List.svg"
                  className={`w-[16px] ml-3 `}
                  alt="Numbered List"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Align-Left">
                <Image
                  src="/Images/Logo/Align-Left.svg"
                  className={`w-[16px] ml-3 `}
                  alt="Align-Left"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Align-Center">
                <Image
                  src="/Images/Logo/Align-Left.svg"
                  className={`w-[16px] ml-3 `}
                  alt="Align-Center"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button type="button" className="Align-Right">
                <Image
                  src="/Images/Logo/Align-Left.svg"
                  className={`w-[16px] ml-3 `}
                  alt="Align-Right"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
            </span>
          </div>
        </form>
        <div className="flex-col flex items-center relative justify-center w-[95%]">
          <textarea className="w-full h-[140px] px-3 py-2 text-gray-700 border rounded-l focus:outline-none" placeholder="Type something"></textarea>
          <button className="absolute ml-2 mb-2 bottom-0 left-0 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg focus:bg-blue-600">Send</button>
            </div>
          </div>
        </div>
  );
};

export default EmailPage;
