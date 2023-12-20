import React, { Suspense, useState } from 'react'
import Navbar from "@/components/app/Navbar/Navbar";
import BigSpinner from "@/components/loader/BigSpinner";
import Navigator from "@/utils/customNavigator";
import Activity from '@/views/teams/Activity/Activity';
import Interaction from '@/views/teams/Interaction/Interaction';
import Indicators from '@/views/teams/Indicators/Indicators';
import TalkingPoint from '@/views/teams/TalkingPoint/TalkingPoint';
import Guidance from '@/views/teams/Guidance/Guidance';

const TeamsPage = () => {
    const [currTab, setCurrTab] = useState(0);
    const [tabs, setTabs] = useState([
        { id: 0, title: "Activity" },
        { id: 1, title: "Interaction" },
        { id: 2, title: "Talking Point" },
        // { id: 3, title: "Indicators" },
        // { id: 4, title: "Guidance" },
    ]);

    const handleTabNavigation = (payload: any) => {
        setCurrTab(payload);
    };

    return (
        <>
            <Navbar mainTitle="Teams" src="Teams" />
            <Suspense fallback={<BigSpinner />}>
                <div className="w-[100%] min-h-[90vh] pl-[20px] pr-[20px]">
                    <Navigator width={false} callback={handleTabNavigation} current={currTab} list={tabs} />
                    {currTab === 0 && <Activity />}
                    {currTab === 1 && <Interaction />}
                    {currTab === 2 && <TalkingPoint />}
                    {currTab === 3 && <Indicators />}
                    {currTab === 4 && <Guidance />}
                </div>
            </Suspense>
        </>
    )
}

export default TeamsPage