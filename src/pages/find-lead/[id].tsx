import axios from "axios";
import React from "react";

const FindLead = () => {
  return <div></div>;
};

export default FindLead;

export async function getServerSideProps({ query, ...params }: any) {
  // console.log(params.limit,params.page);
  const response = await axios.get(
    "https://salescrmbe.onrender.com/api/leads/find-by-id"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}