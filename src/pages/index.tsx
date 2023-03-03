import Navigation from '@/components/app/Navigation';
import LeadsContainer from '@/components/leads/Container';
import React from 'react';

export default function Home() {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px]" >
      {/* <Navigation  /> */}
      <Navigation buttons={[{text:"View",dropdown:false,id:0}]} />
      <LeadsContainer>
        
      </LeadsContainer>
    </div>
  )
}