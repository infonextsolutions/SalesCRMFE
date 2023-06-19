import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import SimpleButton from "@/utils/Button/SimpleButton";
import Backdrop from "@/components/View/Backdrop/Center";

const Attachements = () => {
  const [notes, setNotes] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const showNotes = () => {
    setNotes(true);
  };
  return (
    <>
      {notes && (
        <Backdrop bool={bool}>
          <div className="m-3">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Title
            </p>
            <input
              type="text"
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
            />
            <input className="mt-4" type="file"></input>
            <div className="absolute right-[160px] bottom-[40px] mt-[130px] flex ">
              <SimpleButton
                theme={2}
                text={"Cancel"}
                left={20}
                right={0}
                click={() => {
                  setNotes(false);
                }}
              />
            </div>
            <div className="absolute right-[40px] bottom-[40px] mt-[130px] flex ">
              <SimpleButton
                click={() => {
                  setNotes(false);
                }}
                theme={1}
                text={"Create"}
                left={20}
                right={0}
              />
            </div>
          </div>
        </Backdrop>
      )}
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
            <p
              onClick={showNotes}
              className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] "
            >
              Upload
            </p>
            {/* <label htmlFor="input" className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] " >Input</label> */}
            {/* <input name="input" type="file"></input> */}
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
                <a href="/check.pdf">
                  <Image
                    src="/Images/Logo/Download.svg"
                    className={`w-[22px] ml-[145px]`}
                    alt="Download"
                    width={17}
                    height={17}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </a>
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
        {/* <div className="text-gray text-small">
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
                  className={`w-[22px] ml-[145px]`}
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
                  className={`w-[22px] ml-[145px]`}
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
                  className={`w-[22px] ml-[145px]`}
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
        </div> */}
      </div>
    </>
  );
};

export default Attachements;
