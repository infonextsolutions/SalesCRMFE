import React from 'react'
import DashboardQAE from '@/components/pages/DashboardQAE'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DashboardQAE />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index