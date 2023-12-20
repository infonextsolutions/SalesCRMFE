import DealsCard from '@/components/customComponents/360_components/cardDeals'
import React from 'react'

const Responsiveness = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex w-[100%] justify-between py-4'>
                <DealsCard
                    label="Response Rate"
                    icon="/Images/Icons/Basic/UpArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Response Time"
                    icon="/Images/Icons/Basic/DownArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Fast Response Rate"
                    icon="/Images/Icons/Basic/BottomArrow.svg"
                    count={101}
                    percent={50.8}
                />
            </div>
            <div className=''>
                <h1>Email Response Data</h1>
            </div>
            <div className=''>
                <h1>Team Member Email Response Data</h1>
            </div>
        </div>
    )
}

export default Responsiveness