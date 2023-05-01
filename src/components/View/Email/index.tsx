import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const Cross = ({ cancel }: any) => {
  return (
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
  );
};

const EmailPage = ({ cancel }: any) => {
  return (
    <div>
      <Cross cancel={cancel} />
      <div className="w-100 py-5 ml-6 flex-col items-center justify-left">
        <h2 className="text-[24px] tracking-wide font-medium">New Email</h2>
        <div className="py-3"></div>
        <p className="text-[14px] text-[#8A9099] tracking-tight font-small">
          Company Name*
        </p>
        <div className="py-1"></div>
        <input
          type="text"
          id="username"
          className="border-[1px] text-base px-4 rounded-xl bg-gray-200 text-black outline-none focus:ring-0 focus:border-gray-400"
        />
        <div className="py-3"></div>
        <p className="text-[14px] text-[#8a9099] tracking-tight font-small">
          Client POC*
        </p>
        <div className="py-1"></div>
        <input
          type="text"
          id="username"
          className="border-[1px] text-base px-4 rounded-xl bg-gray-200 text-black outline-none focus:ring-0 focus:border-gray-400"
        />
        <div className="py-4"></div>
        <div className="w-[95%] h-[40px] block bg-white border align-items-center rounded-l py-2 px-4 focus:outline-none">
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
          <textarea
            className="w-full h-[140px] px-3 py-2 text-gray-700 border rounded-l focus:outline-none"
            placeholder="Type something"
          ></textarea>
          <button className="absolute ml-2 mb-2 bottom-0 left-0 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg focus:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
