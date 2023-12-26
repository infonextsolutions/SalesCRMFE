import Kanban from "@/components/View/Kanban";
import CallsTable from "@/components/View/Tables/calls/recorded-calls/Calls";
import ButtonDropDown from "@/utils/Button/Button";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Search from "../Search/Search";
import Spinner from "@/components/loader/spinner";
import DatePicker from "@/utils/Button/DatePicker";
import axios from "axios";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

const CallsRecordingContainer = ({ dummy1, data }: LeadContainerProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [product, setProduct] = useState(" ");
  const [callOwner, setCallOwner] = useState("");
  const [callType, setCallType] = useState("");
  const [callDisposition, setCallDisposition] = useState("");
  const [queryStr, setQueryStr] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };

  const getQueryStr = () => {
    let queryStr = "";
    // if (search !== "") {
    //   queryStr += `&search=${search}`;
    // }
    if (companyName !== "") {
      queryStr += `&companyName=${companyName}`;
    }
    if (product !== "") {
      queryStr += `&productCategory=${product}`;
    }
    if (callOwner !== "") {
      queryStr += `&callOwner=${callOwner}`;
    }
    if (callType !== "") {
      queryStr += `&callType=${callType}`;
    }
    if (callDisposition !== "") {
      queryStr += `&callDisposition=${callDisposition}`;
    }
    if (startDate !== "") {
      queryStr += `&startDate=${startDate}`;
    }
    if (endDate !== "") {
      queryStr += `&endDate=${endDate}`;
    }
    setQueryStr(queryStr);
    return queryStr;
  };

  const getData = async () => {
    const payload = {
      companyName,
      product,
      callOwner,
      callType,
      search,
      callDisposition,
      date: {
        from: startDate,
        to: endDate,
      },
    };

    const response = await axios.post(
      "https://sales365.trainright.fit/api/leads/find-all?leadStatus=Close",
      payload
    );
    dummy1 = { ...response.data };
  };

  const ref: any = useRef();
  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.result);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
    console.log("exporting", data);
  };

  const addExport = (e: any, e1: any) => {
    if (e1 === 0) {
      exportXLSX();
    }
  };

  // useEffect(() => {
  //   getData();
  // }, [product, companyName, callOwner, callType, startDate, endDate, search]);
  useEffect(() => {
    // getData();
    getQueryStr();
  }, [
    product,
    companyName,
    callOwner,
    callType,
    callDisposition,
    startDate,
    endDate,
  ]);

  return (
    <div className="w-[100%] bg-[#ffe3e170] pt-3 min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] h-[160px] flex items-center  px-[8px]">
        <div className="w-[100%] flex flex-col gap-4">
          <div className="flex justify-between">
            <Search change={onChange} />
            <NavigationWithoutTitle
              buttons={[
                {
                  text: "",
                  dropdown: true,
                  id: 1,
                  icon: "Download",
                  light: true,
                  dark: false,
                  click: addExport,
                  list: [
                    { title: "Excel", Icon: "Excel" },
                    { title: "Print", Icon: "Printer" },
                    {
                      title: "CSV",
                      Icon: "CSV",
                      wrapper: (
                        <CSVLink data={data.result} className="" ref={ref}>
                          CSV
                        </CSVLink>
                      ),
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center w-64 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Company Name</h2>
              <select
                onChange={(e) => setCompanyName(e.target.value)}
                className="text-red-500"
                id="company"
              >
                <option selected={companyName === ""} value=""></option>
                <option selected={companyName === "ABC Corp"} value="ABC Corp">
                  ABC Corp
                </option>
                <option
                  selected={companyName === "Bridge Corp."}
                  value="Bridge Corp."
                >
                  Bridge Corp.
                </option>
                <option
                  selected={companyName === "Zen Corp."}
                  value="Zen Corp."
                >
                  Zen Corp.
                </option>
                <option
                  selected={companyName === "XYZ Corp."}
                  value="XYZ Corp."
                >
                  XYZ Corp.
                </option>
              </select>
            </div>
            <div className="flex items-center w-64 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Product/Service</h2>
              <select
                onChange={(e) => setProduct(e.target.value)}
                className="text-red-500"
                id="product"
              >
                <option selected={product === ""} value=""></option>
                <option selected={product === "P1"} value="P1">
                  P1
                </option>
                <option selected={product === "P2"} value="P2">
                  P2
                </option>
                <option selected={product === "P3"} value="P3">
                  P3
                </option>
                <option selected={product === "Product A"} value="Product A">
                  Product A
                </option>
                <option selected={product === "Product B"} value="Product B">
                  Product B
                </option>
                <option selected={product === "Product C"} value="Product C">
                  Product C
                </option>
                <option selected={product === "Product D"} value="Product D">
                  Product D
                </option>
              </select>
            </div>
            <div className="flex items-center w-64 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Owner</h2>
              <select
                onChange={(e) => setCallOwner(e.target.value)}
                className="text-red-500"
                id="callOwner"
              >
                <option selected={callOwner === ""} value=""></option>
                <option selected={callOwner === "John"} value="John">
                  John
                </option>
              </select>
            </div>
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center w-64 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Type</h2>
              <select
                onChange={(e) => setCallType(e.target.value)}
                className="text-red-500"
                id="callType"
              >
                <option selected={callType === ""} value=""></option>
                <option
                  selected={callType === "Product Demo"}
                  value="Product Demo"
                >
                  Product Demo
                </option>
              </select>
            </div>
            <div className="flex gap-4 items-center w-80 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Dispostion</h2>
              <select
                onChange={(e) => setCallDisposition(e.target.value)}
                className="text-red-500"
                id="callDispostion"
              >
                <option selected={callDisposition === ""} value=""></option>
                <option
                  selected={callDisposition === "Follow-up Required"}
                  value="Follow-up Required"
                >
                  Follow-up Required
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
        <CallsTable
          totalRecords={dummy1.totalRecords}
          search={search}
          queryStr={queryStr}
        />
      </Suspense>
    </div>
  );
};

export default CallsRecordingContainer;

interface LeadContainerProps {
  dummy1: any;
  dummy2?: any;
  data?: any;
}
