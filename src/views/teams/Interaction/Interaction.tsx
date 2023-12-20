import DealsCard from '@/components/customComponents/360_components/cardDeals';
import Navigator from '@/utils/customNavigator'
import React, { useState } from 'react'


const RenderTeamTrends = () => {
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
    );
};

const RenderTeam = () => {
    return (
        <div className='w-[100%]'>

        </div>
    );
};

const RenderIndividual = () => {
    return (
        <div className='w-[100%]'>

        </div>
    );
};

const RenderResponsiveness = () => {
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
                <h1>Team Member Email Response Data </h1>
            </div>
        </div>
    );
};

const Interaction = () => {
    const [currTab, setCurrTab] = useState(0);
    const [tabs, setTabs] = useState([
        { id: 0, title: "Team Trends" },
        { id: 1, title: "Team" },
        { id: 2, title: "Individual" },
        // { id: 3, title: "Responsiveness" },
    ]);

    const handleTabNavigation = (payload: any) => {
        setCurrTab(payload);
    };

    return (
        <div className=''>
            <Navigator width={false} callback={handleTabNavigation} current={currTab} list={tabs} />
            {currTab === 0 && <RenderTeamTrends />}
            {currTab === 1 && <RenderTeam />}
            {currTab === 2 && <RenderIndividual />}
            {currTab === 3 && <RenderResponsiveness />}
        </div>
    )
}

export default Interaction