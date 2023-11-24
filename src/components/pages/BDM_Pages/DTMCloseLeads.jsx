import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Sales_Close_Leads } from '../../../360_Json_files/Team_Manager/CloseLeads'

const DTMCloseLeads = () => {
    return (
        <>
            <div className='home-screen screen-wrapper'>
                <RenderComponent jsonToRender={Sales_Close_Leads} />
            </div>
        </>
    )
}

export default DTMCloseLeads