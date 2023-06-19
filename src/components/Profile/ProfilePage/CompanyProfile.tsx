import React from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import Image from "next/image";

const CompanyProfile = () => {
  return (
    <div>
      <div className="flex">
        {/* <div className="flex items-center w-[100%] border-gray-300 border-b-[1px] pb-[30px] pt-[20px]">
          <Image
            className="inline-block w-[55px] rounded-full ring-2 ring-white"
            src={getRoundedAvatar(2, 40)}
            alt=""
            width={60}
            height={60}
            style={{
              objectFit: "contain",
            }}
          />
          <div className="ml-3 text-bold">
            <h2 className="text-base text-[12px] font-semibold whitespace-nowrap leading-7 tracking-wider text-black">
              ABC Corp.
            </h2>
            <a
              href="#0"
              className="block ml-2 text-sm text-[12px] item-center text-gray-500 hover:text-indigo-500"
            >
              Noida,UP
            </a>
          </div>
          <div className="h-[95%] ml-12 ">
            <Image
              src={getBasicIcon("Edit")}
              className={`w-[20px] align-center svg-grey svg-not-selected mt-[5px]`}
              alt="Edit"
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div> */}
        <div className="flex items-center w-[100%] border-gray-300 justify-between border-b-[1px] pb-[30px] pt-[20px] ">
          <Image
            className="inline-block w-[50px] rounded-full ring-2 ring-white"
            src={getRoundedAvatar(2, 40)}
            alt=""
            width={60}
            height={60}
            style={{
              objectFit: "contain",
            }}
          />
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-[24px] whitespace-nowrap leading-7 tracking-wide text-[#000] capitalize -900 font-medium">
              ABC Corp.
            </h2>
            <p className="block  py-2 text-xs leading-[10px ] font-medium ml-[-6px] text-[14px] text-[#8A9099] -600 hover:text-indigo-500">
              Noida,UP
            </p>
          </div>
          <div className="w-[40px] h-[100%] flex items-center justify-center">
            <Image
              src={getBasicIcon("Edit")}
              className={`w-[20px] svg-grey svg-not-selected mt-[-24px]`}
              alt="Edit"
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div> */}
      <div className="py-1"></div>
      <h3 className="text-sm font-medium text-black mt-5 ml-2">COMPANY INFO</h3>
      <ul className="mt-2 mb-10 ml-auto">
        <li className="px-2 mt-4">
          <strong className="font-medium text-sm text-gray-500 mr-2">
            COMPANY NAME
          </strong>
          <p className="block text-black ">ABC Corp</p>
        </li>
        <li className="px-2 mt-4">
          <strong className="font-medium text-sm text-gray-500 ml-auto">
            {" "}
            COMPANY ADDRESS
          </strong>
          <p className="block text-black">12th Block tower A,</p>
          <p className="block text-black">Noida,UP-11XXXX</p>
        </li>
        <li className="px-2 mt-4">
          <strong className="font-medium text-sm text-gray-500 mr-1">
            WEBSITE LINK
          </strong>
          <span className="block text-black">
            <a href="https://www.example.com">www.example.com</a>
          </span>
        </li>
        <li className="px-2 mt-4">
          <strong className="font-medium text-sm text-gray-500 mr-1">
            INDUSTRY TYPE
          </strong>
          <a href="industry:" className="block text-black">
            IT Solutions
          </a>
        </li>
        <li className="px-2 mt-4">
          <strong className="font-medium text-sm text-gray-500 mr-1">
            SOCIAL MEDIA
          </strong>
          <div className="flex mt-[10px]">
            <Image
              src={getBasicIcon("Twitter")}
              className={`w-[20px] mr-2 svg-grey fill-gray`}
              alt=""
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
            <Image
              src="/Images/Icons/Basic/Linked.svg"
              className={`w-[20px] svg-grey`}
              alt=""
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </li>
      </ul>
      <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
      <div className="py-1"></div>
      <div className="flex items-center justify-between mt-2 ml-2">
        <h3 className="text-sm text-[#000] font-medium">ALL CONTACTS</h3>
        <Image
              src={getBasicIcon("Plus")}
              className={`w-[20px] mr-2 svg-grey fill-gray`}
              alt=""
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
      </div>
      <div className="py-3"></div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li>
          <div className="flex items-center gap-x-2 mr-4">
            <Image
              className="h-12 w-12 rounded-full ml-auto"
              src={getRoundedAvatar(2, 30)}
              alt=""
              width={54}
              height={48}
              style={{
                objectFit: "contain",
              }}
            />
            <div>
              <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                LeslieAlexander
              </h4>
              <a
                href="#0"
                className="block text-sm font-small text-gray-500 hover:text-indigo-500"
              >
                Co-Founder
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="py-2"></div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li>
          <div className="flex items-center gap-x-2 mr-4">
            <Image
              className="h-12 w-12 rounded-full ml-auto"
              src={getRoundedAvatar(5, 30)}
              alt=""
              width={54}
              height={48}
              style={{
                objectFit: "contain",
              }}
            />
            <div>
              <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Reginacooper
              </h4>
              <a
                href="#0"
                className="block text-sm font-small text-gray-500 hover:text-indigo-500"
              >
                Project Lead
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="py-2"></div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li>
          <div className="flex items-center gap-x-2 mr-4">
            <Image
              className="h-12 w-12 rounded-full "
              src={getRoundedAvatar(6, 30)}
              alt=""
              width={54}
              height={48}
              style={{
                objectFit: "contain",
              }}
            />
            <div>
              <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Judith
              </h4>
              <a
                href="#0"
                className="block text-sm font-small text-gray-500 hover:text-indigo-500"
              >
                HR
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="mx-auto w-[100%] border-b border-gray-300 my-6"></div>
      <h3 className="text-black text-[17px] tracking-wide mt-[19px] font-semibold ">
        Company Description
      </h3>
      <p className="text-base text-gray-500 font-medium mt-[10px] text-sm text-[12px]">
        ABC Corp. is a IT company serving industry such as Finance and Edtech.
        Company has 10+ existing clients and also works with individual people.
      </p>
    </div>
  );
};

export default CompanyProfile;
