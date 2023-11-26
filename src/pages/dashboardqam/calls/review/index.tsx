import React from 'react'
import DQAMReviewCalls from '@/components/pages/BDM_Pages/DQAMReviewCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAMReviewCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index