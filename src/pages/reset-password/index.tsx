import React from 'react'
import ResetPassword from '@/components/pages/BDM_Pages/ResetPassword'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <ResetPassword />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index