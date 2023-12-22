import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import SalesPerformance from "./subTabs/SalesPerformance";
import CommunicationInteraction from "./subTabs/CommunicationInteraction";
import EngagementReports from "./subTabs/EngagementReports";
import CallReviews from "./subTabs/CallReviews";
import DashboardQAM from "./subTabs/DashboardQAM";
import Scoring from "./subTabs/Scoring";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const Dashboard = ({ data }: any) => {
const Dashboard = ({ data }: any) => {
  const [scriptbuilderData, setScriptBuilderData] = useState([]);
  const [sellingData, setSellingData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  console.log(data);
  console.log(data.second);
  console.log(data.third);
  const [startDate, setStartDate] = useState("2023-07-19");
  const [endDate, setEndDate] = useState("2023-07-26");

  const [tabs, setTabs] = useState<any>([]);
  const [currTab, setCurrTab] = useState(0);
  const [role, setRole] = useState<any>("SDR");

  useEffect(() => {
    setRole(localStorage.getItem("user-role"));
    switch (role) {
      case "QA Analyst":
        setTabs([
          { id: 0, title: "Call Reviews", key: "QA Analyst" },
          { id: 1, title: "Communication & Interaction", key: "QA Analyst" },
        ]);
        break;
      case "QA manager":
        setTabs([
          { id: 0, title: "Dashboard", key: "QA manager" },
          { id: 1, title: "Communication & Interaction", key: "QA manager" },
          { id: 2, title: "Scoring", key: "QA manager" },
          { id: 3, title: "Call Reviews", key: "QA manager" },
        ]);
        break;
      case "Manager":
        setTabs([
          { id: 0, title: "Sales Performance", key: "Manager" },
          { id: 1, title: "Communication & Interaction", key: "Manager" },
          { id: 2, title: "Engagement Reports", key: "Manager" },
        ]);
      case "SDR":
        setTabs([
          { id: 0, title: "Sales Performance", key: "SDR" },
          { id: 1, title: "Communication & Interaction", key: "SDR" },
          { id: 2, title: "Engagement Reports", key: "SDR" },
        ]);
      case "BDM":
      default:
        setTabs([
          { id: 0, title: "Sales Performance", key: "BDM" },
          { id: 1, title: "Communication & Interaction", key: "BDM" },
          { id: 2, title: "Engagement Reports", key: "BDM" },
        ]);
    }
  }, [role]);

  const getPitchData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://salescrmbe.onrender.com/api/pitch-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        console.log("____________ GET PITCH DATA ___________", res.data);
        setPitchData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSellingData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://salescrmbe.onrender.com/api/selling-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        console.log("____________ GET SELLING DATA ___________", res.data);
        setSellingData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getScriptData = ({ ...startEndDate }: any) => {
    const finalPayload = {
      date: {
        from: startEndDate[0],
        to: startEndDate[1],
      },
    };
    axios
      .post(
        "https://salescrmbe.onrender.com/api/script-analysis/find-one",
        finalPayload
      )
      .then((res) => {
        console.log("____________ GET SCRIPT DATA ___________", res.data);
        setScriptBuilderData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getPitchData([startDate, endDate]);
    getScriptData([startDate, endDate]);
    getSellingData([startDate, endDate]);
  }, []);

  const handleTabNavigation = (payload: any) => {
    setCurrTab(payload);
  };
  const ref: any = useRef();

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      data.first.result,
      data.second.result,
      data.third.result,
    ]);
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
          text: JSON.stringify(
            [data.first.result, data.second.result, data.third.result],
            null,
            4
          ),
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
  };

  const addExport = (e: any, e1: any) => {
    if (e1 === 0) {
      exportXLSX();
    } else if (e1 === 1) {
      exportPDF();
    }
  };

  const renderTab0 = () => {
    if (role === "QA Analyst") {
      return <CallReviews tabData={tabs[currTab]} sellingData={sellingData} getSellingData={getSellingData} />;
    } else if (role === "QA manager") {
      return <DashboardQAM tabData={tabs[currTab]} sellingData={sellingData} getSellingData={getSellingData} />
    } else {
      return <SalesPerformance tabData={tabs[currTab]} sellingData={sellingData} getSellingData={getSellingData} />;
    }
  };

  const renderTab2 = () => {
    if (role === "QA manager") {
      return <Scoring tabData={tabs[currTab]} />;
    } else {
      return <EngagementReports tabData={tabs[currTab]} />;
    }
  };

  return (
    <div className="bg-white w-[100%] min-h-[90vh] pl-[20px] pr-[20px] pb-8">
      <div className="flex w-[100%] justify-end gap-[10px]">
        <Navigation
          title=""
          buttons={[
            {
              text: "Last 7 days",
              dropdown: true,
              id: 1,
              dark: true,
              light: false,
              list: [
                { title: "Last 7 days", Icon: "" },
                { title: "Last 15 days", Icon: "" },
                { title: "Last 30 days", Icon: "" },
              ],
            },
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
                    <CSVLink
                      data={[
                        data.first.result,
                        data.second.result,
                        data.third.result,
                      ]}
                      className=""
                      ref={ref}
                    >
                      CSV
                    </CSVLink>
                  ),
                },
              ],
            },
          ]}
        />
      </div>
      <Navigator
        callback={handleTabNavigation}
        current={currTab}
        list={tabs}
        width={true}
      />
      {currTab === 0 && (
        renderTab0()
      )}
      {currTab === 1 && (
        <CommunicationInteraction tabData={tabs[currTab]} pitchData={pitchData} getPitchData={getPitchData} />
      )}
      {(currTab === 2) && (
        renderTab2()
      )}
      {currTab === 3 && (
        <Scoring tabData={tabs[currTab]} />
      )}
    </div>
  );
};

export default Dashboard;
