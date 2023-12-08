import axios from 'axios';
import React from 'react';

const CreateLead=()=>{

    return(
        <div>

        </div>
    )
}

export default CreateLead;

export async function getServerSideProps({ query,...params }:any) {
    // console.log(params.limit,params.page);
    const response = await axios.get("https://salescrmbe.onrender.com/api/leads/create");
    return {
        props: {
          // TODO: Can do better error handling here by passing another property error in the component
          data: {},
        }, // will be passed to the page component as props
      };
}   