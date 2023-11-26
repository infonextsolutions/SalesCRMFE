import React from 'react'
import DTMRecordedCalls from '@/components/pages/BDM_Pages/DTMRecordedCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DTMRecordedCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index