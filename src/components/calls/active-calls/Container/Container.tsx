import Kanban from "@/components/View/Kanban";
import ButtonDropDown from "@/utils/Button/Button";
import React, { Suspense, useState } from "react";
import Search from "../Search/Search";
import Spinner from "@/components/loader/spinner";
import DatePicker from "@/utils/Button/DatePicker";

const CallsTable = React.lazy(
  () => import("@/components/View/Tables/calls/active-calls/Calls")
);

const CallsContainer = ({ dummy1, data }: LeadContainerProps) => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // console.log(search,"here is val")

  return (
    <div className="pr-[10px] w-[100%] bg-white min-h-[70vh] rounded-[18px] overflow-hidden mb-[40px]">
      <div className="w-[100%] h-[120px] flex items-center  px-[8px]">
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
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  ABC Corp
                </option>
              </select>
            </div>
            <div className="flex items-center w-52 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Product/Service</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  Product A
                </option>
                <option value="Close">Product B</option>
              </select>
            </div>
            <div className="flex items-center w-36 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Owner</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  John
                </option>
              </select>
            </div>
            <div className="flex items-center w-52 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Type</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  Product Demo
                </option>
              </select>
            </div>
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

export default CallsContainer;

interface LeadContainerProps {
  dummy1: any;
  dummy2: any;
  data: any;
}
