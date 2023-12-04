import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import dynamic from 'next/dynamic'
import { FORGOT_PASS_PAGE_JSON } from '@/360_Json_files/ScreensJSON'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={FORGOT_PASS_PAGE_JSON} />
            </div>
        </>
    )
}

const ForgotPassword = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default ForgotPassword