import Kanban from "@/components/View/Kanban";
import CallsTable from "@/components/View/Tables/calls/recorded-calls/Calls";
import ButtonDropDown from "@/utils/Button/Button";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Search from "../Search/Search";
import Spinner from "@/components/loader/spinner";
import DatePicker from "@/utils/Button/DatePicker";
import axios from "axios";
import Navigation from "@/components/app/Navigation";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const MeetingRecordingContainer = ({ dummy1, data }: LeadContainerProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [product, setProduct] = useState(" ");
  const [callOwner, setCallOwner] = useState("");
  const [callType, setCallType] = useState("");
  const [callDisposition, setCallDisposition] = useState("");
  const [location, setLocation] = useState("");
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
    if (location !== "") {
      queryStr += `&location=${location}`;
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
      location,
      date: {
        from: startDate,
        to: endDate,
      },
    };

    const response = await axios.post(
      "https://salescrmbe.onrender.com/api/leads/find-all?leadStatus=Close",
      payload
    );
    dummy1 = { ...response.data };
  };
  const ref: any = useRef();

  useEffect(() => {
    // getData();
    getQueryStr();
  }, [product, companyName, callOwner, callType, startDate, endDate, search, location]);

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.result);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
    console.log("Exporting to Excel", data);
  };
  const exportPDF = () => {
    const documentDefinition = {
      content: [
        {
          text: "JSON to PDF Conversion",
          style: "header",
        },
        {
          text: JSON.stringify(data.result, null, 4),
          style: "contentStyle",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 10,
        },
        contentStyle: {
          fontSize: 12,
          margin: [0, 5, 0, 15] as [number, number, number, number],
        },
      },
    };

    pdfMake.createPdf(documentDefinition).download("converted_data.pdf");
    console.log("Exporting to PDF", data);
  };
  const addExport = (e: any, e1: any) => {
    if (e1 === 0) {
      exportXLSX();
    } else if (e1 === 1) {
      exportPDF();
    }
  };
  return (
    <div className="w-[100%] bg-[#ffe3e170] pt-3 min-h-[70vh] rounded-[18px] relative mb-[40px]">
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
            <div className="flex items-center w-56 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Company Name</h2>
              <select
                onChange={(e) => setCompanyName(e.target.value)}
                className="text-red-500"
                id="company"
              >
                <option selected={companyName === ""} value=""></option>
                <option selected={companyName === "ABC Corp"} value="ABC Corp">ABC Corp</option>
                <option selected={companyName === "Bridge Corp."} value="Bridge Corp.">Bridge Corp.</option>
                <option selected={companyName === "Zen Corp."} value="Zen Corp.">Zen Corp.</option>
                <option selected={companyName === "XYZ Corp."} value="XYZ Corp.">XYZ Corp.</option>
              </select>
            </div>
            <div className="flex items-center w-56 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Product/Service</h2>
              <select
                onChange={(e) => setProduct(e.target.value)}
                className="text-red-500"
                id="product"
              >
                <option selected={product === ""} value=""></option>
                <option selected={product === "P1"} value="P1">P1</option>
                <option selected={product === "P2"} value="P2">P2</option>
                <option selected={product === "P3"} value="P3">P3</option>
                <option selected={product === "Product A"} value="Product A">Product A</option>
                <option selected={product === "Product B"} value="Product B">Product B</option>
                <option selected={product === "Product C"} value="Product C">Product C</option>
                <option selected={product === "Product D"} value="Product D">Product D</option>
              </select>
            </div>
            <div className="flex items-center w-48 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Meeting Owner</h2>
              <select
                onChange={(e) => setCallOwner(e.target.value)}
                className="text-red-500"
                id="meetingOwner"
              >
                <option selected={callOwner === ""} value=""></option>
                <option selected={callOwner === "John"} value="John">John</option>
              </select>
            </div>
            <div className="flex items-center w-60 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Meeting Type</h2>
              <select
                onChange={(e) => setCallType(e.target.value)}
                className="text-red-500"
                id="meetingType"
              >
                <option selected={callType === ""} value=""></option>
                <option selected={callType === "Product Demo"} value="Product Demo">Product Demo</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center w-40 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Location</h2>
              <select
                onChange={(e) => setLocation(e.target.value)}
                className="text-red-500"
                id="location"
              >
                <option selected={location === ""} value=""></option>
                <option selected={location === "zoom"} value="zoom">Zoom</option>
                <option selected={location === "meet"} value="meet">Meet</option>
              </select>
            </div>
            <div className="flex gap-4 items-center w-72 justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <h2 className="font-medium">Call Dispostion</h2>
              <select
                onChange={(e) => setCallDisposition(e.target.value)}
                className="text-red-500"
                id="callDispostion"
              >
                <option selected={callDisposition === ""} value=""></option>
                <option selected={callDisposition === "Follow-up Required"} value="Follow-up Required">Follow-up Required</option>
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
        <CallsTable totalRecords={dummy1.totalRecords} search={search} queryStr={queryStr} />
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
