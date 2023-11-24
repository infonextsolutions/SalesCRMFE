// import LeadsTable from "@/components/View/Tables/LeadsSearch";
import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import React, { useState, Suspense } from "react";
import Search from "../../genUtils/Search";
// import KanbanContainer from "@/components/View/Kanban";
import { useSelector } from "react-redux";
import Spinner from "@/components/loader/spinner";
import KanbanTable from "@/components/View/Tables/close/Kanban";
import DatePicker from "@/utils/Button/DatePicker";

const LeadsTable = React.lazy(
  () => import("@/components/View/Tables/close/LeadsSearch")
);
const KanbanContainer = React.lazy(() => import("@/components/View/Kanban"));
// const About = lazy(() => import("./pages/About"));

const LeadsContainer = ({ view, records, list }: LeadContainerProps) => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const state = useSelector((state: any) => state.auth);

  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] h-[120px] flex items-center  px-[8px] ">
        <div className="w-[100%] flex flex-col gap-4">
          <div className="flex gap-5">
            <Search change={onChange} view={view} />
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center w-36 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Status</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  Open
                </option>
                <option value="Close">Close</option>
              </select>
            </div>
            <div className="flex items-center w-36 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Stage</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  Enquiry
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
            <div className="flex items-center w-52 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Lead Source</h2>
              <select className="text-red-500" id="countries">
                <option selected value="Open">
                  Website
                </option>
                <option value="Close">Close</option>
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
          list={[
            { title: "Assign Lead", Icon: "Printer" },
            { title: "change SR", Icon: "Excel" },
            { title: "Edit lead", Icon: "PDF" },
            { title: "Delete Lead", Icon: "CSV" },
            { title: "Active/InActive Lead", Icon: "CSV" },
          ]}
        /> */}
        {/* {view && (
          <ButtonDropDown
            light={false}
            text={"Add Stage"}
            icon={"Plus"}
            border={true}
            id={1}
            dropdown={true}
            list={[
              { title: "Assign Lead", Icon: "Printer" },
              { title: "change SR", Icon: "Excel" },
              { title: "Edit lead", Icon: "PDF" },
              { title: "Delete Lead", Icon: "CSV" },
              { title: "Active/InActive Lead", Icon: "CSV" },
            ]}
          />
        )} */}
      </div>
      {!view ? (
        <Suspense fallback={<Spinner />}>
          <LeadsTable totalRecords={records} search={search} />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner />}>
          {/* <KanbanContainer list={list} /> */}
          <KanbanTable totalRecords={records} search={search} />
        </Suspense>
      )}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  view?: Boolean;
  records: Lead[] | any;
  list: any[];
}
