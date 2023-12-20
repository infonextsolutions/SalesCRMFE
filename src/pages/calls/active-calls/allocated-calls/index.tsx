import Navigation from "@/components/app/Navigation";
import CallsContainer from "@/components/calls/active-calls/Container/ScheduleCallContainer";
import DUMMY from "@/shared/dummy";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import dummy from "@/shared/dummy";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useRouter } from "next/router";
import Navbar from "@/components/app/Navbar/Navbar";
import ScheduleCallsContainer from "@/components/calls/active-calls/Container/ScheduleCallContainer";
import ScheduleMeetingContainer from "@/components/calls/active-calls/Container/ScheduleMeetingContainer";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Calls = ({ data }: any) => {
    const [scheduleCalls, setScheduleCalls] = useState(true);
    const [scheduleMeeting, setScheduleMeeting] = useState(false);
    const ref: any = useRef();

    console.log(data);

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

    const gotoScheduleCall = () => {
        setScheduleCalls(true);
        setScheduleMeeting(false);
    };

    const gotoScheduleMeeting = () => {
        setScheduleCalls(false);
        setScheduleMeeting(true);
    };

    return (
        <>
            <Navbar mainTitle={"Calls "} title={"Active Calls"} src="Phone" />
            <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
                <hr className="border-t-2 border-gray-300 mb-4" />
                <ScheduleCallsContainer data={data} dummy1={DUMMY} dummy2={dummy} />
            </div>
        </>
    );
};

export async function getServerSideProps({ query, ...params }: any) {
    const response = await axios.get(
        "https://salescrmbe.onrender.com/api/active-call/find-all"
    );
    return {
        props: {
            data: response.data || {},
        },
    };
}

export default Calls;
