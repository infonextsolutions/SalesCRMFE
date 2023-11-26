import React from 'react'
import DQAMActiveCalls from '@/components/pages/BDM_Pages/DQAMActiveCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DQAMActiveCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index