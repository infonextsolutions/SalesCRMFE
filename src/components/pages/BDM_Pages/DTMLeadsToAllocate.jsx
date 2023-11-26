import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Sales_Leads_To_Allocate } from '../../../360_Json_files/Team_Manager/Leadstoallocate'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Sales_Leads_To_Allocate} />
            </div>
        </>
    )
}

const DTMLeadsToAllocate = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DTMLeadsToAllocate