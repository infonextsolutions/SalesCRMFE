import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Closed_Calls_Allocated_Call_Reviews } from '../../../360_Json_files/QA_Manager/Closed calls'

const DQAMClosedCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Closed_Calls_Allocated_Call_Reviews} />
            </div>
        </>
    )
}

export default DQAMClosedCalls