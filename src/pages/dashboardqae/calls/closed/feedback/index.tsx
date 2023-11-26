import React from 'react'
import DQAEClosedFeedbackCalls from '@/components/pages/BDM_Pages/DQAEClosedFeedbackCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAEClosedFeedbackCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index