import React from 'react'
import DTMAllocatedLeads from '@/components/pages/BDM_Pages/DTMAllocatedLeads'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DTMAllocatedLeads />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index