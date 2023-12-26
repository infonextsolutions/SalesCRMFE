import React, { useEffect, useRef, useState } from 'react'
import Navbar from "@/components/app/Navbar/Navbar";
import Navigator from "@/utils/customNavigator";
import Filters from '@/views/teams/Filters';
import Table from '@/views/teams/Table';
import Pagination from '@/views/teams/Pagination';
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import NavigationWithoutTitle from "@/components/app/NavigationWithoutTitle";
import { CSVLink } from "react-csv";
import axios from 'axios';
import { getBasicIcon } from '@/utils/AssetsHelper';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CallsPage = ({ data = [{}, {}] }: any) => {
    const columnsACR = [
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
            text: "Company Name",
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
            text: "Call Date & Time",
        },
        {
            width: 200,
            left: 40,
            text: "Product/Service",
        },
        {
            width: 120,
            left: 20,
            text: "Call Disposition",
        },
        {
            width: 120,
            left: 20,
            text: "Call Type",
        },
        {
            width: 200,
            left: 40,
            text: "Call Review Type",
        },
        {
            width: 120,
            left: 20,
            text: "Call Score",
        },
        {
            width: 120,
            left: 20,
            text: "Allocation Type",
        },
        {
            width: 200,
            left: 40,
            text: "Allocated On",
        },
        {
            width: 120,
            left: 20,
            text: "Allocated To",
        },
        {
            width: 120,
            left: 20,
            text: "Review Due Date",
        },
        {
            width: 120,
            left: 20,
            text: "Call Review Status",
        },
    ];

    const columnsFRCR = [
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
            width: 120,
            left: 20,
            text: "Call Date & Time",
        },
        {
            width: 200,
            left: 40,
            text: "Product/Service",
        },
        {
            width: 200,
            left: 40,
            text: "Call Review Type",
        },
        {
            width: 120,
            left: 20,
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
            width: 120,
            left: 20,
            text: "Feedback Requested On",
        },
        {
            width: 200,
            left: 40,
            text: "Feedback Requested By",
        },
        {
            width: 120,
            left: 20,
            text: "On Time Review",
        },
        {
            width: 120,
            left: 20,
            text: "Delay Time",
        },
        {
            width: 120,
            left: 20,
            text: "Time To Complete Review",
        },
        {
            width: 120,
            left: 20,
            text: "Call Review Status",
        },
    ];

    const [rowsACR, setRowsACR] = useState([]);
    const [rowsFRCR, setRowsFRCR] = useState([]);

    const [currTab, setCurrTab] = useState(0);
    const [subType, setSubType] = useState("allocated_call_reviews");
    const [search, setSearch] = useState("");
    const [tabs, setTabs] = useState([
        { id: 0, title: "Calls For Review" },
        { id: 1, title: "Active Calls" },
        { id: 2, title: "Closed Calls" },
    ]);

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
            options: [
                { key: "Product Demo", label: "Product Demo" },
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
    });

    const generateRows = (data: any) => {
        if (subType === "allocated_call_reviews") {
            console.log('-------------------- generateRows ------------------', data);
            setRowsACR(data?.map((item: any, index: number) => {
                let row = [
                    { text: item?.callId || "-" },
                    { text: item?.callTitle || "-" },
                    { text: item?.leadId?.[0]?.leadId || "-" },
                    { text: item?.leadId?.[0]?.lead_title || "-" },
                    { text: item?.company?.[0]?.company_name || "-" },
                    { text: item?.owner?.[0]?.name || "-" },  // call owner
                    { text: item?.teamManager?.name || "-" },  // team manager
                    { text: item?.callId || "-" },  // client poc
                    { text: item?.StartTime || "-" },  // call date & time
                    { text: item?.company?.[0]?.company_product_category || "-" },  // product/service
                    { text: item?.callDisposiiton || "-" },  // call disposition
                    { text: item?.callType || "-" },  // call type
                    { text: item?.callId || "-" },  // call review type
                    { text: item?.score || "-" },  // call score
                    { text: item?.callId || "-" },  // allocation type
                    { text: item?.qaAllocatedAt || "-" },  // allocated on
                    { text: item?.qaId?.name || "-" },  // allocated to
                    { text: item?.callId || "-" },  // review due date
                    { text: item?.callId || "-" },  // call review status
                ];
                return row;
            }));
        } else {
            setRowsFRCR(data?.map((item: any, index: number) => {
                let row = [
                    { text: item?.callId || "-" },
                    { text: item?.callTitle || "-" },
                    { text: item?.leadId?.[0]?.leadId || "-" },
                    { text: item?.leadId?.[0]?.lead_title || "-" },
                    { text: item?.owner?.name || "-" },  // call owner
                    { text: item?.teamManager || "-" },  // team manager
                    { text: item?.callId || "-" },  // client poc
                    { text: item?.company?.[0]?.company_name || "-" },
                    { text: item?.StartTime || "-" },  // call date & time
                    { text: item?.company?.[0]?.company_product_category || "-" },  // product/service
                    { text: item?.callId || "-" },  // call review type
                    { text: item?.callDisposiiton || "-" },  // call disposition
                    { text: item?.callType || "-" },  // call type
                    { text: item?.score || "-" },  // call score
                    { text: item?.qaId?.name || "-" },  // feedback requestd by
                    { text: item?.callId || "-" },  // on time review
                    { text: item?.callId || "-" },  // delay time
                    { text: item?.callId || "-" },  // time to complete review
                    { text: item?.callId || "-" },  // call review status
                ];
                return row;
            }));
        }
    };

    const getData = () => {
        let status = '';
        switch (currTab) {
            case 0:
                status = 'allocated';
                break;
            case 1:
                status = 'active';
                break;
            case 2:
                status = 'closed';
                break;
            default:
                status = 'active';
                break;
        }
        axios.get(`https://salescrmbe.onrender.com/api/qam/callForReview?qaStatus=${status}`)
            .then((res: any) => {
                const data = res?.data?.result;
                console.log('---------- RESPONSE ----------', data);
                generateRows(data);
            }).catch((err: any) => {
                console.log('++++++ ERROR ++++++', err);
            });
    };

    useEffect(() => {
        getData();
    }, [currTab, subType]);

    const handleTabNavigation = (payload: any) => {
        setCurrTab(payload);
        setSubType("allocated_call_reviews");
    };

    const handleSubType = (payload: string) => {
        setSubType(payload);
    };

    const getQuery = () => {
        let query = '';
        if (search) {
            query += `search=${search}`;
        }
        Object.keys(filters).forEach((filterKey: any, index: number) => {
            if (filters?.[filterKey as keyof typeof filters]?.value !== "") {
                query += (query !== "" ? "&" : "") + `${filterKey}=${filters?.[filterKey as keyof typeof filters]?.value}`;
            }
        });
        return query;
    };

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
        console.log('++++++ currTab or subType CHANGED ++++++', currTab, subType)
        // call api for data with filters
    }, [currTab, subType]);

    const renderControls = () => {
        return (
            <div className='flex items-center gap-[20px]'>
                {
                    currTab === 0
                        ? (
                            <>
                                <button className='text-black'>Assign To</button>
                                <button className='text-black'>Auto Allocate</button>
                            </>
                        )
                        : currTab === 1
                            ? (
                                <button className='text-black'>Re-Assign To</button>
                            )
                            : null
                }
            </div>
        );
    };

    const renderFilters = () => {
        return (
            <div className='w-[100%] py-[20px]'>
                <div className='flex items-center justify-between'>
                    <div className='w-[100%] flex items-center gap-[20px]'>
                        <div className="w-[60%] bg-white h-[40px] relative border-[#ccc] border-[1px] rounded-[12px] p-2  flex items-center">
                            <input type="text" className="w-[100%] text-black bg-white" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                            <img src={getBasicIcon("Search")} alt="Search" />
                        </div>
                        {/* {renderControls()} */}
                    </div>
                    <div className='flex items-center gap-[20px]'>
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
                <div className=''>
                    <Filters filters={filters} />
                </div>
            </div>
        )
    };

    const renderACR = () => {
        console.log('+++++++++++++++ RENDER ACR ++++++++++++++', rowsACR);
        return <Table rows={rowsACR} columns={columnsACR} />;
    };

    const renderFRCR = () => {
        return <Table rows={rowsFRCR} columns={columnsFRCR} />;
    };

    const renderToggleSwitch = () => {
        return (
            <div className='flex text-black items-center gap-[20px]'>
                <button onClick={() => handleSubType("allocated_call_reviews")}>Allocated Call Reviews</button>
                <button onClick={() => handleSubType("feedback_requested_call_reviews")}>Feedback Requested Call Reviews</button>
            </div>
        );
    };

    return (
        <>
            <Navbar mainTitle={`Calls > ${tabs?.[currTab]?.title}`} title={subType === "allocated_call_reviews" ? "Allocated Call Reviews" : "Feedback Requested Call Reviews"} src="Phone" />
            <Navigator
                callback={handleTabNavigation}
                current={currTab}
                list={tabs}
                width={true}
            />
            {renderToggleSwitch()}
            {renderFilters()}
            {subType === "allocated_call_reviews" ? (
                renderACR()
            ) : (
                renderFRCR()
            )}
            <Pagination />
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

export default CallsPage