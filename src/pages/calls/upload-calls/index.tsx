import Navigation from "@/components/app/Navigation";
import CallsContainer from "@/components/calls/upload-calls/Container/Container";
import DUMMY from "@/shared/dummy";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import dummy from "@/shared/dummy";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { useRouter } from "next/router";
import Backdrop from "@/components/View/Backdrop/Center";
import UploadCall from "@/components/View/uploadCall/index";
const dummyItem = {
  companyName: "ABC Corp",
  companyAddress: "Noida, UP",
  poc: "Shraddha P.",
  pocJob: "Sales Manager",
  names: "Anil L., Paul G., Rekha",
  lastActivity: "Email sent on 23 Jan 2023",
  dealSize: "11000",
  product: "Product A",
  calls: 5,
  docs: 2,
  chats: 5,
  mails: 5,
  meetings: 5,
  tasks: 5,
};

const Dummy = [
  { id: 1, type: "enquiry", data: dummyItem },
  { id: 2, type: "enquiry", data: dummyItem },
  { id: 3, type: "enquiry", data: dummyItem },
  { id: 4, type: "interaction", data: dummyItem },
  { id: 5, type: "interaction", data: dummyItem },
  { id: 6, type: "interaction", data: dummyItem },
  { id: 7, type: "interaction", data: dummyItem },
  { id: 8, type: "proposal", data: dummyItem },
  { id: 9, type: "proposal", data: dummyItem },
  { id: 10, type: "proposal", data: dummyItem },
  { id: 11, type: "win", data: dummyItem },
  { id: 12, type: "win", data: dummyItem },
  { id: 13, type: "win", data: dummyItem },
  { id: 14, type: "Lost", data: dummyItem },
  { id: 15, type: "Dead", data: dummyItem },
  { id: 16, type: "Dead", data: dummyItem },
  { id: 17, type: "Dead", data: dummyItem },
  { id: 18, type: "Dead", data: dummyItem },
];

const Calls = ({ data }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
      router.beforePopState(() => {
        router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        return true;
      });
    };

    handleBeforeHistoryChange();

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

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

  const AddLead = () => {};

  const [upload, setUpload] = useState(false);
  const [bool, setBool] = useState(true);
  console.log(data, "please");
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      {upload && (
        <Backdrop bool={bool}>
          <UploadCall
            cancel={() => {
              setBool(false);
              setTimeout(() => {
                setUpload(false);
                setBool(true);
              }, 500);
            }}
          />
        </Backdrop>
      )}
      <Navigation
        title={"Calls>Upload Calls"}
        buttons={[
          {
            text: "Upload Call",
            dropdown: true,
            id: 1,
            icon: "Plus",
            light: false,
            list: [],
            onClick1: async () => {
              // const response = await axios.post(
              //   "https://testsalescrm.nextsolutions.in/api/calling/make-call",
              //   {
              //     callTo: "7669481778",
              //   }
              // );
              setUpload(true);
            },
          },
          {
            text: "Export",
            dropdown: true,
            id: 1,
            icon: "Download",
            light: true,
            click: addExport,
            list: [
              // { title: "Print", Icon: "Printer" },
              { title: "Excel", Icon: "Excel" },
              // { title: "PDF", Icon: "PDF" },
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
      <CallsContainer data={data} dummy1={DUMMY} dummy2={dummy} />
    </div>
  );
};

export async function getServerSideProps({ query, ...params }: any) {
  const response = await axios.get(
    "https://testsalescrm.nextsolutions.in/api/recording/getManualRecordingList"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}

export default Calls;
