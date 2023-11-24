import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Sales_Leads_To_Allocate } from '../../../360_Json_files/Team_Manager/Leadstoallocate'

const DTMLeadsToAllocate = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Sales_Leads_To_Allocate} />
            </div>
        </>
    )
}

export default DTMLeadsToAllocate