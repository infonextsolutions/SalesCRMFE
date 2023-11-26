import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Sales_Allocated_Leads } from '../../../360_Json_files/Team_Manager/AllocatedLeads'
import dynamic from 'next/dynamic'

const Comp = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Sales_Allocated_Leads} />
            </div>
        </>
    )
}

const DTMAllocatedLeads = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DTMAllocatedLeads