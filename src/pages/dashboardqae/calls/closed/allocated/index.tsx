import React from 'react'
import DQAEClosedAllocatedCalls from '@/components/pages/BDM_Pages/DQAEClosedAllocatedCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAEClosedAllocatedCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index