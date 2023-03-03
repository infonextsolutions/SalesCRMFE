import Navigation from '@/components/app/Navigation';
import LeadsContainer from '@/components/leads/Container';
import React from 'react';

export default function Home() {
  return (
    <div className="w-[100%] min-h-[90vh] " >
      {/* <Navigation  /> */}
      <Navigation>
    
      </Navigation>
      <LeadsContainer>

      </LeadsContainer>
    </div>
  )
}