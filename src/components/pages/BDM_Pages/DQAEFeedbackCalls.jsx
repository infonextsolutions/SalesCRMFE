import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { FEEDBACK_CALL_REVIEW } from '../../../360_Json_files/QA_excutive/Open_review_Feedbacl_cal_Reviewl'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={FEEDBACK_CALL_REVIEW} />
            </div>
        </>
    )
}

const DQAEFeedbackCalls = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DQAEFeedbackCalls