import DealsCard from '@/components/customComponents/360_components/cardDeals'
import React from 'react'

const Activity = () => {
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
        </div>
    )
}

export default Activity