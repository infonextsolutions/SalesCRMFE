import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImportLead = () => {
  return (
    <div className="w-[100%] h-[100vh] custom-scroll-black pt-[30px] px-[40px]">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[8px] tracking-[1px]">
        Import Lead
      </h1>
      <div className="w-[100%]">
        <h3 className="text-[#3f434a] text-[22px] font-medium m-[0] tracking-[1px]">
          Step 1 of 3
        </h3>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px]">
          Import leads using own file or use{" "}
          <span className="text-renal-blue underline cursor-pointer">
            sample file
          </span>
          .
        </p>
        <div className="w-[100%] bg-[#f8f8f8] h-[200px] cursor-grab mt-[40px] rounded-2xl border-dashed border-[1px] border-[#d2d4d7] flex flex-col justify-center items-center">
          <div className="w-[100px] flex items-end">
            <Image
              src={getBasicIcon("Excel")}
              className="svg-excel"
              width={40}
              height={40}
              alt=""
            />
            <span className="text-[#3F434A] text-[18px] mx-[4px] font-medium tracking-wide">
              or
            </span>
            <Image
              src={getBasicIcon("CSV")}
              className="svg-csv"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px] w-[280px]  text-center">
            Drop or Browse to upload your files.
          </p>
          <p className="text-[#3F434A] text-[14px] font-medium tracking-wide w-[280px] text-center">
            (.csv, .xlsx formats supported)
          </p>
        </div>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[30px]">
          Check if your file has data in the
          <span className="text-renal-blue underline cursor-pointer">
            mandatory fields.
          </span>
        </p>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  );
};

export default ImportLead;
