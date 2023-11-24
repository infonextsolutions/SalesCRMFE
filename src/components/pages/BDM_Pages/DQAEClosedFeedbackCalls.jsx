import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { QA_EXECUTIVE_CLOSE_CALL_FEEDBACK_CALL_SCREEN } from '../../../360_Json_files/QA_excutive/QA_Executive_Close_Call'

const DQAEClosedFeedbackCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={QA_EXECUTIVE_CLOSE_CALL_FEEDBACK_CALL_SCREEN} />
            </div>
        </>
    )
}

export default DQAEClosedFeedbackCalls