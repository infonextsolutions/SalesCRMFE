import React from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import Image from "next/image";

const ClientPocProfile = () => {
  return (
    <div>
      <div className="w-[100%] bg-white min-h-[250vh] rounded-[18px] overflow-hidden">
     

        <div className="flex -space-x-2 overflow-hidden">
  
          <div className="flex items-center w-[100%] border-gray-300 border-b-[1px] pb-[30px] pt-[20px] ">
           <Image
              className="inline-block w-[50px] rounded-full ring-2 ring-white"
              src={getRoundedAvatar(2, 30)}
              alt=""
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            /> 
            <div className="ml-3 items-center text-medium">
              <h2 className="text-base text-[18px] font-normal whitespace-nowrap leading-7 tracking-wide text-black">
                Shraddha P
              </h2>
              
              <a
                href="#0"
                className="block ml-1 text-sm text-[12px] text-gray-500 hover:text-indigo-500"
              >
                Sales Manager
              </a>
            </div>
            <div className="h-[120%] ml-auto ">
              <Image
                src={getBasicIcon("Edit")}
                className={`w-[20px] svg-grey ml-auto svg-not-selected mt-[9px]`}
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
     
        <div className="py-2"></div>
        <h3 className="text-sm font-medium text-black mt-5 ml-4">INFO</h3>
        <ul className="mt-2 mb-10 ml-2">
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-gray-500 ">GENDER</strong>
            <a href="female" className="block text-black">
              Female
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-gray-500">E-mail</strong>
            <a href="mailto:" className="block text-black">
              aspiringfe@helloworld.com
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Location</strong>
            <span className="block text-black">Seoul, South Korea</span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Social Media</strong>
            <div className="flex">
              <Image
                src={getBasicIcon("Instagram")}
                className={`w-[20px] svg-grey mr-2`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                src={getBasicIcon("Twitter")}
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
        <h3 className="text-sm font-medium mt-5 text-black ml-4">COMPANY INFO</h3>
        <ul className="mt-2 mb-10 ml-2">
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Company Name</strong>
            <a href="name" className="block text-black">
              XYZ
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Company Address</strong>
            <a href="address:" className="block text-black">
              nothing
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Website Link</strong>
            <span className="block text-black">
              <a href="https://www.example.com">www.example.com</a>
            </span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Industry Type</strong>
            <a href="industry:" className="block text-black">
              IT Solutions
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Social Media</strong>
            <div className="flex">
              <Image
                src={getBasicIcon("Facebook")}
                className={`w-[20px] svg-grey mr-2`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                src={getBasicIcon("Twitter")}
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
        <div className="flex items-center justify-between mt-2 ml-4">
          <h3 className="text-sm text-black font-medium">OTHER CONTACTS</h3>
          <Image
            src={getBasicIcon("Plus")}
            className="w-5 h-5 ml-2 mr-2"
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
            <div className="flex items-center gap-x-3 mr-3">
               <Image
                className="h-12 w-10 rounded-full ml-3"
                src={getRoundedAvatar(3, 30)}
                alt=""
                width={44}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              /> 
              <div>
                <h4 className="text-base  text-[12px] leading-7 tracking-wide text-black">
                  LeslieAlexander
                </h4>
                <a
                  href="#0"
                  className="block text-xs font-small text-gray-500 hover:text-indigo-500"
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
            <div className="flex items-center gap-x-3 mr-3">
              <Image
                className="h-12 w-10 rounded-full ml-3"
                src={getRoundedAvatar(4, 30)}
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
                />
              <div>
                <h4 className="text-base text-[12px] leading-7 tracking-wide text-black">
                  Reginacooper
                </h4>
                <a
                  href="#0"
                  className="block text-xs font-small text-gray-500 hover:text-indigo-500"
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
            <div className="flex items-center gap-x-3 mr-3">
              <Image
                className="h-12 w-10 rounded-full ml-3"
                src={getRoundedAvatar(5, 30)}
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              /> 
              <div>
                <h4 className="text-base   text-[12px] leading-7 tracking-wide text-black">
                  Judith
                </h4>
                <a
                  href="#0"
                  className="block text-xs font-small text-gray-500 hover:text-indigo-500"
                >
                  HR
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[90%] border-b border-gray-300 my-6"></div>
      </div>
    </div>
  );
};

export default ClientPocProfile;
