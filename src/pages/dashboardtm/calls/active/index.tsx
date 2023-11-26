import React from 'react'
import DTMActiveCalls from '@/components/pages/BDM_Pages/DTMActiveCalls'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DTMActiveCalls />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index