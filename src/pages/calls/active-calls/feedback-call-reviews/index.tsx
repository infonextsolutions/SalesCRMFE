import DUMMY from "@/shared/dummy";
import React, { useEffect, useRef, useState } from "react";
import dummy from "@/shared/dummy";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useRouter } from "next/router";
import Navbar from "@/components/app/Navbar/Navbar";
import ScheduleCallsContainer from "@/components/calls/active-calls/Container/ScheduleCallContainer";
import axios from "axios";
import Table from "@/views/teams/Table";
import Filters from "@/views/teams/Filters";
import Pagination from "@/views/teams/Pagination";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import Backdrop from "@/components/View/Backdrop";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const FeedbackCallReviewsAC = ({ data }: any) => {
    const columns = [
        {
            width: 200,
            left: 40,
            text: "Call ID",
        },
        {
            width: 120,
            left: 20,
            text: "Call Title",
        },
        {
            width: 120,
            left: 20,
            text: "Lead ID",
        },
        {
            width: 200,
            left: 40,
            text: "Lead Title",
        },
        {
            width: 120,
            left: 20,
            text: "Participants",
        },
        {
            width: 120,
            left: 20,
            text: "Call Owner",
        },
        {
            width: 200,
            left: 40,
            text: "Team Manager",
        },
        {
            width: 120,
            left: 20,
            text: "Client POC",
        },
        {
            width: 120,
            left: 20,
            text: "Company Name",
        },
        {
            width: 200,
            left: 40,
            text: "Call Date & Time",
        },
        {
            width: 120,
            left: 20,
            text: "Product/Service",
        },
        {
            width: 120,
            left: 20,
            text: "Call Duration",
        },
        {
            width: 200,
            left: 40,
            text: "Call Disposition",
        },
        {
            width: 120,
            left: 20,
            text: "Call Type",
        },
        {
            width: 120,
            left: 20,
            text: "Call Score",
        },
        {
            width: 200,
            left: 40,
            text: "Call Review Type",
        },
        {
            width: 120,
            left: 20,
            text: "Call Review Status",
        },
        {
            width: 120,
            left: 20,
            text: "Close Date",
        },
        {
            width: 200,
            left: 40,
            text: "Allocated On",
        },
        {
            width: 120,
            left: 20,
            text: "Review Due Date",
        },
        {
            width: 120,
            left: 20,
            text: "Last Updated On",
        },
        {
            width: 120,
            left: 20,
            text: "Feedback Requested On",
        },
        {
            width: 120,
            left: 20,
            text: "Feedback Requested By",
        },
    ];

    const router = useRouter();
    const [showManageCol, setShowManageCol] = useState(false);
    const [colToShow, setColToShow] = useState(columns);

    const [rows, setRows] = useState([
        [
            {
                text: "345XX",
            },
            {
                text: "Discussion on PX features",
            },
            {
                text: "12XXXX",
            },
            {
                text: "Lead Info - XYZ Discussion on PX feature",
            },
            {
                text: "Shraddha P.",
                subText: "Aarti"
            },
            {
                text: "John C.",
                subText: "Sales Manager"
            },
            {
                text: "Shraddha P.",
            },
            {
                text: "John C.",
                subText: "Sales Manager"
            },
            {
                text: "ABC Corp.",
                subText: "Noida"
            },
            {
                text: "23 January 2023 3:00 pm",
            },
            {
                text: "Product A",
            },
            {
                text: "30 min",
            },
            {
                text: "Engaged",
            },
            {
                text: "Follow-up Call",
            },
            {
                text: "---",
            },
            {
                text: "Allocated",
            },
            {
                text: "Open (New)",
            },
            {
                text: "---",
            },
            {
                text: "23 January 2023",
            },
            {
                text: "23 January 2023",
            },
            {
                text: "23 January 2023",
            },
            {
                text: "23 January 2023",
            },
            {
                text: "Amy F.",
                subText: "Team Manager"
            },
        ],
    ]);

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        callReviewStatus: {
            label: "Call Review Status",
            options: [
                { key: "Open (New)", label: "Open (New)" },
            ],
            value: "",
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
        callDisposition: {
            label: "Call Disposition",
            options: [
                { key: "Follow-Up required", label: "Follow-Up required" },
            ],
            value: "",
        },
        callType: {
            label: "Call Type",
            options: [
                { key: "Product Demo", label: "Product Demo" },
            ],
            value: "",
        },
        callDuration: {
            label: "Call Duration",
            value: "",
            type: "SLIDER",
            min: {
                value: 30,
                label: "30 min"
            },
            max: {
                value: 60,
                label: "1 hr"
            }
        },
        feedbackRequestedOn: {
            label: "Feedback Requested On",
            type: "DATERANGE",
            value: ["", ""],
        },
        reviewDueDate: {
            label: "Review Due Date",
            type: "DATERANGE",
            value: ["", ""],
        },
    });

    const ref: any = useRef();

    const exportXLSX = () => {
        const worksheet = XLSX.utils.json_to_sheet(data?.result);
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

    return (
        <>
            <Navbar mainTitle={"Open Reviews"} title={"Allocated Calls"} src="ActiveCalls" />
            <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px] mt-[20px]">
                <div className="flex items-center justify-between">
                    <input type="text" className="" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                    <div className="flex items-center">
                        <button className="text-bg-red ml-[220px]" onClick={() => setShowManageCol(!showManageCol)}>Manage Columns</button>
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
                </div>
                <Filters filters={filters} />
                <Table rows={rows} columns={columns} />
                <Pagination />
            </div>
            {showManageCol && (
                <Backdrop>
                    <div className="flex items-center justify-between">
                        <h1 className="text-black">Manage Columns</h1>
                    </div>
                </Backdrop>
            )}
        </>
    )
}

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

export default FeedbackCallReviewsAC