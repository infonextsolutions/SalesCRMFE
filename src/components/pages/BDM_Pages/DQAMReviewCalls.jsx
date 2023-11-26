import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Calls_for_Review_Allocated_Call_Review } from '../../../360_Json_files/QA_Manager/CallsforReview'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Calls_for_Review_Allocated_Call_Review} />
            </div>
        </>
    )
}

const DQAMReviewCalls = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DQAMReviewCalls