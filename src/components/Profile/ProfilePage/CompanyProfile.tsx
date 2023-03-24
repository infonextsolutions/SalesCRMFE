import React from 'react'; 
import { getBasicIcon, getRoundedAvatar } from '@/utils/AssetsHelper';
import Image from 'next/image';

const CompanyProfile=()=>{

    return(
        <div>
        <div className="w-[100%] bg-white min-h-[250vh] rounded-[18px] overflow-hidden">
        {/* <div className="w-[100%] h-[48px] flex items-center px-[8px]"></div> */}

        <div className="flex -space-x-2 overflow-hidden">
          {/* <div className="relative inline-flex items-start mr-10"></div> */}
          {/* <div className="flex items-center justify-between"></div> */}
          <div className="flex items-center w-[100%] border-gray-300 border-b-[1px] pb-[30px] pt-[20px] ">
            <div className="ml-auto">
            <Image
              className="h-12 w-16 rounded-full ml-2"
              src={getRoundedAvatar(1, 30)}
              alt=""
              width={64}
              height={48}
              style={{
                objectFit:"contain"
              }}
            /> 
              <h2 className="text-base text-[14px] whitespace-nowrap leading-7 tracking-tight text-gray-900 font-medium">
                ABC Corp
              </h2>
              <a
                href="#0"
                className="block text-sm text-[14px] text-gray-500 font-weight-400 hover:text-indigo-500"
              >
                Noida,UP
              </a>
            </div>
            <div className="h-[100%] ml-auto " >
              <Image
                src={getBasicIcon("Edit")}
                className={`w-[20px] svg-grey ml-auto svg-not-selected mt-[9px]`}
                width={20}
                height={20}
                style={{
                  objectFit:"contain"
                }}
                alt="Edit"
              />
            </div>
          </div>
        </div>
        {/* <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div> */}
        <div className="py-1"></div>
        <h3 className="text-sm font-medium text-black mt-5 ml-2">COMPANY INFO</h3>
        <ul className="mt-2 mb-10 ml-auto">
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Company Name</strong>
            <a href="#" className="block text-black ">
              ABC Corp
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-gray-500 mr-1">Company Address</strong>
            <a href="address:" className="block text-black">
              nothing
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium  text-gray-500 mr-1">Website Link</strong>
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
                  objectFit:"contain"
                }}
              />
              <Image
                src={getBasicIcon("Twitter")}
                className={`w-[20px] svg-grey`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit:"contain"
                }}
              />
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-4">
          <h3 className="text-sm font-medium">ALL CONTACTS</h3>
        </div>
        <div className="py-3"></div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-3 mr-3">
            <Image
              className="h-12 w-16 rounded-full ml-2"
              src={getRoundedAvatar(2, 30)}
              alt=""
              width={64}
              height={48}
              style={{
                objectFit:"contain"
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
            <div className="flex items-center gap-x-3 mr-3">
            <Image
              className="h-12 w-16 rounded-full ml-2"
              src={getRoundedAvatar(5, 30)}
              alt=""
              width={64}
              height={48}
              style={{
                objectFit:"contain"
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
            <div className="flex items-center gap-x-3 mr-3">
            <Image
              className="h-12 w-16 rounded-full ml-2"
              src={getRoundedAvatar(6, 30)}
              alt=""
              width={64}
              height={48}
              style={{
                objectFit:"contain"
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
        <div className="mx-auto w-[90%] border-b border-gray-300 my-6"></div>
      </div>
        </div>
    )
}

export default CompanyProfile;