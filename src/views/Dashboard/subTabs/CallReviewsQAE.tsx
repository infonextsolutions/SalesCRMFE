import LeadsContainer from "@/components/leads/open/Container";
import { getBasicIcon } from "@/utils/AssetsHelper";
import DatePicker from "@/utils/Button/DatePicker";
import Image from "next/image";
import React, { useState } from "react";

const HeaderItem = ({
  width,
  text,
  left,
  align,
  sort,
  onClick,
  showArrowDown,
}: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      {/* change the color from #000 to #222 */}
      <p
        className="text-[#222] uppercase text-[12px] font-semibold tracking-wider w-[100%] "
        style={{
          textAlign: align && "center",
        }}
      >
        {text}
      </p>
      {showArrowDown && (
        <Image
          src={getBasicIcon("Arrow Down 3")}
          width={20}
          className="ml-[3px] cursor-pointer"
          height={20}
          alt=""
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        />
      )}
    </div>
  );
};

const CallReviewsQAE = ({ tabData }: { tabData?: any }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [manager, setManager] = useState("");
  const [sales, setSales] = useState("");
  const [callReview, setCallReview] = useState("");
  const [callType, setCallType] = useState("");
  const [callDisposition, setCallDisposition] = useState("");
  return (
    <div>
      <div className="my-5">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm">Start and End Date</h4>
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="flex items-center mt-6 gap-4">
            <div className="flex items-center w-52 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Team Manager</h2>
              <select
                onChange={(e) => setManager(e.target.value)}
                className="text-red-500"
                id="countries"
              >
                <option selected value="john">
                  John C
                </option>
                <option value="dev">Dev</option>
              </select>
            </div>
            <div className="flex items-center w-44 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Sales Rep</h2>
              <select
                onChange={(e) => setSales(e.target.value)}
                className="text-red-500"
                id="countries"
              >
                <option selected={sales === ""} value="BDM">
                  BDM
                </option>
                <option selected={sales === "SDM"} value="SDM">
                  SDM
                </option>
              </select>
            </div>
            <div className="flex items-center w-52 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Review Type</h2>
              <select
                onChange={(e) => setCallReview(e.target.value)}
                className="text-red-500"
                id="countries"
              >
                <option selected={callReview === ""} value="Allocated">
                  Allocated
                </option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex items-center w-60 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Type</h2>
              <select
                onChange={(e) => setCallType(e.target.value)}
                className="text-red-500"
                id="countries"
              >
                <option selected={callType === ""} value="Product Demo">
                  Product Demo
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex mt-4 items-center w-72 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <h2 className="font-medium">Call Disposition</h2>
          <select
            onChange={(e) => setCallDisposition(e.target.value)}
            className="text-red-500"
            id="countries"
          >
            <option
              selected={callDisposition === ""}
              value="Follow - up Required"
            >
              Follow - up Required
            </option>
          </select>
        </div>
      </div>

      <div className="bg-[#ffe3e170] rounded-xl overflow-x-hidden overflow-y-hidden">
        <h1 className="text-[20px] font-medium p-5 text-[#3F434A] tracking-wide">
          Call Review - Allocated Calls
        </h1>
        <div className="flex justify-between pb-8">
          <HeaderItem width={150} left={20} text={"Name (QA Executive)"} />
          <HeaderItem width={180} left={0} text={"Total Calls Allocated"} />
          <HeaderItem
            width={220}
            left={0}
            text={"Allocated Calls in Progress"}
          />
          <HeaderItem width={200} left={0} text={"Allocated Calls Complete"} />
          <HeaderItem width={200} left={0} text={"On Time Call Reviews"} />
          <HeaderItem
            width={250}
            left={0}
            text={"Call Reviews Exceeding Time Limit"}
          />
        </div>
      </div>
      <div className="bg-[#ffe3e170] mt-4 rounded-xl overflow-x-hidden overflow-y-hidden">
        <h1 className="text-[20px] font-medium p-5 text-[#3F434A] tracking-wide">
          QA Executive Call Info
        </h1>
        <div className="flex justify-between pb-8">
          <HeaderItem width={150} left={20} text={"Name (QA Executive)"} />
          <HeaderItem width={180} left={0} text={"Total Calls Allocated"} />
          <HeaderItem
            width={220}
            left={0}
            text={"Allocated Calls in Progress"}
          />
          <HeaderItem width={200} left={0} text={"Allocated Calls Complete"} />
          <HeaderItem width={200} left={0} text={"On Time Call Reviews"} />
          <HeaderItem
            width={250}
            left={0}
            text={"Call Reviews Exceeding Time Limit"}
          />
        </div>
      </div>
    </div>
  );
};

export default CallReviewsQAE;
