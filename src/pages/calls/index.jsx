import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/app/Navbar/Navbar";
import Navigator from "@/utils/customNavigator";
import Filters from "@/views/teams/Filters";
import Table from "@/views/teams/Table";
import Pagination from "@/views/teams/Pagination";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";
import axios from "axios";
import { getBasicIcon } from "@/utils/AssetsHelper";
import DropDown2 from "@/utils/Button/DropDown2";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CallsPage = () => {
  const columnsACR = [
    {
      width: 240,
      left: 40,
      text: "Call ID",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Title",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Lead ID",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Lead Title",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Company Name",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Owner",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Team Manager",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Client POC",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Date & Time",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Product/Service",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Disposition",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Type",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Call Review Type",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Score",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Allocation Type",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Allocated On",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Allocated To",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Review Due Date",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Review Status",
      checked: true,
    },
  ];

  const columnsFRCR = [
    {
      width: 240,
      left: 40,
      text: "Call ID",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Title",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Lead ID",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Lead Title",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Owner",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Team Manager",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Client POC",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Company Name",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Date & Time",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Product/Service",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Call Review Type",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Disposition",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Type",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Score",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Feedback Requested On",
      checked: true,
    },
    {
      width: 200,
      left: 40,
      text: "Feedback Requested By",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "On Time Review",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Delay Time",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Time To Complete Review",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Call Review Status",
      checked: true,
    },
  ];

  const [rowsACR, setRowsACR] = useState([]);
  const [rowsFRCR, setRowsFRCR] = useState([]);
  const [qaList, setQaList] = useState([]);
  const [searchAssignTo, setSearchAssignTo] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalItem, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const [currTab, setCurrTab] = useState(0);
  const [subType, setSubType] = useState("allocated_call_reviews");
  const [search, setSearch] = useState("");
  const [tabs, setTabs] = useState([
    { id: 0, title: "Calls For Review" },
    { id: 1, title: "Active Calls" },
    { id: 2, title: "Closed Calls" },
  ]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  const [data, setData] = useState([{}, {}]);
  useEffect(() => {
    axios
      .get("https://sales365.trainright.fit/api/active-call/find-all", {
        headers: { Authorization: accessToken },
      })
      .then((res) => {
        setData(res?.data);
      })
      .catch((e) => {});
  }, [accessToken]);

  const [filters, setFilters] = useState({
    callStartAndEndDate: {
      label: "Call Start and End Date",
      type: "DATERANGE",
      value: ["", ""],
    },
    productService: {
      label: "Product/Service",
      options: [
        { key: "Product A", label: "Product A" },
        { key: "Product B", label: "Product B" },
        { key: "Product C", label: "Product C" },
        { key: "Product D", label: "Product D" },
      ],
      value: "",
    },
    callType: {
      label: "Call Type",
      options: [{ key: "Product Demo", label: "Product Demo" }],
      value: "",
    },
    callDisposition: {
      label: "Call Disposition",
      options: [{ key: "Follow-Up required", label: "Follow-Up required" }],
      value: "",
    },
  });

  const formatDateToCustomFormat = (isoDate) => {
    const dateObject = new Date(isoDate);
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const day = dateObject.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[dateObject.getMonth()];
    const year = dateObject.getFullYear();

    return `${day} ${month} ${year}`;

    // const months = [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    // ];

    // const dateObj = new Date(isoDate);
    // const day = dateObj.getUTCDate();
    // const month = months[dateObj.getUTCMonth()];
    // const year = dateObj.getUTCFullYear();

    // return `${day} ${month} ${year}`;

    // // Create a Date object from the given date string (UTC time)
    // const dateObj = new Date(dateString);

    // // Convert the UTC time to IST (Indian Standard Time)
    // const utcToIstOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    // dateObj.setTime(dateObj.getTime() + utcToIstOffset);

    // // Months array to get the month name
    // const months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];

    // // Get the day and month
    // const day = dateObj.getUTCDate();
    // const month = months[dateObj.getUTCMonth()];

    // // Get the hours and minutes in IST
    // let hours = dateObj.getUTCHours();
    // let minutes: string = dateObj.getUTCMinutes().toString();

    // // Convert the hours to 12-hour format and determine AM/PM
    // const amPm = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12 || 12; // Convert 0 to 12

    // // Pad single-digit minutes with a leading zero
    // minutes = minutes.toString().padStart(2, "0");

    // // Create the formatted date and time string
    // const formattedDate = `${day} ${month}`;
    // const formattedTime = `${hours}:${minutes} ${amPm}`;

    // return { date: formattedDate, time: formattedTime };
  };

  const generateRows = (data) => {
    if (subType === "allocated_call_reviews") {
      setRowsACR(
        data?.map((item, index) => {
          let row = [
            {
              text: item?._id || "-",
              id: item?._id,
              link: `/calls/recorded-calls/${item?._id}/audio-call`,
            },
            {
              text: item?.callTitle || "-",
              id: item?._id,
              link: `/calls/recorded-calls/${item?._id}/audio-call`,
            },
            {
              text: item?.leadId?.[0]?.leadId || "-",
              id: item?._id,
              link: `/sales/open/${item?.leadId?.[0]?._id}/lead-profile`,
            },
            {
              text: item?.leadId?.[0]?.lead_title || "-",
              id: item?._id,
              link: `/sales/open/${item?.leadId?.[0]?._id}/lead-profile`,
            },
            {
              text: item?.company?.[0]?.company_name || "-",
              id: item?._id,
              link: `/sales/open/${item?.leadId?.[0]?._id}/company-profile`,
            },
            { text: item?.owner?.[0]?.name || "-", id: item?._id }, // call owner
            { text: item?.teamManager?.name || "-", id: item?._id }, // team manager
            { text: item?.callId || "-", id: item?._id }, // client poc
            {
              text: formatDateToCustomFormat(item?.StartTime) || "-",
              id: item?._id,
            }, // call date & time
            {
              text: item?.company?.[0]?.company_product_category || "-",
              id: item?._id,
            }, // product/service
            { text: item?.callDisposiiton || "-", id: item?._id }, // call disposition
            { text: item?.callType || "-", id: item?._id }, // call type
            { text: item?.callId || "-", id: item?._id }, // call review type
            { text: item?.score || "Not Scored", id: item?._id }, // call score
            { text: item?.callId || "-", id: item?._id }, // allocation type
            {
              text: item?.qaAllocatedAt
                ? formatDateToCustomFormat(item?.qaAllocatedAt)
                : "-",
              id: item?._id,
            }, // allocated on
            { text: item?.qaId?.name || "-", id: item?._id }, // allocated to
            { text: item?.callId || "-", id: item?._id }, // review due date
            { text: item?.callId || "-", id: item?._id }, // call review status
          ];
          return row;
        })
      );
    } else {
      setRowsFRCR(
        data?.map((item, index) => {
          let row = [
            {
              text: item?._id || "-",
              id: item?._id,
              link: `/calls/recorded-calls/${item?._id}/audio-call`,
            },
            {
              text: item?.callTitle || "-",
              id: item?._id,
              link: `/calls/recorded-calls/${item?._id}/audio-call`,
            },
            { text: item?.leadId?.[0]?.leadId || "-", id: item?._id },
            { text: item?.leadId?.[0]?.lead_title || "-", id: item?._id },
            { text: item?.owner?.name || "-", id: item?._id }, // call owner
            { text: item?.teamManager || "-", id: item?._id }, // team manager
            { text: item?.callId || "-", id: item?._id }, // client poc
            { text: item?.company?.[0]?.company_name || "-", id: item?._id },
            { text: item?.StartTime || "-", id: item?._id }, // call date & time
            {
              text: item?.company?.[0]?.company_product_category || "-",
              id: item?._id,
            }, // product/service
            { text: item?.callId || "-", id: item?._id }, // call review type
            { text: item?.callDisposiiton || "-", id: item?._id }, // call disposition
            { text: item?.callType || "-", id: item?._id }, // call type
            { text: item?.score || "-", id: item?._id }, // call score
            { text: item?.qaId?.name || "-", id: item?._id }, // feedback requestd by
            { text: item?.callId || "-", id: item?._id }, // on time review
            { text: item?.callId || "-", id: item?._id }, // delay time
            { text: item?.callId || "-", id: item?._id }, // time to complete review
            { text: item?.callId || "-", id: item?._id }, // call review status
          ];
          return row;
        })
      );
    }
  };

  const getData = (page = currPage) => {
    let endpoint = "";
    if (subType === "feedback_requested_call_reviews") {
      endpoint = `https://sales365.trainright.fit/api/qa/findRequestFeedBack?page=${page}&limit=${limit}`;
    } else {
      switch (currTab) {
        case 0:
          endpoint = `https://sales365.trainright.fit/api/qam/callForReview?qaStatus=active&page=${page}&limit=${limit}`;
          break;
        case 1:
          endpoint = `https://sales365.trainright.fit/api/qam/callForReview?qaStatus=allocated&page=${page}&limit=${limit}`;
          break;
        case 2:
          endpoint = `https://sales365.trainright.fit/api/qam/callForReview?qaStatus=closed&page=${page}&limit=${limit}`;
          break;
        default:
          endpoint = `https://sales365.trainright.fit/api/qam/callForReview?qaStatus=active&page=${page}&limit=${limit}`;
          break;
      }
    }
    axios
      .get(endpoint, { headers: { Authorization: accessToken } })
      .then((res) => {
        const data = res?.data?.result;
        generateRows(data);
        setTotalItems(res?.data?.totalRecords);
        const pages = Math.ceil(res?.data?.totalRecords / limit);
        setTotalPages(pages);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, [currTab, subType]);

  useEffect(() => {
    axios
      .get(
        `https://sales365.trainright.fit/api/master-users/findAllQA_Analyst`,
        { headers: { Authorization: accessToken } }
      )
      .then((res) => {
        setQaList(res?.data?.result);
      })
      .catch((err) => {});
  }, []);

  const handleTabNavigation = (payload) => {
    setCurrTab(payload);
    setSubType("allocated_call_reviews");
  };

  const handleSubType = (payload) => {
    setSubType(payload);
  };

  const getQuery = () => {
    let query = "";
    if (search) {
      query += `search=${search}`;
    }
    Object.keys(filters).forEach((filterKey, index) => {
      if (filters?.[filterKey]?.value !== "") {
        query +=
          (query !== "" ? "&" : "") +
          `${filterKey}=${filters?.[filterKey]?.value}`;
      }
    });
    return query;
  };

  const ref = useRef();
  const dispatch = useAppDispatch();

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data?.result);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
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
          margin: [0, 5, 0, 15],
        },
      },
    };

    pdfMake.createPdf(documentDefinition).download("converted_data.pdf");
  };

  const addExport = (e, e1) => {
    if (e1 === 0) {
      exportXLSX();
    } else if (e1 === 1) {
      exportPDF();
    }
  };

  useEffect(() => {
    // call api for data with filters
  }, [currTab, subType]);

  const handleSelection = (checked, row) => {
    if (row) {
      if (checked) {
        setSelectedRows((currSelectedRows) => {
          return [...currSelectedRows, row?.[0]?.id];
        });
      } else {
        setSelectedRows(
          selectedRows.filter((rowItem) => rowItem !== row?.[0]?.id)
        );
      }
    } else {
      if (checked) {
        if (subType === "allocated_call_reviews") {
          setSelectedRows(
            rowsACR?.map((rowItem) => {
              return rowItem?.[0]?.id;
            })
          );
        } else {
          setSelectedRows(
            rowsFRCR?.map((rowItem) => {
              return rowItem?.[0]?.id;
            })
          );
        }
      } else {
        setSelectedRows([]);
      }
    }
  };

  const handleSearchAssignTo = (val) => {
    setSearchAssignTo(val);
  };

  const handleAssignTo = (checked, qaId) => {
    try {
      if (selectedRows.length === 0) {
        dispatch(
          setError({
            show: true,
            error: "No Selection.",
          })
        );
      } else if (checked) {
        dispatch(
          setSuccess({
            show: true,
            success: "Assigning...",
          })
        );
        const assigningPromise = selectedRows.map((selectedRow) => {
          const payload = {
            qaId: qaId,
            qamId: window !== undefined ? localStorage.getItem("user-id") : "",
            callId: selectedRow,
          };
          return axios.post(
            `https://sales365.trainright.fit/api/qam/allocateCallToQA`,
            payload,
            { headers: { Authorization: accessToken } }
          );
        });
        Promise.all(assigningPromise)
          .then((res) => {
            dispatch(
              setSuccess({
                show: true,
                success: "Successfully Assigned!",
              })
            );
          })
          .catch((err) => {
            dispatch(
              setError({
                show: true,
                error: "Error Occured!",
              })
            );
          });
      }
    } catch (error) {}
  };

  const handlePageChange = (payload) => {
    if (currPage !== payload?.selected) {
      setCurrPage(payload?.selected || 0);
      getData(payload?.selected);
    }
  };

  const handleItemsPerPageChange = (val) => {
    setLimit(val);
  };

  const renderAssignToDD = () => {
    return (
      <div>
        <div className="flex items-center p-[6px] border-solid border-1 border-black rounded">
          <input
            type="text"
            className="bg-white outline-none text-black"
            placeholder="Search..."
            value={searchAssignTo}
            onInput={(e) => handleSearchAssignTo(e.target.value)}
          />
          <button className="flex items-center justify-center w-[20px] h-[20px]">
            <img
              src={getBasicIcon("Search")}
              alt="Search"
              width={"20px"}
              height={"20px"}
            />
          </button>
        </div>
        <ul className="">
          {searchAssignTo
            ? qaList
                ?.filter((qaItem, index) => {
                  return qaItem?.name
                    ?.toLowerCase()
                    .includes(searchAssignTo.toLowerCase());
                })
                .map((qaItem, index) => (
                  <li key={index}>
                    <label
                      htmlFor={qaItem?._id}
                      className="w-[100%] flex items-center justify-between text-black p-[4px] cursor-pointer"
                    >
                      <span>{qaItem?.name}</span>
                      <input
                        type="checkbox"
                        id={qaItem?._id}
                        onChange={(e) =>
                          handleAssignTo(e.target.checked, qaItem?._id)
                        }
                      />
                    </label>
                  </li>
                ))
            : qaList?.map((qaItem, index) => (
                <li key={index}>
                  <label
                    htmlFor={qaItem?._id}
                    className="w-[100%] flex items-center justify-between text-black p-[4px] cursor-pointer"
                  >
                    <span>{qaItem?.name}</span>
                    <input
                      type="checkbox"
                      id={qaItem?._id}
                      onChange={(e) =>
                        handleAssignTo(e.target.checked, qaItem?._id)
                      }
                    />
                  </label>
                </li>
              ))}
        </ul>
      </div>
    );
  };

  const renderControls = () => {
    return (
      <div className="flex items-center gap-[20px]">
        {currTab === 0 ? (
          <>
            <DropDown2 text="Assign To" id={0} dropdown={true}>
              {renderAssignToDD()}
            </DropDown2>
            {/* <button className='text-black'>Auto Allocate</button> */}
          </>
        ) : currTab === 1 ? (
          <DropDown2 text="Re-Assign To" id={0} dropdown={true}>
            {renderAssignToDD()}
          </DropDown2>
        ) : null}
      </div>
    );
  };

  const renderFilters = () => {
    return (
      <div className="w-[100%] py-[20px]">
        <div className="flex items-center justify-between">
          <div className="w-[100%] flex items-center gap-[20px]">
            <div className="w-[60%] bg-white h-[40px] relative border-[#ccc] border-[1px] rounded-[12px] p-2  flex items-center">
              <input
                type="text"
                className="w-[100%] text-black bg-white outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
              <img src={getBasicIcon("Search")} alt="Search" />
            </div>
            {renderControls()}
          </div>
          <div className="flex items-center gap-[20px]">
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
                    { title: "PDF", Icon: "PDF" },
                    {
                      title: "CSV",
                      Icon: "CSV",
                      wrapper: (
                        <CSVLink data={data?.result} className="" ref={ref}>
                          CSV
                        </CSVLink>
                      ),
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="">
          <Filters filters={filters} />
        </div>
      </div>
    );
  };

  const renderACR = () => {
    return (
      <Table
        rows={rowsACR}
        columns={columnsACR}
        handleSelection={handleSelection}
        selectedRows={selectedRows}
      />
    );
  };

  const renderFRCR = () => {
    return (
      <Table
        rows={rowsFRCR}
        columns={columnsFRCR}
        handleSelection={handleSelection}
        selectedRows={selectedRows}
      />
    );
  };

  const renderToggleSwitch = () => {
    return (
      <div className="flex text-black mt-6 px-8 pr-20 items-center gap-[20px]">
        <div className="w-[340px] px-2 bg-gray-200 rounded-3xl">
          <button
            className={`w-[130px] ${
              subType == "allocated_call_reviews"
                ? "focus:outline-none bg-[#fff] font-medium rounded-3xl text-sm px-6 py-2 mt-2 mb-2"
                : "text-sm"
            } `}
            onClick={() => handleSubType("allocated_call_reviews")}
          >
            Allocated Call Reviews
          </button>
          <button
            className={`w-[190px] ${
              subType == "feedback_requested_call_reviews"
                ? "focus:outline-none bg-[#fff] font-medium rounded-3xl text-sm px-6 py-2 mt-2 mb-2"
                : "text-sm"
            } `}
            onClick={() => handleSubType("feedback_requested_call_reviews")}
          >
            Feedback Requested Call Reviews
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar
        mainTitle={`Calls > ${tabs?.[currTab]?.title}`}
        title={
          subType === "allocated_call_reviews"
            ? "Allocated Call Reviews"
            : "Feedback Requested Call Reviews"
        }
        src="Phone"
      />
      <Navigator
        callback={handleTabNavigation}
        current={currTab}
        list={tabs}
        width={true}
      />
      {renderToggleSwitch()}
      <div className="pl-9 pt-6 pb-3">
        <h2 className="font-semibold text-xl">
          {tabs?.[currTab]?.title} {" > "}
          {subType === "allocated_call_reviews"
            ? "Calls To Be Allocated"
            : "Calls To Be Feedback Requested"}
        </h2>
      </div>
      <div className="bg-[#ffe3e170] mt-6 rounded-lg mx-6 px-6 overflow-x-auto">
        {renderFilters()}
        {subType === "allocated_call_reviews" ? renderACR() : renderFRCR()}
      </div>
      <Pagination
        itemsPerPage={limit}
        totalItems={totalItem}
        totalPages={totalPages}
        currPage={currPage}
        updatePage={handlePageChange}
        updateItemsPerPage={handleItemsPerPageChange}
      />
    </>
  );
};

// export async function getServerSideProps({ query, ...params }: any) {
//     const response = await axios.get(
//         "https://sales365.trainright.fit/api/active-call/find-all"
//     );
//     return {
//         props: {
//             data: response.data || {},
//         },
//     };
// }

export default CallsPage;
