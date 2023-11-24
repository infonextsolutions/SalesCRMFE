import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { ALLOCATED_CALL } from '../../../360_Json_files/QA_excutive/Open_review_Allocated_call'

const DQAEAllocatedCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={ALLOCATED_CALL} />
            </div>
        </>
    )
}

export default DQAEAllocatedCalls