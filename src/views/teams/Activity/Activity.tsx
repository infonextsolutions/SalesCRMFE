import DealsCard from '@/components/customComponents/360_components/cardDeals'
import React, { useState } from 'react'
import Table from '../Table'
import Pagination from '../Pagination';

const Activity = () => {
    const columns = [
        {
            width: 200,
            left: 40,
            text: "Team Member",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Open Leads (Volume)",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Close Leads (Volume)",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Leads Won (Volume)",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Leads Lost (Volume)",
            checked: true,
        },
        {
            width: 200,
            left: 20,
            text: "Leads Dead (Volume)",
            checked: true,
        },
    ];

    const [rows, setRows] = useState([
        [
            {
                text: "Shraddha P.",
                subText: "Sales Manager",
            },
            {
                text: "950",
            },
            {
                text: "2100",
            },
            {
                text: "2100",
            },
            {
                text: "2100",
            },
            {
                text: "2100",
            },
        ]
    ]);

    return (
        <div className='w-[100%]'>
            <div className="flex w-[100%] justify-between py-4">
                <DealsCard
                    label="Average Call Time (min)"
                    icon="/Images/Icons/Basic/UpArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Total Duration"
                    icon="/Images/Icons/Basic/DownArrow.svg"
                    count={76}
                    percent={50}
                />
                <DealsCard
                    label="Call Volume"
                    icon="/Images/Icons/Basic/BottomArrow.svg"
                    count={18}
                    percent={27.3}
                />
                <DealsCard
                    label="Calls Attended"
                    icon="/Images/Icons/Basic/UpArrow.svg"
                    count={101}
                    percent={50.8}
                />
            </div>
            <div>
                <Table columns={columns} rows={rows} />
                <Pagination />
            </div>
        </div>
    )
}

export default Activity