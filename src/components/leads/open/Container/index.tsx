// import LeadsTable from "@/components/View/Tables/LeadsSearch";
import ButtonDropDown from "@/utils/Button/Button";
import React, { useState, Suspense, useEffect } from "react";
import Search from "../../genUtils/Search";
// import KanbanContainer from "@/components/View/Kanban";
import { useSelector } from "react-redux";
import Spinner from "@/components/loader/spinner";
import KanbanTable from "@/components/View/Tables/open/Kanban";
import DatePicker from "@/utils/Button/DatePicker";
import axios from "axios";
import { useRouter } from "next/router";
import { PaymentOutlined } from "@mui/icons-material";
import { baseUrl } from "@/utils/baseUrl";
// import ViewDownloadButton from "@/views/sales/open/index";

const LeadsTable = React.lazy(
  () => import("@/components/View/Tables/open/LeadsSearch")
);
const KanbanContainer = React.lazy(() => import("@/components/View/Kanban"));
// const About = lazy(() => import("./pages/About"));

const LeadsContainer = ({ view, records, list, reload }: any) => {
  const [visibleRecords, setVisibleRecords] = useState(records);
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(
    window.location.pathname.split("/").pop() === "open" ? "open" : "close"
  );
  const [stage, setStage] = useState("");
  const [product, setProduct] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [queryStr, setQueryStr] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };
  const state = useSelector((state: any) => state.auth);
  const [accessToken, setAccessToken] = useState<any>("");
  console.log(accessToken, "accessToken");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  const getQueryStr = () => {
    let queryStr = "";
    // if (search !== "") {
    //   queryStr += `&search=${search}`;
    // }
    if (stage !== "") {
      queryStr += `&leadStage=${stage}`;
    }
    if (product !== "") {
      queryStr += `&productCategory=${product}`;
    }
    if (leadSource !== "") {
      queryStr += `&leadSource=${leadSource}`;
    }
    if (startDate !== "" || endDate !== "") {
      queryStr += `&date_range=${JSON.stringify([startDate, endDate])}`;
    }
    setQueryStr(queryStr);
    return queryStr;
  };

  const getData = async () => {
    const payload = {
      status,
      stage,
      product,
      leadSource,
      search,
      date: {
        from: startDate,
        to: endDate,
      },
    };
    try {
      const response = await axios.get(
        `${baseUrl}api/leads/find-all?leadStatus=Open${getQueryStr()}`
      );
      setVisibleRecords({ ...response.data });
    } catch (error) {}
  };

  useEffect(() => {
    // getData();
    getQueryStr();
  }, [status, stage, product, leadSource, startDate, endDate]);

  return (
    <div className="w-[100%] bg-[#ffe3e170] min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] flex items-center px-[8px] ">
        <div className="w-[100%] flex flex-col my-4 gap-4">
          <div className="flex gap-5">
            <Search change={onChange} view={view} />
          </div>
          {/* <ViewDownloadButton /> */}
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center w-fit justify-between bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Status</h2>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                  router.push(
                    `/sales/${e.target.value === "open" ? "open" : "closed"}`
                  );
                }}
                value={status}
                className="text-red-500 px-4"
                id="countries"
              >
                <option value="open" className="">
                  Open
                </option>
                <option value="close">Close</option>
              </select>
            </div>
            <div className="flex items-center w-fit justify-between bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Stage</h2>
              <select
                onChange={(e) => setStage(e.target.value)}
                value={stage}
                className="text-red-500 px-4"
                id="countries"
              >
                <option value=""></option>
                <option value="Enquiry">
                  Enquiry
                </option>
                <option value="Interaction">
                  Interaction
                </option>
                <option value="Proposal">
                  Proposal
                </option>
              </select>
            </div>
            <div className="flex items-center w-fit justify-between bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Product/Service</h2>
              <select
                onChange={(e) => setProduct(e.target.value)}
                value={product}
                className="text-red-500 px-4"
                id="countries"
              >
                <option value=""></option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="Product A">Product A</option>
                <option value="Product B">Product B</option>
                <option value="Product C">Product C</option>
                <option value="Product D">Product D</option>
              </select>
            </div>
            <div className="flex items-center w-fit justify-between bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Lead Source</h2>
              <select
                onChange={(e) => setLeadSource(e.target.value)}
                value={leadSource}
                className="text-red-500 px-4"
                id="countries"
              >
                <option value=""></option>
                <option value="Website">Website</option>
                <option value="Referrals">Referrals</option>
                <option value="Social Media">Social Media</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Paid Advertising">Paid Advertising</option>
                <option value="Events">Events</option>
                <option value="Offline Channels">Offline Channels</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Partnerships">Partnerships</option>
              </select>
            </div>
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
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
          <LeadsTable
            totalRecords={visibleRecords}
            search={search}
            queryStr={queryStr}
            reload={reload}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner />}>
          {/* <KanbanContainer list={list} /> */}
          <KanbanTable
            totalRecords={visibleRecords}
            search={search}
            queryStr={queryStr}
            reload={reload}
          />
        </Suspense>
      )}
    </div>
  );
};

export default LeadsContainer;
