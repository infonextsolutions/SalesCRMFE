import React from 'react'
import DQAEAllocatedCalls from '@/components/pages/BDM_Pages/DQAEAllocatedCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAEAllocatedCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })


export default index