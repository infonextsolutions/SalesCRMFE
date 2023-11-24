import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Recorded_calls_Call_Recordings } from '../../../360_Json_files/Team_Manager/CallRecordings'

const DTMRecordedCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Recorded_calls_Call_Recordings} />
            </div>
        </>
    )
}

export default DTMRecordedCalls