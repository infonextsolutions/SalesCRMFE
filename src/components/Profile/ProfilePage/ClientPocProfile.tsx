import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";

const ClientPocProfile = () => {
  return (
    <div>
      <div className="w-[100%] bg-white min-h-[250vh] rounded-[18px] overflow-hidden">
        {/* <div className="w-[100%] h-[48px] flex items-center px-[8px]"></div> */}

        <div className="flex -space-x-2 overflow-hidden">
          {/* <div className="relative inline-flex items-start mr-10"></div> */}
          {/* <div className="flex items-center justify-between"></div> */}
          <div className="flex items-center w-[100%] border-gray-300 border-b-[1px] pb-[30px] pt-[20px] ">
            {/* <Image
              className="inline-block w-[50px] rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
              width={50}
              height={50}
              style={{
                objectFit: "contain",
              }}
            /> */}
            <div className="ml-3 text-bold">
              <h2 className="text-base text-[14px] whitespace-nowrap leading-7 tracking-tight text-bold">
                Leslie Alexander
              </h2>
              <a
                href="#0"
                className="block text-sm text-[12px] text-black hover:text-indigo-500"
              >
                @Leslie Alexander
              </a>
            </div>
            <div className="h-[100%] ml-auto ">
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
        {/* <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div> */}
        <div className="py-2"></div>
        <h3 className="text-sm font-medium text-black mt-5 ml-6">INFO</h3>
        <ul className="mt-2 mb-10 ml-4">
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black ">Phone</strong>
            <a href="tel:+821023456789" className="block">
              +82 10 2345 6789
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">E-mail</strong>
            <a href="mailto:" className="block">
              aspiringfe@helloworld.com
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Location</strong>
            <span className="block">Seoul, South Korea</span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Social Media</strong>
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
        <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 text-black ml-6">COMPANY INFO</h3>
        <ul className="mt-2 mb-10 ml-4">
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Company Name</strong>
            <a href="name" className="block">
              XYZ
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black  mr-1">Comapny Address</strong>
            <a href="address:" className="block">
              nothing
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Website Link</strong>
            <span className="block">
              <a href="https://www.example.com">www.example.com</a>
            </span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Industry Type</strong>
            <a href="industry:" className="block">
              IT Solutions
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-black mr-1">Social Media</strong>
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
        <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-6">
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
              {/* <Image
                className="h-12 w-16 rounded-full ml-5"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              /> */}
              <div>
                <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  LeslieAlexander
                </h4>
                <a
                  href="#0"
                  className="block text-sm font-small hover:text-indigo-500"
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
              {/* <Image
                className="h-12 w-16 rounded-full ml-5"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              ></Image> */}
              <div>
                <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Reginacooper
                </h4>
                <a
                  href="#0"
                  className="block text-sm font-small hover:text-indigo-500"
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
              {/* <Image
                className="h-12 w-16 rounded-full ml-5"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              /> */}
              <div>
                <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Judith
                </h4>
                <a
                  href="#0"
                  className="block text-sm font-small hover:text-indigo-500"
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
