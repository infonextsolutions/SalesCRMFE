import React, { useState } from 'react'
import Table from '../../Table';
import Pagination from '../../Pagination';

const Team = () => {
    const columns = [
        {
            width: 200,
            left: 40,
            text: "Team Member",
        },
        {
            width: 120,
            left: 20,
            text: "Talk Ratio",
        },
        {
            width: 120,
            left: 20,
            text: "Longest Monologue",
        },
        {
            width: 120,
            left: 20,
            text: "Longest Customer Story",
        },
        {
            width: 120,
            left: 20,
            text: "Interactivity",
        },
        {
            width: 120,
            left: 20,
            text: "Patience",
        },
        {
            width: 120,
            left: 20,
            text: "Question Rate",
        },
    ];

    const [rows, setRows] = useState([
        [
            {
                text: "Sagar",
                // subText: "Sales Manager",
            },
            {
                text: "950",
            },
            {
                text: "2100",
            },
            {
                text: "$1,00,000",
            },
            {
                text: "$1,00,000",
            },
            {
                text: "930",
            },
            {
                text: "1060",
            },
        ],
    ]);

    return (
        <div className='w-[100%]'>
            <Table columns={columns} rows={rows} />
            <Pagination />
        </div>
    );
};

export default Team