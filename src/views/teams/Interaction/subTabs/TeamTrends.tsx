import DealsCard from '@/components/customComponents/360_components/cardDeals'
import React from 'react'

const TeamTrends = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex w-[100%] justify-between py-4'>
                <DealsCard
                    label="Talk Ratio"
                    icon="/Images/Icons/Basic/UpArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Longest Monologue"
                    icon="/Images/Icons/Basic/DownArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Longest Customer Story"
                    icon="/Images/Icons/Basic/BottomArrow.svg"
                    count={101}
                    percent={50.8}
                />
            </div>
            <div className='flex w-[100%] justify-between py-4'>
                <DealsCard
                    label="Interactivity"
                    icon="/Images/Icons/Basic/UpArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Patience"
                    icon="/Images/Icons/Basic/DownArrow.svg"
                    count={101}
                    percent={50.8}
                />
                <DealsCard
                    label="Question Rate"
                    icon="/Images/Icons/Basic/BottomArrow.svg"
                    count={101}
                    percent={50.8}
                />
            </div>
        </div>
    )
}

export default TeamTrends