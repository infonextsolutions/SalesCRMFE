import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { ALLOCATED_CALL } from '../../../360_Json_files/QA_excutive/Open_review_Allocated_call'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={ALLOCATED_CALL} />
            </div>
        </>
    )
}

const DQAEAllocatedCalls = dynamic(() => Promise.resolve(page), { ssr: false })

export default DQAEAllocatedCalls