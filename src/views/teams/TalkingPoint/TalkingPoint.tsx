import React, { useState } from 'react'
import Navigator from '@/utils/customNavigator'
import OTPD from './subTabs/OTPD';
import PTPD from './subTabs/PTPD';
import TD from './subTabs/TD';
import ID from './subTabs/ID';

const TalkingPoint = () => {
    const [currTab, setCurrTab] = useState(0);
    const [tabs, setTabs] = useState([
        { id: 0, title: "Overall Talking Points Duration" },
        { id: 1, title: "Particular Talking Points Duration" },
        { id: 2, title: "Teams Discussion" },
        { id: 3, title: "Individual Discussion" },
    ]);

    const handleTabNavigation = (payload: any) => {
        setCurrTab(payload);
    };

    return (
        <div className=''>
            <Navigator width={false} callback={handleTabNavigation} current={currTab} list={tabs} />
            {currTab === 0 && <OTPD />}
            {currTab === 1 && <PTPD />}
            {currTab === 2 && <TD />}
            {currTab === 3 && <ID />}
        </div>
    )
}

export default TalkingPoint