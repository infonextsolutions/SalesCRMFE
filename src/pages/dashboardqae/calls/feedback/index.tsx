import React from 'react'
import DQAEFeedbackCalls from '@/components/pages/BDM_Pages/DQAEFeedbackCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAEFeedbackCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index