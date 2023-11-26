import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Recorded_calls_Call_Recordings } from '../../../360_Json_files/Team_Manager/CallRecordings'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Recorded_calls_Call_Recordings} />
            </div>
        </>
    )
}

const DTMRecordedCalls = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DTMRecordedCalls