import Kanban from "@/components/View/Kanban";
import CallsTable from "@/components/View/Tables/calls/recorded-calls/Calls";
import ButtonDropDown from "@/utils/Button/Button";
import React, { Suspense, useEffect, useState } from "react";
import Search from "../Search/Search";
import Spinner from "@/components/loader/spinner";
import DatePicker from "@/utils/Button/DatePicker";
import axios from "axios";

const MeetingRecordingContainer = ({ dummy1, data }: LeadContainerProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [companyName, setCompanyName] = useState("ABC Corp");
  const [product, setProduct] = useState(" Product A");
  const [callOwner, setCallOwner] = useState("John");
  const [callType, setCallType] = useState("Product Demo");
  const [callDisposition, setCallDisposition] = useState("Follow-up Required");
  const [location, setLocation] = useState("zoom");

  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };

  const getData = async () => {
    const payload = {
      companyName,
      product,
      callOwner,
      callType,
      search,
      callDisposition,
      location,
      date: {
        from: startDate,
        to: endDate,
      },
    };

    const response = await axios.post(
      "https://testsalescrm.nextsolutions.in/api/leads/find-all?leadStatus=Close",
      payload
    );
    dummy1 = { ...response.data };
  };

  // useEffect(() => {
  //   getData();
  // }, [product, companyName, callOwner, callType, startDate, endDate, search]);

  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] h-[170px] flex items-center  px-[8px]">
        <div className="w-[100%] flex flex-col gap-4">
          <div className="flex gap-5">
            <Search change={onChange} />
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center w-56 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Company Name</h2>
              <select
                onChange={(e) => setCompanyName(e.target.value)}
                className="text-red-500"
                id="company"
              >
                <option selected value="ABC Corp">
                  ABC Corp
                </option>
              </select>
            </div>
            <div className="flex items-center w-56 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Product/Service</h2>
              <select
                onChange={(e) => setProduct(e.target.value)}
                className="text-red-500"
                id="product"
              >
                <option selected value="Product A">
                  Product A
                </option>
                <option value="Close">Product B</option>
              </select>
            </div>
            <div className="flex items-center w-48 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Meeting Owner</h2>
              <select
                onChange={(e) => setCallOwner(e.target.value)}
                className="text-red-500"
                id="meetingOwner"
              >
                <option selected value="John">
                  John
                </option>
              </select>
            </div>
            <div className="flex items-center w-60 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Meeting Type</h2>
              <select
                onChange={(e) => setCallType(e.target.value)}
                className="text-red-500"
                id="meetingType"
              >
                <option selected value="Product Demo">
                  Product Demo
                </option>
              </select>
            </div>
            <div className="flex items-center w-40 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Location</h2>
              <select
                onChange={(e) => setLocation(e.target.value)}
                className="text-red-500"
                id="location"
              >
                <option selected value="zoom">
                  Zoom
                </option>
                <option value="meet">Meet</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 items-center w-72 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <h2 className="font-medium">Call Dispostion</h2>
            <select
              onChange={(e) => setCallDisposition(e.target.value)}
              className="text-red-500"
              id="callDispostion"
            >
              <option selected value="Follow-up Required">
                Follow-up Required
              </option>
            </select>
          </div>
        </div>
        {/* <ButtonDropDown
          light={true}
          text={"Actions"}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        /> */}
      </div>
      <Suspense fallback={<Spinner />}>
        <CallsTable totalRecords={dummy1.totalRecords} search={search} />
      </Suspense>
    </div>
  );
};

export default MeetingRecordingContainer;

interface LeadContainerProps {
  dummy1: any;
  dummy2?: any;
  data?: any;
}