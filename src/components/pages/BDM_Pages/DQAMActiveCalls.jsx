import React from 'react'
import RenderComponent from '../../customComponents/ComponentRenderer'
import { Open_Reviews_Allocated_call_Reviews } from '../../../360_Json_files/QA_Manager/Active Calls'

const DQAMActiveCalls = () => {
  return (
    <>
      <div className='home-screen screen-wrapper'>
        <RenderComponent jsonToRender={Open_Reviews_Allocated_call_Reviews} />
      </div>
    </>
  )
}

export default DQAMActiveCalls