import React from 'react'
import DTMLeadsToAllocate from '@/components/pages/BDM_Pages/DTMLeadsToAllocate'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DTMLeadsToAllocate />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index