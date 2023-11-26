import React from 'react'
import DQAMClosedCalls from '@/components/pages/BDM_Pages/DQAMClosedCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAMClosedCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index