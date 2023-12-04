import React from 'react'
import ForgotPassword from '@/components/pages/BDM_Pages/ForgotPassword'
import dynamic from 'next/dynamic'

const page = () => {
    return (
        <>
            <ForgotPassword />
        </>
    )
}

const index = dynamic(() => Promise.resolve(page), { ssr: false })

export default index