import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={{}} />
            </div>
        </>
    )
}

const DTMIndicator = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DTMIndicator