import axios from 'axios';
import React from 'react';

const FindAll=()=>{

    return(
        <div>

        </div>
    )
}

export default FindAll;

export async function getServerSideProps({ query,...params }:any) {
    const response = await axios.get("https://sales365.trainright.fit/api/leads/find-all");
    return {
        props: {
          // TODO: Can do better error handling here by passing another property error in the component
          data: {},
        }, // will be passed to the page component as props
      };
}