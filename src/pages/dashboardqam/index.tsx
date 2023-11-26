import React from 'react'
import DashboardQAM from '@/components/pages/DashboardQAM'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DashboardQAM />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index