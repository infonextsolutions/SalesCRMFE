import React from 'react'
import dynamic from 'next/dynamic'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { RESET_PASS_PAGE_JSON } from '@/360_Json_files/ScreensJSON'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={RESET_PASS_PAGE_JSON} />
            </div>
        </>
    )
}

const ResetPassword = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default ResetPassword