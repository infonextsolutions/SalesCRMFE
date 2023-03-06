import axios from "axios";
import React from "react";

const csvFile = () => {
  return <div></div>;
};

export default csvFile;

export async function getServerSideProps({ query, ...params }: any) {
  // console.log(params.limit,params.page);
  const response = await axios.get(
    "https://testsalescrm.nextsolutions.in/api/leads/upload"
  );
  console.log(response.data);
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}