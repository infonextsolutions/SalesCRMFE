import DealsCard from '@/components/customComponents/360_components/cardDeals';
import Navigator from '@/utils/customNavigator'
import React, { useState } from 'react'
import Team from './subTabs/Team';
import TeamTrends from './subTabs/TeamTrends';
import Individual from './subTabs/Individual';
import Responsiveness from './subTabs/Responsiveness';


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
            {currTab === 0 && <TeamTrends />}
            {currTab === 1 && <Team />}
            {currTab === 2 && <Individual />}
            {/* {currTab === 3 && <Responsiveness />} */}
        </div>
    )
}

export default Interaction