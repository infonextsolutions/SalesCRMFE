import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Calls_for_Review_Allocated_Call_Review } from '../../../360_Json_files/QA_Manager/CallsforReview'

const DQAMReviewCalls = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Calls_for_Review_Allocated_Call_Review} />
            </div>
        </>
    )
}

export default DQAMReviewCalls