import React, { useState } from 'react'
import Table from '../../Table';
import Pagination from '../../Pagination';

const Team = () => {
    const columns = [
        {
            width: 200,
            left: 40,
            text: "Team Member",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Talk Ratio",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Longest Monologue",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Longest Customer Story",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Interactivity",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Patience",
            checked: true,
        },
        {
            width: 120,
            left: 20,
            text: "Question Rate",
            checked: true,
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