import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";

const Attachements = () => {
  return (
    <>
      <div className="bg-[#ffffff] my-[30px]">
        <div className="flex">
          <h2 className="text-[#3F434A] text-2xl font-medium">Attachments</h2>
          <button className="ml-[400px] absolute right-[20px]  flex bg-renal-blue pl-[18px] rounded-xl pr-[18px] py-[10px]">
            <Image
              src="/Images/Logo/Upload.svg"
              className={`w-[18px] svg-white`}
              alt=""
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
            <p className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">
              Upload
            </p>
          </button>
        </div>
        <div className="py-5 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[8px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-1.5">
            <div className="text-[14px] pl-[10px] py-[8px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <Image
                src="/Images/Logo/PDF 1.svg"
                alt=""
                className="w-[55px] px-[10px] "
                // fill={true}
                style={
                  {
                    // objectFit:"contain"
                  }
                }
                width={55}
                height={40}
              />
              <div className="w-[170px] ml-2 mt-3">
                <p className="text-[#3F434A] ">Wireframe UI kit.pdf</p>
                <p className="text-xs mb-2">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src="/Images/Logo/Download.svg"
                  className={`w-[22px] ml-[135px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src="/Images/Logo/Delete.svg"
                className={`w-[22px] mr-[7px]`}
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
        <div className="text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[8px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-1.5">
            <div className="text-[14px] pl-[10px] py-[8px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <Image
                src="/Images/Logo/ZIP 1.svg"
                alt=""
                className="w-[55px] px-[10px] "
                // fill={true}
                style={
                  {
                    // objectFit:"contain"
                  }
                }
                width={55}
                height={40}
              />
              <div className="w-[170px] ml-2 mt-3">
                <p className="text-[#3F434A]">Wireframe UI kit.zip</p>
                <p className="text-xs mb-2">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src="/Images/Logo/Download.svg"
                  className={`w-[22px] ml-[135px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src="/Images/Logo/Delete.svg"
                className={`w-[22px] mr-[7px]`}
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
        <div className="py-5 text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[8px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-1.5">
            <div className="text-[14px] pl-[10px] py-[8px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <Image
                src="/Images/Logo/DOC 1.svg"
                alt=""
                className="w-[55px] px-[10px] "
                // fill={true}
                style={
                  {
                    // objectFit:"contain"
                  }
                }
                width={55}
                height={40}
              />
              <div className="w-[170px] ml-2 mt-3">
                <p className="text-[#3F434A]">Wireframe UI kit.doc</p>
                <p className="text-xs mb-2">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src="/Images/Logo/Download.svg"
                  className={`w-[22px] ml-[135px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src="/Images/Logo/Delete.svg"
                className={`w-[22px] mr-[7px]`}
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
        <div className="text-gray text-small">
          <p className="text-[#3F434A] font-semibold">
            Demo Product A documents for customer
          </p>
          <div className="mt-[8px] ml-auto mr-[220px] mx-[10px] flex flex-col gap-y-1.5">
            <div className="text-[14px] pl-[10px] py-[8px] text-[#8A9099] leading-[21px] flex justify-between bg-[#F5F5F5] rounded-xl">
              <Image
                src="/Images/Logo/JPG 2.svg"
                alt=""
                className="w-[55px] px-[10px] "
                // fill={true}
                style={
                  {
                    // objectFit:"contain"
                  }
                }
                width={55}
                height={40}
              />
              <div className="w-[170px] mt-3 ml-2">
                <p className="text-[#3F434A]">Wireframe UI kit.jpg</p>
                <p className="text-xs mb-3">5.6 MB</p>
              </div>
              <div className="w-[190px] flex items-center">
                <Image
                  src="/Images/Logo/Download.svg"
                  className={`w-[22px] ml-[135px]`}
                  alt="Download"
                  width={17}
                  height={17}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Image
                src="/Images/Logo/Delete.svg"
                className={`w-[22px] mr-[7px]`}
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
