import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Sales_Allocated_Leads } from '../../../360_Json_files/Team_Manager/AllocatedLeads'

const DTMAllocatedLeads = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Sales_Allocated_Leads} />
            </div>
        </>
    )
}

export default DTMAllocatedLeads