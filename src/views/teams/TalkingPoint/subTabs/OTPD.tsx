import React, { useState } from 'react'
import Table from '../../Table';
import Pagination from '../../Pagination';
import Filters from '../../Filters';

const OTPD = () => {
    const columns = [
        {
            width: 200,
            left: 40,
            text: "Talking Point",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Total Duration",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Average Duration",
            checked: true,
        },
    ];

    const columns2 = [
        {
            width: 200,
            left: 40,
            text: "Call Title",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Call Duration",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Call Date & Time",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Call Owner",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Call Participants",
            checked: true,
        },
    ];

    const [rows, setRows] = useState([
        [
            {
                text: "Introduction",
                // subText: "Sales Manager",
            },
            {
                text: "55 min",
            },
            {
                text: "35 min",
            },
        ],
        [
            {
                text: "New Leads",
                // subText: "Sales Manager",
            },
            {
                text: "55 min",
            },
            {
                text: "35 min",
            },
        ],
        [
            {
                text: "Sound Deal",
                // subText: "Sales Manager",
            },
            {
                text: "55 min",
            },
            {
                text: "35 min",
            },
        ],
    ]);

    const [rows2, setRows2] = useState([
        [
            {
                text: "Introduction",
            },
            {
                text: "55 min",
            },
            {
                text: "23 January 2023 3:00 pm",
            },
            {
                text: "John C.",
                subText: "Sales Manager",
            },
            {
                text: "Shraddha P.",
                subText: "Aarti"
            },
        ]
    ]);

    const [filters, setFilters] = useState({
        callTitle: {
            label: "Call Title",
            options: [
                { key: "Product Discussion", label: "Product Discussion" },
            ],
            value: "",
        },
        callDate: {
            label: "Call Date",
            value: "",
            type: "DATE",
        },
        companyName: {
            label: "Company Name",
            options: [
                { key: "ABC Corp.", label: "ABC Corp." },
            ],
            value: "",
        },
        callOwner: {
            label: "Call Owner",
            options: [
                { key: "John C.", label: "John C." },
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

    const handleFilterUpdate = (filterData: any, newValue: any) => {
        console.log('======= UPDATE FILTER : filterData, newValue =======', filterData, newValue);
    };

    return (
        <div>
            <Filters filters={filters} onUpdate={handleFilterUpdate} />
            <div className='w-[100%] flex'>
                <div className=''>
                    <Table rows={rows} columns={columns} />
                    <Pagination />
                </div>
                <div className=''>
                    <h1 className='text-black text-[22px]'>List of Calls</h1>
                    <Table columns={columns2} rows={rows2} />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default OTPD