import React from 'react'
import DTMCloseLeads from '@/components/pages/BDM_Pages/DTMCloseLeads'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DTMCloseLeads />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index