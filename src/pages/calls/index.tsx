import React, { useEffect, useState } from 'react'
import Navbar from "@/components/app/Navbar/Navbar";
import Navigator from "@/utils/customNavigator";
import Filters from '@/views/teams/Filters';
import Table from '@/views/teams/Table';
import Pagination from '@/views/teams/Pagination';

const CallsPage = () => {
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

    useEffect(() => {
        console.log('++++++ currTab or subType CHANGED ++++++', currTab, subType)
        // call api for data with filters
    }, [currTab, subType]);

    const renderFilters = () => {
        return (
            <div className=''>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input type="text" className='' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search leads...' />
                    </div>
                    <div className='flex items-center'>

                    </div>
                </div>
                <div className=''>
                    <Filters filters={filters} />
                </div>
            </div>
        )
    };

    const renderACR = () => {
        return <Table rows={rowsACR} columns={columnsACR} />;
    };

    const renderFRCR = () => {
        return <Table rows={rowsFRCR} columns={columnsFRCR} />;
    };

    const renderToggleSwitch = () => {
        return (
            <div className='flex text-black'>
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

export default CallsPage