import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";

const Attachements = () => {
  return (
    <>
      <div className="bg-[#ffffff] my-[30px]">
        <div className="flex">
      <h2 className="text-[#3F434A] text-2xl font-medium">Attachments</h2>
      <button className="ml-[380px] flex bg-renal-blue pl-[6px] rounded-xl pr-[6px] p-[8px]">
      <Image
        src={getBasicIcon("upload")}
        className={`w-[18px] svg-white`}
        alt=""
        width={20}
        height={20}
        style={{
          objectFit: "contain",
        }}
      />
      <p className="whitespace-nowrap font-large  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">Upload</p>
      </button>
      </div>
        <div className="py-5 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[10px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-2.5">
            <div className="text-[14px] pl-[10px] py-[20px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <div className="w-[140px]">
                <p className="text-[#3F434A]">Wireframe UI kit.pdf</p>
                <p className="text-xs">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src={getBasicIcon("download")}
                  className={`w-[22px] ml-[155px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src={getBasicIcon("delete")}
                className={`w-[22px] mr-[20px]`}
                alt="delete"
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="text-[#8A9099] ml-2">23 January 2023,3:00PM</p>
          </div>
        </div>
        <div className="py-1 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[10px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-2.5">
            <div className="text-[14px] pl-[10px] py-[20px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <div className="w-[140px]">
                <p className="text-[#3F434A]">Wireframe UI kit.zip</p>
                <p className="text-xs">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src={getBasicIcon("download")}
                  className={`w-[22px] ml-[155px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src={getBasicIcon("delete")}
                className={`w-[22px] mr-[20px]`}
                alt="delete"
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="text-[#8A9099] ml-2">23 January 2023,3:00PM</p>
          </div>
        </div>
        <div className="py-2 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[10px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-2.5">
            <div className="text-[14px] pl-[10px] py-[20px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <div className="w-[140px]">
                <p className="text-[#3F434A]">Wireframe UI kit.doc</p>
                <p className="text-xs">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src={getBasicIcon("download")}
                  className={`w-[22px] ml-[155px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src={getBasicIcon("delete")}
                className={`w-[22px] mr-[20px]`}
                alt="delete"
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="text-[#8A9099] ml-2">23 January 2023,3:00PM</p>
          </div>
        </div>
        <div className="py-2 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[10px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-2.5">
            <div className="text-[14px] pl-[10px] py-[20px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <div className="w-[140px]">
                <p className="text-[#3F434A]">Wireframe UI kit.jpg</p>
                <p className="text-xs">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src={getBasicIcon("download")}
                  className={`w-[22px] ml-[155px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src={getBasicIcon("delete")}
                className={`w-[22px] mr-[20px]`}
                alt="delete"
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="text-[#8A9099] ml-2">23 January 2023,3:00PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attachements;
