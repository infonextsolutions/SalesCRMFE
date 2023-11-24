import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { QA_EXECUTIVE_CLOSE_CALL_ALLOCATED_CALL_SCREEN } from '../../../360_Json_files/QA_excutive/QA_Executive_Close_Call'

const DQAEClosedAllocatedCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={QA_EXECUTIVE_CLOSE_CALL_ALLOCATED_CALL_SCREEN} />
            </div>
        </>
    )
}

export default DQAEClosedAllocatedCalls