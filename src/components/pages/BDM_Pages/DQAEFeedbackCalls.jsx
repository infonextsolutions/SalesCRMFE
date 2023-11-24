import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { FEEDBACK_CALL_REVIEW } from '../../../360_Json_files/QA_excutive/Open_review_Feedbacl_cal_Reviewl'

const DQAEFeedbackCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={FEEDBACK_CALL_REVIEW} />
            </div>
        </>
    )
}

export default DQAEFeedbackCalls