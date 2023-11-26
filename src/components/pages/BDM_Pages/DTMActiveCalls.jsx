import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Active_calls_Scheduled_Calls } from '../../../360_Json_files/Team_Manager/Activecall-Scheduled Call.jsx'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Active_calls_Scheduled_Calls} />
            </div>
        </>
    )
}

const DTMActiveCalls = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DTMActiveCalls