import Navigator from '@/utils/customNavigator'
import React from 'react'

const LeadProfileContainer = () => {
  return (
    <div className="bg-white rounded-xl p-[25px]">
          <Navigator
            current={0}
            list={[
              {
                id:0,
                title:"DEAL INFO"
              },
              {
                id:1,
                title:"DEAL INFO"
              },
              {
                id:2,
                title:"DEAL INFO"
              },
              {
                id:3,
                title:"DEAL INFO"
              }
            ]}
          />
        </div>
  )
}

export default LeadProfileContainer