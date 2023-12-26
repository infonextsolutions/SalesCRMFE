import React, { useEffect, useRef, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useRouter } from "next/router";
import Navbar from "@/components/app/Navbar/Navbar";
import axios from "axios";
import Table from "@/views/teams/Table";
import Filters from "@/views/teams/Filters";
import Pagination from "@/views/teams/Pagination";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import Backdrop from "@/components/View/Backdrop";
import { getBasicIcon } from "@/utils/AssetsHelper";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const FeedbackCallReviewsAC = () => {
    const router = useRouter();
    const [columns, setColumns] = useState([
        {
            width: 200,
            left: 40,
            text: "Call ID",
            key: "call_id",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Title",
            key: "call_title",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Lead ID",
            key: "lead_id",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Lead Title",
            key: "lead_title",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Participants",
            key: "participants",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Owner",
            key: "call_owner",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Team Manager",
            key: "team_manager",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Client POC",
            key: "client_poc",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Company Name",
            key: "company_name",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Call Date & Time",
            key: "call_date_and_time",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Product/Service",
            key: "product_service",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Duration",
            key: "call_duration",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Call Disposition",
            key: "call_disposition",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Type",
            key: "call_type",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Score",
            key: "call_score",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Call Review Type",
            key: "call_review_type",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Review Status",
            key: "call_review_status",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Close Date",
            key: "close_date",
            checked: true,
        },
        {
            width: 200,
            left: 40,
            text: "Allocated On",
            key: "allocated_on",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Review Due Date",
            key: "review_due_date",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Last Updated On",
            key: "last_updated_on",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Feedback Requested On",
            key: "feedback_requested_on",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Feedback Requested By",
            key: "feedback_requested_by",
            checked: true,
        },
    ]);
    const [showManageCol, setShowManageCol] = useState(false);

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
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "DataSheet.xlsx");
        console.log("Exporting to Excel", rows);
    };

    const exportPDF = () => {
        const documentDefinition = {
            content: [
                {
                    text: "JSON to PDF Conversion",
                    style: "header",
                },
                {
                    text: JSON.stringify(rows, null, 4),
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
        console.log("Exporting to PDF", rows);
    };

    const addExport = (e: any, e1: any) => {
        if (e1 === 0) {
            exportXLSX();
        } else if (e1 === 1) {
            exportPDF();
        }
    };

    const handleColsToManage = (column: any, checked: boolean) => {
        setColumns((currCol: any) => {
            return currCol?.map((col: any, index: number) => {
                if (col?.key === column?.key) {
                    return {
                        ...col,
                        checked: checked
                    }
                } else {
                    return col;
                }
            });
        });
    };

    const updateColsToView = () => {
        setShowManageCol(!showManageCol);
    };

    useEffect(() => {
        if (window !== undefined) {
            const userId = localStorage.getItem("user-id");
            axios.get(`https://sales365.trainright.fit/api/qa/callForReview?qaStatus=allocated&qaId=${userId}`)
                .then((res: any) => {
                    const data = res?.data?.result;
                    setRows(data?.map((item: any, index: number) => {
                        let row = [
                            { text: item?.callId || "-" },
                            { text: item?.callTitle || "-" },
                            { text: item?.leadId?.[0]?.leadId || "-" },
                            { text: item?.leadId?.[0]?.lead_title || "-" },
                            { text: item?.callId || "-" },  // participants
                            { text: item?.owner?.name || "-" },  // call owner
                            { text: item?.teamManager || "-" },  // team manager
                            { text: item?.callId || "-" },  // client poc
                            { text: item?.company?.[0]?.company_name || "-" },
                            { text: item?.StartTime || "-" },  // call date & time
                            { text: item?.company?.[0]?.company_product_category || "-" },  // product/service
                            { text: item?.callId || "-" },  // call duration
                            { text: item?.callDisposiiton || "-" },  // call disposition
                            { text: item?.callType || "-" },  // call type
                            { text: item?.score || "-" },  // call score
                            { text: item?.qaId?.name || "-" },  // call review type
                            { text: item?.callId || "-" },  // call review status
                            { text: item?.callId || "-" },  // close date
                            { text: item?.qaAllocatedAt || "-" },  // allocated on
                            { text: item?.callId || "-" },  // review due date
                            { text: item?.callId || "-" },  // last updated on
                            { text: item?.callId || "-" },  // feedback requested on
                            { text: item?.callId || "-" },  // feedback requested by
                        ];
                        return row;
                    }));
                })
                .catch((err: any) => {
                    console.log('====== ERROR ======', err);
                });
        }
    }, []);

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
                    <div className="w-[60%] bg-white h-[40px] relative border-[#ccc] border-[1px] rounded-[12px] p-2  flex items-center">
                        <input type="text" className="w-[100%] text-black bg-white" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                        <img src={getBasicIcon("Search")} alt="Search" />
                    </div>
                    <div className="flex items-center gap-[20px]">
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
                                                <CSVLink data={rows} className="" ref={ref}>
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
                    <div className="p-[20px]">
                        <div className="w-[100%] flex items-center justify-between text-black mb-[20px]">
                            <h2 className="text-[24px] font-medium">Manage Columns</h2>
                            <button
                                className="w-[30px] h-[30px] cursor-pointer rounded-xl flex items-center justify-center bg-[#eeeeee]"
                                onClick={() => setShowManageCol(!showManageCol)}
                            >
                                <img
                                    alt="close"
                                    loading="lazy"
                                    className="w-[15px] h-[15px]"
                                    src="/Images/Icons/Basic/Cross.svg"
                                />
                            </button>
                        </div>
                        <div>
                            <p className="text-black mb-[16px]">Select columns to show</p>
                            {
                                columns?.map((column: any, index: number) => (
                                    <div key={index}>
                                        <label htmlFor={column?.key} className="text-black flex items-center gap-[16px]">
                                            <input type="checkbox" id={column?.key} name="manager_columns" onChange={(e) => handleColsToManage(column, e.target.checked)} checked={column?.checked} />
                                            <span className="">{column?.text}</span>
                                        </label>
                                    </div>
                                ))
                            }
                            <div className="w-[100%] flex justify-end pt-[30px]">
                                <button onClick={updateColsToView} className="bg-bg-red hover:bg-[#ff7d6d] rounded-2xl flex items-center justify-center cursor-pointer py-[10px] px-[30px] self-end">
                                    <span className="text-[#fff] font-medium text-[15px] tracking-wide">Save</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Backdrop>
            )}
        </>
    )
}

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

export default FeedbackCallReviewsAC