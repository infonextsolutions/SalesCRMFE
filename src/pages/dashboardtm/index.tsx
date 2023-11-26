import React from 'react'
import DashboardTM from '@/components/pages/DashboardTM'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <DashboardTM />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index